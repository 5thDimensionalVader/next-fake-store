import React from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import { navLink } from '../utils/data';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <FooterContainer>
        <LinkContainer>
        {
            navLink.map((link, index) => (
              <Link key={index} href={link?.path}>
                {link?.name}
              </Link>
            ))
          }
        </LinkContainer>
        <CompanyContainer>
          <span>&copy;</span>
          <BrandText>fake shop</BrandText>
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
  space-y-4
  h-[72px]
  mt-2
`;

const LinkContainer = tw.div`
  xl:flex items-center space-x-6
  tracking-wide
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
`;