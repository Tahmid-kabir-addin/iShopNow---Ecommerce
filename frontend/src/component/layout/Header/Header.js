import React, { useState } from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo1.png";
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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
  const history = useHistory()
  const [isSearchExpanded, setIsSearchExpanded] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = (e) => {
    // e.preventDefault();
    if (searchInput.trim()) {
      history.push(`/products/${searchInput}`);
      // NavigationPreloadManager()
    } else {
      history.push("/products");
    }
  }
  // return <ReactNavbar {...options} />;
  const { cartItems } = useSelector((state) => state.cart)
  const { isAuthenticated, user } = useSelector((state) => state.user)
  return (
    <>
      <div className="block md:hidden">

        <ReactNavbar {...options} />
      </div>
      <div className="hidden md:block">
        <div className="flex flex-wrap">
          <section className="relative mx-auto">
            {/* <!-- navbar --> */}
            <nav className="flex justify-between bg-[rgba(0,0,0,0.7)] text-white w-screen h-14">
              <div className="px-3 md:px-6 xl:px-12 py-6 flex w-full items-center">
                <a className="text-3xl font-bold font-heading" href="/">
                  <img className="h-9" src={logo} alt="logo" />
                </a>
                {/* <!-- Nav Links --> */}
                <ul className="flex px-4 mx-auto font-semibold font-heading space-x-12">
                  <li><a className="hover:overline" href="/">Home</a></li>
                  <li><a className="hover:overline" href="/products">Products</a></li>
                  <li><a className="hover:overline" href="/contact">Contact</a></li>
                  <li><a className="hover:overline" href="/about">About Us</a></li>
                </ul>

                {/* <!-- Header Icons --> */}
                <div className="mr-20 flex items-center xl:space-x-6 md:space-x-3 space-x-1">
                  {/* <a className="hover:text-gray-200" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </a> */}
                  {/* <a className="hover:text-gray-200" href="/search">
                    <svg className="cursor-pointer bi bi-search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="white"></path>
                    </svg>
                  </a> */}
                  <a
                    className="hover:text-gray-200"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSearch()
                    }}
                  >
                    <svg className="cursor-pointer bi bi-search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="white"></path>
                    </svg>
                  </a>
                  <div
                    className={`${isSearchExpanded ? "w-64" : "w-12"
                      } transition-all overflow-hidden flex items-center bg-white ${isSearchExpanded ? "pl-4 pr-2" : ""
                      }`}
                  >
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      className="bg-transparent outline-none border-0 p-2 m-0 flex-grow"
                    />
                    {/* Search button */}
                    <button
                      className="text-gray-600 hover:text-gray-800 focus:outline-none"
                      onClick={() => {
                        // Implement your search functionality here using the searchInput state.
                      }}
                    >
                      {/* Search icon SVG */}
                    </button>
                  </div>

                  <a className="flex items-center hover:text-gray-200" href="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {<span class="relative right-1 bottom-3 rounded-full  w-4 h-4 top right p-0 m-0 text-pink-500 font-mono text-sm  leading-tight text-center">{cartItems.length}
                    </span>}
                  </a>

                  {/* <a href="#" role="button" class="relative flex">
                  <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                  </svg>
                  <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">5
                  </span>
                </a> */}


                  {/* <!-- Sign In / Register      --> */}
                  {!isAuthenticated && <a className="flex items-center hover:text-gray-200" href="/login">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>}

                </div>
              </div>
              {/* <!-- Responsive navbar --> */}
              {/* <a className="xl:hidden flex mr-6 items-center" href="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                  </span>
                </span>
              </a>
              <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </a> */}
            </nav>

          </section>
        </div>

      </div>
    </>
  )
};

export default Header;
