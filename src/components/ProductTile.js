import React from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ProductTile = ({ productImg, productTitle, productRating, productPrice, productId }) => {
  const router = useRouter();
  return (
    <TileContainer>
      <TileContainerLeft>
        <Image
          src={productImg}
          width={150}
          height={150}
          objectFit="contain"
        />
      </TileContainerLeft>
      <TileContainerRight>
        <span>{productTitle}</span>
        <span>{productRating} star(s)</span>
        <span>${productPrice}</span>
      </TileContainerRight>
    </TileContainer>
  )
}

export default ProductTile;

const TileContainer = tw.div`
  container
  flex
  flex-row
  items-center
  mx-auto
  space-x-[10px]
  max-w-sm
  p-2
  border
  border-slate-300
  rounded-md
  shadow-md
  cursor-pointer
  text-slate-700
`
const TileContainerLeft = tw.div`
  flex
  items-center
  w-[40%]
  p-6
`;
const TileContainerRight = tw.div`
  flex
  flex-col
  text-start
  w-[60%]
  px-3
  space-y-4
  border-l
  border-slate-300
`;