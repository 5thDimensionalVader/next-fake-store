import Link from 'next/link';
import React from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import { navLink } from '../utils/data';
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useRouter } from 'next/router';

const Header = () => {
  // router
  const router = useRouter();

  return (
    <>
      <Wrapper>
        <NavBar>
          <BrandText className="text-slate-500 hover:text-slate-700 cursor-pointer">
            fake shop
          </BrandText>

          <LinkContainer>
            {
              navLink.map((link, index) => (
                <Link key={index} href={link?.path} className="navLink">
                  <span className='hover:text-black hover:border-b-2 hover:border-slate-600 transition duration-100 cursor-pointer'>{link?.name}</span>
                </Link>
              ))
            }
            <CartBtn>
              <ShoppingCartIcon className="h-4 self-center"/>
              <span>Your Cart</span>
              {/* <span className="badge">99+</span> */}
            </CartBtn>
          </LinkContainer>
          <div className="bg w-1/2 pt-5 pr-5 text-zinc-500 text-right lg:hidden">Click</div>
        </NavBar>
      </Wrapper>
    </>
  )
}

export default Header;

// styled ui components for Header
const Wrapper = tw.div`
  text-slate-600
  bg-slate-200
  flex
  mx-auto
`;
const NavBar = tw.nav`
  sticky
  flex
  top-0
  z-[1000]
  h-[60px]
  bg-slate-200
  w-full
  xl:w-5/6
  mx-auto
  pt-0

`;

const BrandText = tw.div`
  font-bold
  text-regular
  md:text-lg
  uppercase
  tracking-wide
  text-blue-500
  w-1/2
  pt-5
  md:pt-4
  pl-4
`;

// const LinkContainer = tw.div`
//   hidden
//   xl:flex items-center space-x-6
//   tracking-wide
// `;

const LinkContainer = tw.div`
  invisible
  lg:visible
  w-0
  lg:w-1/2 
  flex items-center space-x-6
  tracking-wide
  justify-end
  
`;

//  bg-blue-500   hover:bg-blue-600 transition duration-200


const CartBtn = tw.button`
  text-blue-400
  hover:bg-slate-200 transition duration-100
  hover:text-blue-500 transition duration-100
  rounded-sm
  inline-flex
  items-baseline
  space-x-1
  px-4
  py-2
  rounded
  tracking-wide
`;