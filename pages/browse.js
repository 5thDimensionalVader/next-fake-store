import React, { useState } from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import ShopProductTile from '../src/components/ShopProductTile';
import Head from 'next/head';


const Browse = ({ allProduct }) => {
  const [showMore, setShowMore] = useState(8);

  const handleShowMore = () => {
    setShowMore(showMore + 8);
  };

  return (
    <>
      <Head>
        <title>Browse All - Fake Store</title>
      </Head>
      <BrowseAllSection>
        <span className="text-2xl xl:text-4xl font-serif text-stone-500">Browse All Product</span>
        <BrowseAllItems>
          {
            allProduct?.map((product, index) => index < showMore && (
              <ShopProductTile key={product?.id} productId={product?.id} productImg={product?.image} productRating={product?.rating?.rate} productTitle={product?.title} productPrice={product?.price} productCat={product?.category} />
            ))
          }
        </BrowseAllItems>
        {showMore < allProduct?.length && (
          <BrowseUIBtn onClick={handleShowMore}>
            Show More
          </BrowseUIBtn>
        )}
      </BrowseAllSection>
    </>
  )
}

export default Browse;

export const getServerSideProps = async () => {
  const allProductsRes = await fetch("https://fakestoreapi.com/products").then((res) => res.json());

  return {
    props: {
      allProduct: allProductsRes,
    }
  }
}

// styled ui components for browse all component
const BrowseAllSection = tw.section`
  container
  flex
  flex-col
  items-center
  mx-auto
  space-y-[20px]
  py-[40px]
`;

const BrowseAllItems = tw.div`
  container
  flex
  flex-col
  xl:grid
  xl:grid-cols-4
  gap-[20px]
  mx-[10px]
  xl:mx-auto
`;

const BrowseUIBtn = tw.button`
bg-blue-400
text-blue-50
  rounded-md
  space-x-2
  px-6
  py-4
  tracking-wide
hover:bg-blue-500 transition duration-200
`;