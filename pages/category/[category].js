import React from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import Head from 'next/head';
import ShopProductTile from '../../src/components/ShopProductTile';

const Category = ({ productCategory, catName }) => {

  return (
    <>
      <Head>
        <title>{catName?.toUpperCase()} - Fake Store</title>
      </Head>
      <div className="min-h-[82vh] w-5/6 mx-auto"> 
        <CategorySection>
          <span className="text-2xl xl:text-4xl font-serif text-stone-500">{catName?.toUpperCase()}</span>
          <CategoryItem>
            {
              productCategory?.map((product) => (
                <ShopProductTile key={product?.id} productId={product?.id} productImg={product?.image} productRating={product?.rating?.rate} productTitle={product?.title} productPrice={product?.price} productCat={product?.category} />
              ))
            }
          </CategoryItem>
        </CategorySection>
      </div>
    </>
  )
}

export default Category;

export const getServerSideProps = async (context) => {
  const { category } = context?.query;
  const productCatRes = await fetch(`https://fakestoreapi.com/products/category/${category}`).then((res) => res.json());

  return {
    props: {
      productCategory: productCatRes,
      catName: category,
    }
  }
}

// styled ui components for category
const CategorySection = tw.section`
  container
  flex
  flex-col
  items-center
  justify-center
  mx-auto
  space-y-[20px]
  py-[40px]
`;

const CategoryItem = tw.div`
  flex
  flex-col
  xl:grid
  xl:grid-cols-4
  gap-[20px]
`;