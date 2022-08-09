import React from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import Image from 'next/image';

const CategoryTile = ({ catName }) => {
  return (
    <>
      <TileContainer>
        <Image
          src={"https://via.placeholder.com/150.png"}
          width={150}
          height={150}
          objectFit="contain"
        />
        <span className="text-sm py-[5px]">{catName}</span>
      </TileContainer>
    </>
  )
}

export default CategoryTile;

// styled ui components for category tile
const TileContainer = tw.div`
  flex
  flex-col
  items-center
  mx-auto
  space-y-[10px]
  max-w-[650px]
  border
  border-slate-300
  rounded-md
  shadow-md
  text-stone-500
  cursor-pointer
  hover:text-blue-500 transition duration-200
`;