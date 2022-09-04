import { useRouter } from 'next/router';
import tw from 'tailwind-styled-components/dist/tailwind';
import Head from 'next/head';
import Image from 'next/image';
import { useCartContext } from '../../src/context/CartProvider';
import SimilarProductTile from '../../src/components/SimilarProductTile';
import Rating from 'react-rating';
import { StarIcon } from "@heroicons/react/solid";
import useSWR from 'swr';
import { toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner';


const Product = ({ product }) => {

  const similarValue = 3;
  const productId = product?.id;
  const router = useRouter();
  const { setCart, cart } = useCartContext();

  // fetcher for swr
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  // useSWR
  const { data, error } = useSWR(`https://fakestoreapi.com/products/category/${router.query?.productCat}`, fetcher);

  // error notification
  const errorNotify = () => {
    toast.error("Something went wrong", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      toastId: "nextPageToast",
    })
  }

  if (error) return errorNotify;

  const handleAdd = () => {
    setCart([...cart, product]);
    router.push('/browse');
  }


  return (
    <div className="border-y border-slate-400">
      <Head>
        <title>{product?.title} - Fake Shop</title>
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
              alt="product-image"
            />
          }
        </ProductInformationLeft>
        <ProductInformationRight>
          <span className="text-2xl xl:text-3xl">{product?.title}</span>
          <div className="flex items-center mx-auto xl:mx-0 gap-[20px]">
            <span>
              <Rating initialRating={product?.rating?.rate} emptySymbol={<StarIcon className="h-4 text-slate-500" />} fullSymbol={<StarIcon className="h-4 text-yellow-400" />} readonly />
            </span>
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
            <Add2CartBtn onClick={handleAdd}>Add to Cart</Add2CartBtn>
          </div>
        </ProductInformationRight>
      </ProductInformationSection>

      {/* Similar Product Section */}
      <SimilarProductSection>
        <span className="text-2xl xl:text-4xl font-serif text-stone-500 tracking-wide">Similar Products</span>
        <div className="flex flex-col xl:flex-row items-center mx-auto gap-[20px]">
          {
            !data ? <ThreeDots
              height="60"
              width="60"
              radius="9"
              color="#60A5FA"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true} /> : (
              <>
                {
                  data?.filter((product) => product?.id != productId)?.map((product, index) => index < similarValue && (
                    <SimilarProductTile key={product?.id} productId={product?.id} productImg={product?.image} productRating={product?.rating?.rate} productTitle={product?.title} productPrice={product?.price} productCat={product?.category} />
                  ))
                }
              </>)
          }
        </div>
      </SimilarProductSection>
    </div>
  )
}

export default Product;

export const getServerSideProps = async (context) => {

  const { id } = context?.query;

  const productRes = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());

  return {
    props: {
      product: productRes
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
bg-blue-400
text-blue-50
  rounded-md
  space-x-2
  px-6
  py-4
  tracking-wide
hover:bg-blue-500 transition duration-200
 `;
const SimilarProductSection = tw.section`
  flex
  flex-col
  items-center
  mx-auto
  space-y-3
  px-5
  py-8
  border-t
  border-slate-400
`;