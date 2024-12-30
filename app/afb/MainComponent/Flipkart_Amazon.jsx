import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const Flipkart_Amazon = () => {
    return (
        <section className='bg-yellow-500'>

            <div className="sm:max-w-7xl mx-auto">

                <div className="grid sm:grid-cols-2 justify-center items-center md:gap-5 ">

                    <div className="pt-5 sm:py-6">
                        <div className="fontAnton uppercase md:text-[2.2vw] text-[7vw] leading-tight px-2 md:text-left text-center">
                            Build Muscle Naturally <br /><span className='text-[#1f8142]'> Save 10% Extra on Prepaid Order</span>
                        </div>

                    </div>
                    <div className="">
                        {/* <a href="https://bit.ly/3DBucOE">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cd5c76b5-eacd-44c0-97c8-e26301f37600/public" alt="" className='w-2/3 sm:w-1/2 mx-auto' />
                        </a> */}
                        <a href="#form">
                            <button className="buy-now-btn-animation flex items-center justify-between bg-[#04cc4b] hover:bg-[#55c57c] md:text-[1.4vw] text-xl text-black font-bold md:py-3 py-2 px-6 my-3 rounded-3xl uppercase 
                                        sm:w-56 w-1/2 mx-auto">
                                Buy Now <FaArrowRight />
                            </button>
                        </a>
                    </div>

                </div>

            </div>


        </section>
    )
}

export default Flipkart_Amazon