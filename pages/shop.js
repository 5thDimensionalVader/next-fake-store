import React from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import Head from 'next/head';
import CategoryTile from '../src/components/CategoryTile';
import Image from 'next/image';
import ShopProductTile from '../src/components/ShopProductTile';
import { useRouter } from 'next/router';

const Shop = ({ categories, browseProducts }) => {
  const router = useRouter();

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
          <ShopUiBtn>Search</ShopUiBtn>
        </div>
      </HeroSection>
      {/* Featured Categories Section */}
      <FeaturedCategories>
        <span className="text-2xl xl:text-4xl font-serif text-stone-500">Featured Categories</span>
        <p className="text-sm text-stone-400">Take a look at the category of products we have to offer!</p>
        <FeaturedCategoriesItems>
          {
            categories?.map((category, index) => (
              <CategoryTile key={index} catName={category} />
            ))
          }
        </FeaturedCategoriesItems>
      </FeaturedCategories>

      {/* News Letter Section */}
      <NewsLetterSection>
        <NewsLetterLeftSide>
          <Image
            src={"https://via.placeholder.com/350.png"}
            width={350}
            height={250}
            objectFit="contain"
          />
        </NewsLetterLeftSide>
        <NewsLetterRightSide>
          <span className="text-2xl xl:text-4xl font-serif text-stone-500">Newsletter</span>
          <div className="flex items-center gap-[20px]">
            <input type="search" placeholder="Email" className="border border-slate-400 py-[10px] px-[10px] rounded-sm focus:outline-none focus:border-stone-400 xl:w-[450px]" />
            <ShopUiBtn>Subscribe</ShopUiBtn>
          </div>
        </NewsLetterRightSide>
      </NewsLetterSection>

      {/* All Product Section */}
      <AllProductSection>
        <AllProductLeftSide>
          <span className="text-2xl xl:text-4xl font-serif text-stone-500">Browse All Products</span>
          <span className="text-base xl:text-sm font-serif text-stone-400 xl:text-center max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatum quas quisquam vel iste nobis!</span>
          <ShopUiBtn onClick={() => router.push("/browse")}>Browse All</ShopUiBtn>
        </AllProductLeftSide>
        <AllProductRightSide>
          {
            browseProducts?.filter((product) => product?.rating?.rate > 3.8)?.map((product, index) => index < 8 && (
              <ShopProductTile key={product?.id} productId={product?.id} productImg={product?.image} productRating={product?.rating?.rate} productTitle={product?.title} productPrice={product?.price} productCat={product?.category} />
            ))
          }
        </AllProductRightSide>
      </AllProductSection>
    </div>
  )
}

export default Shop;

export const getServerSideProps = async () => {
  const categoryRes = await fetch("https://fakestoreapi.com/products/categories").then((res) => res.json());
  const browseProductRes = await fetch("https://fakestoreapi.com/products").then((res) => res.json());


  return {
    props: {
      categories: categoryRes,
      browseProducts: browseProductRes,
    }
  }
}

// styled ui components for shop component
const HeroSection = tw.section`
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

const ShopUiBtn = tw.button`
bg-blue-400
text-blue-50
  rounded-md
  space-x-2
  px-6
  py-3
  px-12
  py-4
  tracking-wide
hover:bg-blue-500 transition duration-200
`;

const FeaturedCategories = tw.section`
  flex
  flex-col
  items-center
  justify-center
  py-[50px]
  mb-[10px]
  space-y-[20px]
  border-y
  border-slate-400
`;

const FeaturedCategoriesItems = tw.div`
  grid
  grid-cols-2
  xl:grid-cols-4
  gap-[10px]
  xl:flex-row
  xl:space-x-2
  items-center
  justify-center
  mx-auto
`;

const NewsLetterSection = tw.section`
  flex
  flex-col
  items-center
  xl:flex-row
  border-b
border-slate-400
  py-[40px]
`;

const NewsLetterLeftSide = tw.div`
  flex
  items-center
  justify-center
  mx-auto
  xl:w-[40%]
`;

const NewsLetterRightSide = tw.div`
  flex
  flex-col
  items-center
  xl:items-start
  mx-auto
  px-[20px]
  space-y-[20px]
  py-[20px]
  xl:w-[60%]
`;

const AllProductSection = tw.section`
  flex
  flex-col
  items-center
  space-y-[20px]
  xl:flex-row
  border-b
border-slate-400
  py-[40px]
`;

const AllProductLeftSide = tw.div`
  flex
  flex-col
  items-center
  mx-auto
  xl:w-[30%]
  space-y-[20px]
`;

const AllProductRightSide = tw.div`
  flex
  flex-col
  px-[10px]
  xl:px-[20px]
  xl:grid
  xl:grid-cols-2
  gap-[20px]
  xl:w-[70%]
`;