import tw from "tailwind-styled-components/dist/tailwind";
import { useCartContext } from "../src/context/CartProvider";
import Head from "next/head";
import SummaryWithProducts from "../src/components/SummaryWithProducts";


const Payment = () => {
  const { cart, subTotal, taxes, netTotal, setCart, formUser } = useCartContext();

  const summaryProps = {
    cart: cart,
    shippingOption: formUser?.shippingOption,
    netTotal: netTotal,
    subTotal: subTotal,
    taxes: taxes
  }
  return (
    <>
      <Head>
        <title>Payment</title>
      </Head>
      <PaymentSection>
        <PaymentLeftSide>
          <span className="text-2xl xl:text-4xl font-serif text-stone-500">Payment Method</span>
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