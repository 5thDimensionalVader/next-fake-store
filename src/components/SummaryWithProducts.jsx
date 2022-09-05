import Image from "next/image";

const SummaryWithProducts = ({ cart, shippingOption, netTotal, subTotal, taxes }) => {
  const netShippingValue = shippingOption === "20" ? 20 : 0;

  return (
    <div className={cart?.length !== 0 ? "py-[5px] border-y border-slate-400" : "py-[40px] border-y border-slate-400"}>
      <div>
        <div className="py-[20px] flex flex-col items-center space-y-[10px]">
          {
            cart?.map((product) => (
              <div className="container flex flex-row items-center mx-auto p-[15px] gap-[20px] text-stone-500 border border-slate-400 rounded-md shadow-md max-w-[350px]" key={product?.id}>
                <Image
                  src={product?.image}
                  width={100}
                  height={100}
                  objectFit="contain"
                  alt="product-img"
                />
                <div className="flex flex-col space-y-[10px] text-start text-sm font-medium">
                  <span>{product?.title}</span>
                  <span>${product?.price}</span>
                </div>
              </div>
            ))
          }
        </div>

        <div className="flex flex-row space-x-[10px] py-[10px] text-base text-stone-500 border-t border-slate-400">
          <div className="flex flex-col space-y-[20px] w-[50%] uppercase">
            <span>subtotal</span>
            <span>shipping</span>
            <span>taxes</span>
          </div>
          <div className="flex flex-col space-y-[20px] w-[50%]">
            <span>${subTotal}</span>
            <span>{shippingOption === "20" ? `$${shippingOption}` : shippingOption}</span>
            <span>${taxes}</span>
          </div>
        </div>
        <div className="flex flex-row space-x-[10px] py-[10px] text-2xl text-stone-500 border-t border-slate-400">
          <div className="flex flex-col space-y-[20px] w-[50%] uppercase font-semibold">
            <span>total</span>
          </div>
          <div className="flex flex-col space-y-[20px] w-[50%] uppercase font-semibold">
            <span>${netTotal + netShippingValue}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummaryWithProducts;