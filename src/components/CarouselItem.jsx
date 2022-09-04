import Image from 'next/image';
import React from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import { useRouter } from 'next/router';

const CarouselItem = ({ productTitle, productImg, productPrice, productId, productCat }) => {
  const router = useRouter();
  return (
    <>
      <CarouselItemContainer onClick={() => router.push({
        pathname: `/product/${productId}`,
        query: { productCat: productCat.toString() },
      })}>
        <Image
          src={productImg}
          width={150}
          height={150}
          objectFit="contain"
          alt='carousel-product-img'
        />
        <span>{productTitle}</span>
        <span>${productPrice}</span>
      </CarouselItemContainer>
    </>
  )
}

export default CarouselItem;

const CarouselItemContainer = tw.div`
  flex
  flex-col
  items-center
  justify-center
  text-center
  space-y-2
  min-w-[250px] 
  min-h-[170px] 
  xl:min-w-[330px] 
  xl:min-h-[210px]
  overflow-hidden
  mt-6
  cursor-pointer 
  hover:text-blue-500 
  transition 
  duration-200
  border
  border-slate-300
  rounded-md
  shadow-md
`;