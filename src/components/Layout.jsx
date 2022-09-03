import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-[82vh]">{children}</main>
      <Footer />
    </>
  )
}

export default Layout;