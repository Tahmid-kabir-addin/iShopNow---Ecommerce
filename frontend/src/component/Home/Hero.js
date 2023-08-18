import React from 'react'
import './Hero.css'
import CountUp from "react-countup"
import logo from './hero-image.png'

const Hero = () => {
  return (
    <div className="App">
      <div>
        <div className = "white-gradient"/>
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">

                {/* left Side  */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <h1>
                            Discover <br/>
                            Most Suitable <br/>
                            Items
                        </h1>
                    </div>
                    <div className="flexColStart hero-des">
                        <span className = "secondaryText">Find a variety of items that suit you very easily</span>
                        <span className = "secondaryText">Forget all difficulties in finding a good product for you</span>
                    </div>
                    <div className = "flexCenter stats">
                        <div className = "flexColCenter stat">
                            <span>
                                <CountUp start = {8800} end = {9000} duration = {2} />
                                <span>+</span>
                            </span>
                            <span className = "secondaryText">Premium Products</span>
                        </div>

                        <div className = "flexColCenter stat">
                            <span>
                                <CountUp start = {1500} end = {2000} duration = {2} />
                                <span>+</span>
                            </span>
                            <span className = "secondaryText">Happy Customers</span>
                        </div>

                        <div className = "flexColCenter stat">
                            <span>
                                <CountUp end = {20}  />
                                <span>+</span>
                            </span>
                            <span className = "secondaryText">Award Winning</span>
                        </div>
                    </div>
                </div>


                {/* Right Side */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </section>

      </div>
    </div>
  )
}

export default Hero