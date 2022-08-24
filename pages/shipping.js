import tw from "tailwind-styled-components/dist/tailwind";
import Head from "next/head";
import { useCartContext } from "../src/context/CartProvider";
import Select from 'react-select';
import countryList from "react-select-country-list";
import { useState, useMemo } from "react";
import { useRouter } from "next/router";

const Shipping = () => {

  const router = useRouter();
  const { cart, subTotal, taxes, netTotal, setCart } = useCartContext();
  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);

  const [shippingOption, setShippingOption] = useState("");

  const changeHandler = value => {
    setValue(value)
  };

  const handleNextPage = () => {

  }

  return (
    <div>
      <Head>
        <title>Shipping</title>
      </Head>
      <ShippingSection>
        {/* Shipping Details */}
        <ShippingLeftSide>
          <span className="text-2xl xl:text-4xl font-serif text-stone-500">Shipping Details</span>
          <div className="py-[20px] border-t border-slate-400">
            <form className="flex flex-col items-center gap-[10px] border-b border-slate-400 py-[15px]">
              <div className="flex flex-col items-center gap-[20px] xl:flex-row">
                <input type="text" placeholder="First Name" className="text-black uppercase text-start py-[10px] px-[10px] border border-slate-400 rounded-sm focus:outline-none focus:border-stone-400 w-[330px] xl:w-[430px]" />
                <input type="text" placeholder="Last Name" className="text-black uppercase text-start py-[10px] px-[10px] border border-slate-400 rounded-sm focus:outline-none focus:border-stone-400 w-[330px] xl:w-[430px]" />
              </div>

              <input type="text" placeholder="Address 1" className="text-black uppercase text-start py-[10px] px-[10px] border border-slate-400 rounded-sm focus:outline-none focus:border-stone-400 w-[330px] xl:w-[100%]" />
              <input type="text" placeholder="Address 2" className="text-black uppercase text-start py-[10px] px-[10px] border border-slate-400 rounded-sm focus:outline-none focus:border-stone-400 w-[330px] xl:w-[100%]" />

              <div className="flex flex-col items-center gap-[20px] xl:flex-row">
                <Select options={options} value={value} onChange={changeHandler} className=" text-start w-[330px] xl:w-[430px]" />
                <input type="text" placeholder="City" className="text-black uppercase text-start py-[10px] px-[10px] border border-slate-400 rounded-sm focus:outline-none focus:border-stone-400 w-[330px] xl:w-[430px]" />
              </div>

              <div className="flex flex-col items-center gap-[20px] xl:flex-row">
                <input type="text" placeholder="Zip/Postal Code" className="text-black uppercase text-start py-[10px] px-[10px] border border-slate-400 rounded-sm focus:outline-none focus:border-stone-400 w-[330px] xl:w-[430px]" />
                <input type="text" placeholder="Phone Number" className="text-black uppercase text-start py-[10px] px-[10px] border border-slate-400 rounded-sm focus:outline-none focus:border-stone-400 w-[330px] xl:w-[430px]" />
              </div>
            </form>
            {/* Radio Select */}
            <div className="flex flex-col items-center gap-[20px] py-[15px] px-[15px] xl:px-0 xl:flex-row border-b border-slate-400">
              <div className="flex items-center pl-4 rounded border border-slate-400 px-[20px] py-[15px] w-[320px]">
                <input type="radio" value="free" name="shippingOption" className="w-4 h-4 text-blue-600 focus:ring-0" onChange={(e) => setShippingOption(e.target.value)} />
                <label className="py-4 ml-2 w-full text-lg font-medium text-stone-500">Free Shipping</label>
              </div>
              <div className="flex items-center pl-4 rounded border border-slate-400 px-[20px] py-[15px] w-[320px]">
                <input type="radio" name="shippingOption" value="20" className="w-4 h-4 text-blue-600 focus:ring-0" onChange={(e) => setShippingOption(e.target.value)} />
                <label className="py-4 ml-2 w-full text-lg font-medium text-stone-500">Next Day Delivery - $20</label>
              </div>
            </div>

            <div className="flex items-center justify-center xl:justify-start gap-[10px] py-[20px]">
              <NextCartBtn onClick={handleNextPage}>Next</NextCartBtn>
              <CancelCartBtn onClick={() => {
                setCart([])
                router.push("/shop")
              }}>Cancel</CancelCartBtn>
            </div>
          </div>
        </ShippingLeftSide>
        {/* Summary */}
        <ShippingRightSide>
          <span className="text-2xl xl:text-4xl font-serif text-stone-500">Summary</span>
          <div className={cart?.length !== 0 ? "py-[5px] border-y border-slate-400" : "py-[40px] border-y border-slate-400"}>
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
          </div>
        </ShippingRightSide>
      </ShippingSection>
    </div>
  )
}

export default Shipping;

// style ui components for shipping component
const ShippingSection = tw.section`
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

const ShippingLeftSide = tw.div`
flex
flex-col
text-center
space-y-[10px]
my-[50px]
xl:w-[60%]
xl:text-left
xl:my-[0px]
`;
const ShippingRightSide = tw.div`
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