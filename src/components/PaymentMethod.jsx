import tw from "tailwind-styled-components/dist/tailwind";
import { CreditCardIcon, CalendarIcon, InformationCircleIcon, UserIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useCartContext } from "../context/CartProvider";

const PaymentMethod = ({ handleInput, handleFocus }) => {
  const { paymentMethod, setPaymentMethod } = useCartContext();
  return (
    <>
      <Container>
        {/* Credit Card */}
        <div className="container flex flex-col gap-[15px] py-[20px] px-[10px] border border-slate-400 rounded-md shadow-md">
          <div className="flex items-center gap-[5px]">
            <input id="creditCard" type="radio" name="paymentOption" value="creditCard" className="text-blue-600 focus:ring-0 h-5" checked={paymentMethod === 'creditCard'} onChange={(e) => setPaymentMethod(e.target.value)} />
            <div className="ml-2">
              <label htmlFor="creditCard" className="text-lg font-medium text-stone-500">Credit Card</label>
              <p className="text-sm font-normal text-stone-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quasi in voluptas expedita rem.</p>
            </div>
          </div>
          {/* Credit Card Form */}
          <form className="flex flex-col items-center gap-[10px]">
            <div className="container flex flex-col gap-[15px] xl:flex-row">
              <div className="relative mb-6 xl:w-[60%]">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <CreditCardIcon className="w-4 h-4 text-slate-400" />
                </div>
                <input type="text" name="number" className={paymentMethod !== "creditCard" ? "bg-slate-50 border border-slate-400 text-sm text-slate-500 rounded-sm block w-full pl-10 p-2.5 disabled:bg-slate-200" : "bg-slate-50 border border-slate-400 text-sm text-slate-500 rounded-sm block w-full pl-10 p-2.5"} placeholder="0000 0000 0000 0000" disabled={paymentMethod !== "creditCard"} />
              </div>

              <div className="relative mb-6 xl:w-[20%]">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <CalendarIcon className="w-4 h-4 text-slate-400" />
                </div>
                <input type="text" name="expiry" className={paymentMethod !== "creditCard" ? "bg-slate-50 border border-slate-400 text-sm text-slate-500 rounded-sm block w-full pl-10 p-2.5 disabled:bg-slate-200" : "bg-slate-50 border border-slate-400 text-sm text-slate-500 rounded-sm block w-full pl-10 p-2.5"} placeholder="MM/YY" disabled={paymentMethod !== "creditCard"} />
              </div>

              <div className="relative mb-6 xl:w-[20%]">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <InformationCircleIcon className="w-4 h-4 text-slate-400" />
                </div>
                <input type="text" name="cvc" className={paymentMethod !== "creditCard" ? "bg-slate-50 border border-slate-400 text-sm text-slate-500 rounded-sm block w-full pl-10 p-2.5 disabled:bg-slate-200" : "bg-slate-50 border border-slate-400 text-sm text-slate-500 rounded-sm block w-full pl-10 p-2.5"} placeholder="CVC" disabled={paymentMethod !== "creditCard"} />
              </div>
            </div>
            <div className="relative mb-6 w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <UserIcon className="w-4 h-4 text-slate-400" />
              </div>
              <input type="text" name="name" className={paymentMethod !== "creditCard" ? "bg-slate-50 border border-slate-400 text-sm text-slate-500 rounded-sm block w-full pl-10 p-2.5 disabled:bg-slate-200" : "bg-slate-50 border border-slate-400 text-sm text-slate-500 rounded-sm block w-full pl-10 p-2.5"} placeholder="Card Holder Name" disabled={paymentMethod !== "creditCard"} />
            </div>
          </form>
        </div>
        {/* PayPal */}
        <div className="container flex items-center mx-auto py-[20px] px-[10px] border border-slate-400 rounded-md shadow-md">
          <div className="flex items-center h-5">
            <input id="payPal" type="radio" value="payPal" name="paymentOption" className="text-blue-600 focus:ring-0" checked={paymentMethod === 'payPal'} onChange={(e) => setPaymentMethod(e.target.value)} />
          </div>
          <div className="ml-2">
            <label htmlFor="creditCard" className="text-lg font-medium text-stone-500">PayPal</label>
            <p className="text-sm font-normal text-stone-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nesciunt dolores quidem ea iusto?</p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default PaymentMethod;

// styled ui components for PaymentMethod component
const Container = tw.section`
flex
flex-col
place-items-center
mx-auto
space-y-[40px]
py-[15px]
xl:items-start
`;
