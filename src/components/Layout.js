import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-[82vh] mx-auto">{children}</main>
      <Footer />
    </>
  )
}

export default Layout;