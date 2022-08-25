import tw from "tailwind-styled-components/dist/tailwind";
import { useCartContext } from "../src/context/CartProvider";
import Head from "next/head";


const Payment = () => {
  const { formUser } = useCartContext();
  console.log(formUser);
  return (
    <>
      <Head>
        <title>Payment</title>
      </Head>
    </>
  )
}

export default Payment;

// styled ui component for payment component
