import tw from "tailwind-styled-components/dist/tailwind";
import Head from "next/head";
import { useCartContext } from "../src/context/CartProvider";
import CartProductTile from "../src/components/CartProductTile";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, subTotal, taxes, netTotal, setCart } = useCartContext();
  const router = useRouter();

  const handleNextPage = () => {
    if (!cart?.length) {
      toast.warn("Cannot proceed with an empty cart", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        toastId: "nextPageToast",
      })
    } else {
      router.push('/shipping')
    }
  }

  const emptyCartMsg = (
    <span className="text-base font-semibold text-stone-500">No items in cart</span>
  );

  const summaryCartMsg = (
    <span className="text-base font-semibold text-stone-500">No summary</span>
  );

  return (
    <div>
      <Head>
        <title>Your Cart</title>
      </Head>
      <CartSection>
        {/* Shopping Cart Section */}
        <CartLeftSide>
          <span className="text-2xl xl:text-4xl font-serif text-stone-500">Shopping Cart</span>
          <div className={cart?.length !== 0 ? "p-[10px] space-y-[15px] border-y border-slate-400" : "py-[40px] border-y border-slate-400"}>
            {
              cart?.length === 0 ? emptyCartMsg : (
                <>
                  {
                    cart?.map((product) => (
                      <CartProductTile key={product?.id} productImg={product?.image} productTitle={product?.title} productPrice={product?.price} productDes={product?.description} productId={product?.id} />
                    ))
                  }
                </>
              )
            }
          </div>
          <div className="flex items-center justify-center xl:justify-start gap-[10px]">
            <NextCartBtn onClick={handleNextPage}>Next</NextCartBtn>
            <CancelCartBtn onClick={() => {
              setCart([])
              router.push("/shop")
            }}>Cancel</CancelCartBtn>
          </div>
        </CartLeftSide>
        {/* Summary Section */}
        <CartRightSide>
          <span className="text-2xl xl:text-4xl font-serif text-stone-500">Summary</span>
          <div className={cart?.length !== 0 ? "py-[5px] border-y border-slate-400" : "py-[40px] border-y border-slate-400"}>
            {
              cart?.length === 0 ? summaryCartMsg : (
                <div>
                  <span>
                    <input type="search" placeholder="Enter Coupon Code" className="text-black font-bold uppercase text-start py-[10px] px-[10px] rounded-sm focus:outline-none focus:border-stone-400 xl:w-[450px] disabled:bg-transparent" disabled />
                  </span>
                  <div className="flex flex-row space-x-[10px] py-[10px] text-base text-stone-500 border-t border-slate-400">
                    <div className="flex flex-col space-y-[20px] w-[50%] uppercase">
                      <span>subtotal</span>
                      <span>shipping</span>
                      <span>taxes</span>
                    </div>
                    <div className="flex flex-col space-y-[20px] w-[50%]">
                      <span>${subTotal}</span>
                      <span>---</span>
                      <span>${taxes}</span>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-[10px] py-[10px] text-2xl text-stone-500 border-t border-slate-400">
                    <div className="flex flex-col space-y-[20px] w-[50%] uppercase font-semibold">
                      <span>total</span>
                    </div>
                    <div className="flex flex-col space-y-[20px] w-[50%] uppercase font-semibold">
                      <span>${netTotal}</span>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </CartRightSide>
      </CartSection>
    </div>
  )
}

export default Cart;

// styled ui components for cart component
const CartSection = tw.section`
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

const CartLeftSide = tw.div`
  flex
  flex-col
  text-center
  space-y-[10px]
  my-[50px]
  xl:w-[60%]
  xl:text-left
  xl:my-[0px]
`;
const CartRightSide = tw.div`
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