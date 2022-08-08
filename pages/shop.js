import React from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import Head from 'next/head';
import { SearchIcon } from "@heroicons/react/solid";

const Shop = () => {

  return (
    <div>
      <Head>
        <title>Shop - Fake Store</title>
      </Head>
      {/* Hero Section */}
      <HeroSection>
        <Tagline><span className='text-zinc-500 underline cursor-pointer hover:text-zinc-600 transition duration-100'>Shop</span> for the best products here!</Tagline>
        <div className="flex items-center space-x-3">
          <input type="search" placeholder="Search..." className="border border-slate-400 py-[10px] px-[10px] rounded-sm focus:outline-none focus:border-stone-400 xl:w-[350px]" />
          <SearchBtn>Search</SearchBtn>
        </div>
      </HeroSection>
    </div>
  )
}

export default Shop;

// styled ui components for shop component
const HeroSection = tw.section`
  container
  flex
  flex-col
  items-center
  text-center
  space-y-14
  mx-auto
  my-14
`;

const Tagline = tw.h2`
  text-2xl
text-stone-500 
  drop-shadow-md 
  font-serif
  px-4
  xl:text-4xl
`;

const SearchBtn = tw.button`
xl:bg-blue-400
  underline
  xl:no-underline
text-slate-500
xl:text-blue-50
  rounded-full
  space-x-2
  px-6
  py-3
  xl:px-12
  xl:py-4
  tracking-wide
xl:hover:bg-blue-500 transition duration-200
`;