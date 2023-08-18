import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo1.png";
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'
import { useSelector } from "react-redux";
const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIcon: "true",
  ProfileIconElement: AiOutlineUser,
  searchIcon: "true",
  SearchIconElement: AiOutlineSearch,
  cartIcon: "true",
  CartIconElement: AiOutlineShoppingCart,
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
  nav1Transition: 0,
  link1AnimationTime: 0,
  link2AnimationTime: 0,
  link3AnimationTime: 0,
  link4AnimationTime: 0,
  searchIconAnimationTime: 0,
  cartIconAnimationTime: 0,
  profileIconAnimationTime: 0
};

const Header = () => {
  return <ReactNavbar {...options} />;
  // const { isAuthenticated, user } = useSelector((state) => state.user)
  // return (

  //   <div>
  //     <div className="flex flex-wrap">
  //       <section className="relative mx-auto">
  //         {/* <!-- navbar --> */}
  //         <nav className="flex justify-between bg-gray-900 text-white w-screen">
  //           <div className="px-5 xl:px-12 py-6 flex w-full items-center">
  //             <a className="text-3xl font-bold font-heading" href="/">
  //               <img className="h-9" src={logo} alt="logo" />
  //               {/* Logo Here. */}
  //             </a>
  //             {/* <!-- Nav Links --> */}
  //             <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
  //               <li><a className="hover:text-gray-200" href="/">Home</a></li>
  //               <li><a className="hover:text-gray-200" href="/products">Products</a></li>
  //               <li><a className="hover:text-gray-200" href="/contact">Contact</a></li>
  //               <li><a className="hover:text-gray-200" href="/about">About Us</a></li>
  //             </ul>

  //             {/* <!-- Header Icons --> */}
  //             <div className="hidden mr-20 xl:flex items-center space-x-5">
  //               {/* <a className="hover:text-gray-200" href="#">
  //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  //                   </svg>
  //                 </a> */}
  //               <a className="hover:text-gray-200" href="/search">
  //                 <svg className="cursor-pointer bi bi-search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  //                   <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="white"></path>
  //                 </svg>
  //               </a>

  //               <a className="flex items-center hover:text-gray-200" href="/cart">
  //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  //                 </svg>
  //                 <span className="flex absolute -mt-5 ml-4">
  //                   <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
  //                   <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
  //                   </span>
  //                 </span>
  //               </a>


  //               {/* <!-- Sign In / Register      --> */}
  //               {!isAuthenticated && <a className="flex items-center hover:text-gray-200" href="/login">
  //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  //                 </svg>
  //               </a>}

  //             </div>
  //           </div>
  //           {/* <!-- Responsive navbar --> */}
  //           <a className="xl:hidden flex mr-6 items-center" href="/cart">
  //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  //             </svg>
  //             <span className="flex absolute -mt-5 ml-4">
  //               <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
  //               <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
  //               </span>
  //             </span>
  //           </a>
  //           <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
  //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
  //             </svg>
  //           </a>
  //         </nav>

  //       </section>
  //     </div>

  //   </div>
  // )
};

export default Header;
