import '../styles/globals.css';
import Layout from '../src/components/Layout';
import { CartProvider } from '../src/context/CartProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer />
      </CartProvider>
    </>
  )
}

export default MyApp
