import React from 'react';
import { useRouter } from 'next/router';
import tw from 'tailwind-styled-components/dist/tailwind';
import Head from 'next/head';
import Image from 'next/image';

const Product = ({ product }) => {
  return (
    <div className="border-y border-slate-400">
      <Head>
        <title>{product?.title}- Fake Shop</title>
      </Head>

      {/* ProductInformationSection */}
      <ProductInformationSection>
        <ProductInformationLeft>
          {
            <Image className='scale-95 hover:scale-100 transition duration-300'
              src={product?.image}
              width={330}
              height={350}
              objectFit="contain"
            />
          }
        </ProductInformationLeft>
        <ProductInformationRight>
          <span className="text-2xl xl:text-3xl">{product?.title}</span>
          <div className="flex items-center mx-auto xl:mx-0 gap-[20px]">
            <span>{product?.rating?.rate} star(s)</span>
            <span>{product?.rating?.count} reviews</span>
          </div>
          <div className="flex items-center mx-auto xl:mx-0 gap-[20px] xl:gap-[150px] border-y border-slate-400 px-3 py-6">
            <span className="tracking-wide text-3xl">$ {product?.price}</span>
            <span>
              <select disabled className="border border-slate-400 text-xl text-slate-300 rounded-sm px-2 py-4 xl:px-14">
                <option>Select Model</option>
              </select>
            </span>
          </div>
          <div className="text-base text-slate-400 text-center xl:text-start px-3 py-6">
            <p>{product?.description}</p>
          </div>
          <div className="border-t border-slate-400 px-3 py-6">
            <Add2CartBtn>Add to Cart</Add2CartBtn>
          </div>
        </ProductInformationRight>
      </ProductInformationSection>

      {/* Similar Product Section */}

    </div>
  )
}

export default Product;

export const getServerSideProps = async (context) => {

  const { id } = context?.query;
  const request = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());
  return {
    props: {
      product: request,
    }
  }
}

// styled ui components for the products
const ProductInformationSection = tw.section`
  flex
  flex-col
  xl:flex-row
  items-center
  mx-auto
`;
const ProductInformationLeft = tw.div`
  flex
  flex-col
  items-center
  xl:w-[40%]
  p-6
`;
const ProductInformationRight = tw.div`
  flex
  flex-col
  text-center
  text-slate-700
  xl:text-start
  xl:w-[60%]
  py-6
  px-3
  space-y-6
  xl:px-12
  xl:border-l border-slate-300
`;
const Add2CartBtn = tw.button`
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
const SimilarProductSection = tw.section`

`;