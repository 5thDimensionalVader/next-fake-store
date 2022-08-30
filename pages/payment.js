import tw from "tailwind-styled-components/dist/tailwind";
import { useCartContext } from "../src/context/CartProvider";
import Head from "next/head";
import SummaryWithProducts from "../src/components/SummaryWithProducts";
import PaymentMethod from "../src/components/PaymentMethod";
import { useState } from "react";
import { useRouter } from "next/router";


const Payment = () => {
  const router = useRouter();
  const { cart, subTotal, taxes, netTotal, setCart, formUser } = useCartContext();

  const summaryProps = {
    cart: cart,
    shippingOption: formUser?.shippingOption,
    netTotal: netTotal,
    subTotal: subTotal,
    taxes: taxes
  }
  
  // credit card state
  const [card, setCard] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  // handler function for the input focus
  const handleInputFocus = (e) => {
    setCard({ focus: e.target.value });
  };

  // handler function for the input value
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCard({ [name]: value });
  }



  return (
    <>
      <Head>
        <title>Payment</title>
      </Head>
      <PaymentSection>
        <PaymentLeftSide>
          <span className="text-2xl xl:text-4xl font-serif text-stone-500">Payment Method</span>
          <div className="py-[20px] px-[10px] border-t border-slate-400 xl:px-0">
            <PaymentMethod />
            <div className="flex items-center justify-center xl:justify-start gap-[10px] py-[20px]">
              <NextCartBtn type="submit">Pay Now</NextCartBtn>
              <CancelCartBtn onClick={() => {
                setCart([]);
                router.push("/shop");
              }}>Cancel</CancelCartBtn>
            </div>
          </div>
        </PaymentLeftSide>
        <PaymentRightSide>
          <span className="text-2xl xl:text-4xl font-serif text-stone-500">Summary</span>
          <SummaryWithProducts {...summaryProps} />
        </PaymentRightSide>
      </PaymentSection>
    </>
  )
}

export default Payment;

// styled ui component for payment component
const PaymentSection = tw.section`
container
flex
flex-col-reverse
mx-auto
space-y-[10px]
py-[80px]
xl:px-[30px]
xl:flex-row
xl:space-x-[30px]
xl:my-[10px]
xl:space-y-[0px]
`;

const PaymentLeftSide = tw.div`
flex
flex-col
text-center
space-y-[10px]
my-[50px]
xl:w-[60%]
xl:text-left
xl:my-[0px]
`;

const PaymentRightSide = tw.div`
flex
flex-col
text-center
my-[10px]
space-y-[10px]
xl:w-[40%]
xl:my-[0px]
`;

const NextCartBtn = tw.button`
bg-blue-400
text-blue-50
  rounded-md
  space-x-2
  px-6
  py-3
  px-12
  py-4
  tracking-wide
hover:bg-blue-500 transition duration-200
`;

const CancelCartBtn = tw.button`
bg-red-400
text-blue-50
  rounded-md
  space-x-2
  px-6
  py-3
  px-12
  py-4
  tracking-wide
hover:bg-red-500 transition duration-200
`;