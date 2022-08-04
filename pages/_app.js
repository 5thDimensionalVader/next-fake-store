import '../styles/globals.css';
import Layout from '../src/components/Layout';
import { CartProvider } from '../src/context/CartProvider';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </>
  )
}

export default MyApp
