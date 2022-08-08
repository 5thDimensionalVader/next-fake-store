import Head from 'next/head';
import Image from 'next/image';
import tw from 'tailwind-styled-components/dist/tailwind';
import { useRouter } from 'next/dist/client/router';
import CarouselItem from '../src/components/CarouselItem';

export default function Home({ imgProducts, products }) {
  const router = useRouter();
  const carouselValue = 8;


  return (
    <>
      <Head>
        <title>Fake Shop</title>
      </Head>

      {/* Hero Section */}
      <HeroSection>
        <Tagline><span className='text-zinc-500 underline cursor-pointer hover:text-zinc-600 transition duration-100'>Shop</span> for the best products here!</Tagline>
      </HeroSection>

      {/* Images & Shop Now Btn Section */}
      <ImagesButtonSection>
        <ImagesContainer>
          {
            imgProducts?.map((product, index) => (
              <Image className='scale-95 hover:scale-100 transition duration-300'
                src={product?.image}
                width={330}
                height={index == 1 ? 250 : 210}
                objectFit="contain"
                key={product?.id}
              />
            ))
          }
        </ImagesContainer>
        <HomeUIBtn onClick={() => router.push('/shop')}>
          Shop Now
        </HomeUIBtn>
      </ImagesButtonSection>

      {/* Featured Products Section */}
      <FeaturedProductsSection>
        <FeaturedProductText className="font-serif text-stone-500">Featured Products</FeaturedProductText>
        <FeaturedProductCarouselContainer>
          <FeaturedProductCollection >
            {
              products?.map((product, index) => index < carouselValue && (
                <CarouselItem key={product?.id} productPrice={product?.price} productTitle={product?.title} productImg={product?.image} productId={product?.id} productCat={product?.category} />
              ))
            }
          </FeaturedProductCollection>
        </FeaturedProductCarouselContainer>
      </FeaturedProductsSection>

      {/* News Letter Section */}
      <NewsLetterSection>
        <NewsLetterLeftSide>
          <span className="text-2xl xl:text-4xl font-serif text-stone-500">Newsletter</span>
          <p className="text-base text-slate-400">Subscribe to our monthly newsletters to get updates on the best selling products at Fake Store!</p>
        </NewsLetterLeftSide>
        <NewsLetterRightSide>
          <input type="text" placeholder='Email Address' className="p-4 border border-slate-400 focus:outline-none focus:border-stone-400 rounded" />
          <HomeUIBtn>Subscribe</HomeUIBtn>
        </NewsLetterRightSide>
      </NewsLetterSection>

      {/* About Us Section */}
      <AboutUsSection id="about">
        <span className="text-2xl xl:text-4xl font-serif text-stone-500">About Fake Store</span>
        <p className="text-base text-slate-400 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur error maxime vitae delectus ab minus est modi tempora fugit.</p>
      </AboutUsSection>
    </>
  )
}

export async function getServerSideProps() {
  const imgValue = 3;
  const imgProducts = await fetch(`https://fakestoreapi.com/products?limit=${imgValue}`).then((res) => res.json());
  const products = await fetch("https://fakestoreapi.com/products").then((res) => res.json());

  return {
    props: {
      imgProducts,
      products
    }
  }
}

// styled ui components for Home
const HeroSection = tw.section`
  container
  flex
  flex-col
  items-center
  text-center
  space-y-4
  mx-auto
  my-14
`;

const Tagline = tw.h3`
  text-2xl
  text-stone-500 
  drop-shadow-md 
  font-serif
  px-4
  xl:text-4xl
`;

const ImagesButtonSection = tw.section`
  container
  flex
  flex-col
  items-center
  justify-center
  mx-auto
  space-y-10
  py-8
`;

const ImagesContainer = tw.div`
  container
  flex
  overflow-hidden
  gap-6
  xl:flex-row
  items-center
  justify-center
  mx-auto
`;


const HomeUIBtn = tw.button`
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

const FeaturedProductsSection = tw.section`
  flex
  flex-col
  items-center
  mx-auto
  space-y-2
  p-6
  mt-5
  border-y
  border-slate-400
`;

const FeaturedProductText = tw.h2`
  text-2xl
  xl:text-4xl
  px-4
`;

const FeaturedProductCarouselContainer = tw.div`
  relative 
  flex 
  flex-col 
  space-y-2
  px-14
  max-w-[350px]
  xl:max-w-[1200px]
  mx-auto
`;

const FeaturedProductCollection = tw.div`
  flex
  flex-row
  space-x-6 
  overflow-y-hidden
  overscroll-x-scroll
  scrollbar-hide
  p-2 
  -m-2
`;

const NewsLetterSection = tw.section`
  xl:flex
  xl:items-center
  mx-auto
  xl:px-32
  py-14
  xl:flex-row
  xl:space-x-48
  border-b
  border-slate-400
`;

const NewsLetterLeftSide = tw.div`
  flex
  flex-col
  w-full
  text-center
  xl:text-start
  xl:w-1/2
  space-y-2
  xl:px-0
  px-5
`;

const NewsLetterRightSide = tw.div`
  flex
  justify-center
  px-5
  gap-2
  py-4
  xl:flex-row
  xl:w-1/2
  xl:space-x-6
`;

const AboutUsSection = tw.div`
  flex
  flex-col
  items-center
  text-center
  mx-auto
  text-base
  space-y-3
  xl:px-32
  py-12
  border-b
  border-slate-400
`;