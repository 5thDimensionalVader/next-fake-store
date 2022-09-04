import tw from 'tailwind-styled-components/dist/tailwind';
import Image from 'next/image';
import { TrashIcon } from "@heroicons/react/solid";
import { useCartContext } from '../context/CartProvider';

const CartProductTile = ({ productImg, productTitle, productPrice, productDes, productId }) => {
  const { cart, setCart } = useCartContext();

  const handleDelete = () => {
    return setCart(cart?.filter((product) => product?.id != productId));
  }

  return (
    <TileContainer>
      <TileContainerFirst>
        <Image
          src={productImg}
          width={100}
          height={100}
          objectFit="contain"
          alt='product-img'
        />
      </TileContainerFirst>
      <TileContainerCenter>
        <span className="text-lg text-stone-500 max-w-sm">{productTitle}</span>
        <span className="text-base text-stone-400 max-w-sm truncate">{productDes}</span>
        <span className="text-base text-stone-500 max-w-sm">${productPrice}</span>
      </TileContainerCenter>
      <TileContainerLast>
        <TrashIcon className="h-5 w-5 text-stone-500 cursor-pointer" onClick={handleDelete} />
      </TileContainerLast>
    </TileContainer>
  )
}

export default CartProductTile;

const TileContainer = tw.div`
  container
  flex
  flex-row
  gap-[10px]
  p-[10px]
  mx-auto
  border
  border-slate-300
  rounded-md
  shadow-md
`
const TileContainerFirst = tw.div`
  flex
  items-center
  w-[40%]
  xl:w-[20%]
  p-[20px]
`;
const TileContainerCenter = tw.div`
  flex
  flex-col
  text-start
  w-[40%]
  xl:w-[70%]
  p-[20px]
  space-y-4
`;

const TileContainerLast = tw.div`
  flex
  items-center
  w-[20%]
  xl:w-[10%]
  p-[20px]
`;