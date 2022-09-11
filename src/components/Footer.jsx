import React from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import { navLink } from '../utils/data';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <LinkContainer>
          {
            navLink.map((link, index) => (
              <Link key={index} href={link?.path}>
                <span className='hover:text-black cursor-pointer transition duration-100'>{link?.name}</span>
              </Link>
            ))
          }
        </LinkContainer>
        <CompanyContainer>
          <span className="text-blue-500">&copy;</span>
          <BrandText>fake store</BrandText>
        </CompanyContainer>
      </FooterContainer>
    </>
  )
}

export default Footer;


// styled ui components for Footer
const FooterContainer = tw.footer`
  mx-auto
  container
  flex
  flex-col
  items-center
  h-[72px]
  mt-2
`;

const LinkContainer = tw.div`
  xl:flex items-center justify-center
  tracking-wide
  text-stone-600
  mt-2
  space-x-6
`;

const CompanyContainer = tw.div`
  flex
  items-center
  space-x-4
`;

const BrandText = tw.h1`
  font-bold
  text-lg
  uppercase
  tracking-wide
  text-blue-500
  text-opacity-70
`;