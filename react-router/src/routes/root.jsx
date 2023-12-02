import React from 'react'
import Footer from './Footer';
import Header from './Header';
import { Outlet } from "react-router-dom";

const root = () => {
  return (
    <>
      <div id="detail">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default root
