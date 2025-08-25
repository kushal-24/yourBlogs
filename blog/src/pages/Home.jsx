import React from 'react'
import Navbar from '../componenets/Navbar'
import Header from '../componenets/Header'
import BlogList from '../componenets/BlogList'
import NewsLetter from '../componenets/NewsLetter'
import Footer from '../componenets/Footer'

function Home() {
  return (
    <>
    <Navbar/> 
    <Header/>
    <BlogList/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}

export default Home