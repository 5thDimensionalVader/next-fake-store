import tw from 'tailwind-styled-components/dist/tailwind';
import Image from 'next/image';

const CartProductTile = ({ productImg, productTitle, productPrice, productDes }) => {
  return (
    <TileContainer>
      <TileContainerLeft>
        <Image
          src={productImg}
          width={100}
          height={100}
          objectFit="contain"
        />
      </TileContainerLeft>
      <TileContainerRight>
        <span className="text-lg text-stone-500 max-w-sm">{productTitle}</span>
        <span className="text-base text-stone-400 max-w-sm truncate">{productDes}</span>
        <span className="text-base text-stone-500 max-w-sm">${productPrice}</span>
      </TileContainerRight>
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
  border
  border-slate-300
  rounded-md
  shadow-md
`
const TileContainerLeft = tw.div`
  flex
  items-center
  w-[20%]
  p-[20px]
`;
const TileContainerRight = tw.div`
  flex
  flex-col
  text-start
  w-[80%]
  p-[20px]
  space-y-4
`;