import tw from "tailwind-styled-components/dist/tailwind";
import { useCartContext } from "../src/context/CartProvider";
import Head from "next/head";
import SummaryWithProducts from "../src/components/SummaryWithProducts";
import PaymentMethod from "../src/components/PaymentMethod";
import { useRouter } from "next/router";
import { toast } from "react-toastify";


const Payment = () => {
  const router = useRouter();
  const { cart, subTotal, taxes, netTotal, setCart, formUser, card, setCard, paymentMethod } = useCartContext();
  // handler function for the input value
  const handleInputChange = (e) => {
    setCard({ [e.target.name]: e.target.value });
  }

  const summaryProps = {
    cart: cart,
    shippingOption: formUser?.shippingOption,
    netTotal: netTotal,
    subTotal: subTotal,
    taxes: taxes
  };

  const paymentMethodProps = {
    handleInput: handleInputChange,
  };

  return (
    <>
      <Head>
        <title>Payment</title>
      </Head>
      <PaymentSection>
        <PaymentLeftSide>
          <span className="text-2xl xl:text-4xl font-serif text-stone-500">Payment Method</span>
          <div className="py-[20px] px-[10px] border-t border-slate-400 xl:px-0">
            <PaymentMethod {...paymentMethodProps} />
            <div className="flex items-center justify-center xl:justify-start gap-[10px] py-[20px]">
              <PayNowBtn onClick={() => {
                if (paymentMethod === "payPal") {
                  toast.success("Order placed!\nThank you for shopping with us.", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    toastId: "payPalSuccess",
                  })
                  setCart([]);
                  router.push('/shop');
                }
                if (paymentMethod === "creditCard") {
                  if (Object.values(card).filter(value => value != "").length !== 0) {
                    toast.success("Thank you for shopping with us today.", {
                      position: toast.POSITION.BOTTOM_RIGHT,
                      autoClose: 4000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: false,
                      progress: undefined,
                      toastId: "CCSuccess",
                    })
                    setCart([]);
                    router.push('/shop');
                  }
                }
                // else {
                //   toast.warn("No credit card input.", {
                //     position: toast.POSITION.BOTTOM_RIGHT,
                //     autoClose: 4000,
                //     hideProgressBar: true,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: false,
                //     progress: undefined,
                //     toastId: "CCWarn",
                //   })
                // }
              }}>Pay Now</PayNowBtn>
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

const PayNowBtn = tw.button`
bg-blue-400
text-blue-50
  rounded-md
  space-x-2
  px-6
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
  py-4
  tracking-wide
hover:bg-red-500 transition duration-200
`;