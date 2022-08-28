import React from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { StarIcon } from "@heroicons/react/solid";
import Rating from 'react-rating';

const ShopProductTile = ({ productImg, productTitle, productRating, productPrice, productId, productCat }) => {
  const router = useRouter();
  return (
    <TileContainer onClick={() => router.push({
      pathname: `/product/${productId}`,
      query: { productCat: productCat.toString() },
    })}>
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
        <span>
          <Rating initialRating={productRating} emptySymbol={<StarIcon className="h-4 text-slate-500" />} fullSymbol={<StarIcon className="h-4 text-yellow-400" />} readonly />
        </span>
        <span>${productPrice}</span>
      </TileContainerRight>
    </TileContainer>
  )
}

export default ShopProductTile;

const TileContainer = tw.div`
  container
  flex
  flex-row
  items-center
  mx-auto
  space-x-[10px]
  p-2
  border
  border-slate-300
  rounded-md
  shadow-md
  cursor-pointer
  text-slate-700
  hover:text-blue-400
`
const TileContainerLeft = tw.div`
  flex
  items-center
  w-[30%]
  p-6
`;
const TileContainerRight = tw.div`
  flex
  flex-col
  text-start
  w-[70%]
  px-3
  space-y-4
  border-l
  border-slate-300
`;