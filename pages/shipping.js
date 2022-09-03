import tw from "tailwind-styled-components/dist/tailwind";
import Head from "next/head";
import { useCartContext } from "../src/context/CartProvider";
import Select from 'react-select';
import countryList from "react-select-country-list";
import { useState, useMemo } from "react";
import { useRouter } from "next/router";
import SummaryWithProducts from "../src/components/SummaryWithProducts";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const Shipping = () => {
  const router = useRouter();
  const { cart, subTotal, taxes, netTotal, setCart, setFormUser } = useCartContext();
  const [selectCountry, setSelectCountry] = useState('');
  const options = useMemo(() => countryList().getData(), []);

  const [shippingOption, setShippingOption] = useState("20");

  const changeHandler = country => {
    setSelectCountry(country);
  };

  const summaryProps = {
    cart: cart,
    shippingOption: shippingOption,
    netTotal: netTotal,
    subTotal: subTotal,
    taxes: taxes
  }

  // notificaiton with toastify
  const notification = message => {
    toast.warn(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      toastId: "nextPageToast",
    })
  }

  // useFormik
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      addressOne: '',
      addressTwo: '',
      city: '',
      postalCode: '',
      phoneNumber: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('Please, enter first name'),
      lastName: Yup.string()
        .required('Please, enter last name'),
      addressOne: Yup.string()
        .required('Please, enter the first address'),
      addressTwo: Yup.string()
        .required('Please, enter the second address'),
      postalCode: Yup.string()
        .required('Please, enter the postal code'),
      phoneNumber: Yup.string()
        .required('Please, enter the phone number'),
    }),
    onSubmit: values => {
      setFormUser({
        ...values,
        shippingOption,
        selectCountry
      });
      router.push('/payment');
    }
  });

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
            {/* Shipping Form */}
            <form className="container flex flex-col items-center mx-auto gap-[10px] border-b border-slate-400 py-[15px] xl:items-start" autoComplete="false" onSubmit={formik.handleSubmit}>
              <div className="flex flex-col items-center gap-[20px] xl:flex-row">
                <input type="text" id="firstName" name="firstName" placeholder="First Name" className="text-black text-start py-[10px] px-[10px] border border-slate-400 rounded-sm focus:outline-none focus:border-stone-400 w-[330px] xl:w-[430px]" value={formik.values.firstName}
                  onChange={formik.handleChange} />
                {formik.touched.firstName && formik.errors.firstName ? notification(formik.errors.firstName) : null}
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" className="text-black text-start py-[10px] px-[10px] border border-slate-400 rounded-sm focus:outline-none focus:border-stone-400 w-[330px] xl:w-[430px]" value={formik.values.lastName}
                  onChange={formik.handleChange} />
                {formik.touched.lastName && formik.errors.lastName ? notification(formik.errors.lastName) : null}
              </div>

              <input type="text" id="addressOne" name="addressOne" placeholder="Address 1" className="text-black text-start py-[10px] px-[10px] border border-slate-400 rounded-sm focus:outline-none focus:border-stone-400 w-[330px] xl:w-[100%]" value={formik.values.addressOne}
                onChange={formik.handleChange} />
              {formik.touched.addressOne && formik.errors.addressOne ? notification(formik.errors.addressOne) : null}
              <input type="text" id="addressTwo" name="addressTwo" placeholder="Address 2" className="text-black text-start py-[10px] px-[10px] border border-slate-400 rounded-sm focus:outline-none focus:border-stone-400 w-[330px] xl:w-[100%]" value={formik.values.addressTwo}
                onChange={formik.handleChange} />
              {formik.touched.addressTwo && formik.errors.addressTwo ? notification(formik.errors.addressTwo) : null}

              <div className="flex flex-col items-center gap-[20px] xl:flex-row">
                <Select options={options} value={selectCountry} onChange={changeHandler} className=" text-start w-[330px] xl:w-[430px]" />
                <input type="text" id="city" name="city" placeholder="City" className="text-black text-start py-[10px] px-[10px] border border-slate-400 rounded-sm focus:outline-none focus:border-stone-400 w-[330px] xl:w-[430px]" value={formik.values.city}
                  onChange={formik.handleChange} />
              </div>

              <div className="flex flex-col items-center gap-[20px] xl:flex-row">
                <input type="text" id="postalCode" name="postalCode" placeholder="Zip/Postal Code" className="text-black text-start py-[10px] px-[10px] border border-slate-400 rounded-sm focus:outline-none focus:border-stone-400 w-[330px] xl:w-[430px]" value={formik.values.postalCode}
                  onChange={formik.handleChange} />
                {formik.touched.postalCode && formik.errors.postalCode ? notification(formik.errors.postalCode) : null}
                <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" className="text-black text-start py-[10px] px-[10px] border border-slate-400 rounded-sm focus:outline-none focus:border-stone-400 w-[330px] xl:w-[430px]" value={formik.values.phoneNumber}
                  onChange={formik.handleChange} />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? notification(formik.errors.phoneNumber) : null}
              </div>
              {/* Radio Select */}
              <div className="flex flex-col items-center gap-[20px] py-[15px] px-[15px] xl:px-0 xl:flex-row">
                <div className="flex items-center pl-4 rounded border border-slate-400 px-[20px] py-[15px] w-[320px]">
                  <input type="radio" value="free" name="shippingOption" className="w-4 h-4 text-blue-600 focus:ring-0" onChange={(e) => setShippingOption(e.target.value?.toUpperCase())} checked={shippingOption === "FREE"} />
                  <label className="py-4 ml-2 w-full text-lg font-medium text-stone-500">Free Shipping</label>
                </div>
                <div className="flex items-center pl-4 rounded border border-slate-400 px-[20px] py-[15px] w-[320px]">
                  <input type="radio" name="shippingOption" value="20" className="w-4 h-4 text-blue-600 focus:ring-0" onChange={(e) => setShippingOption(e.target.value)} checked={shippingOption === "20"} />
                  <label className="py-4 ml-2 w-full text-lg font-medium text-stone-500">Next Day Delivery - $20</label>
                </div>
              </div>

              <div className="flex items-center justify-center xl:justify-start gap-[10px] py-[20px]">
                <NextCartBtn type="submit">Next</NextCartBtn>
                <CancelCartBtn onClick={() => {
                  setCart([]);
                  router.push("/shop");
                }}>Cancel</CancelCartBtn>
              </div>
            </form>
          </div>
        </ShippingLeftSide >

        {/* Summary */}
        <ShippingRightSide >
          <span className="text-2xl xl:text-4xl font-serif text-stone-500">Summary</span>
          <SummaryWithProducts {...summaryProps} />
        </ShippingRightSide>
      </ShippingSection >
    </div >
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