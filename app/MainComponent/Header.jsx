import dynamic from 'next/dynamic';
import React, { useState } from 'react'

const Buynow = dynamic(() => import('./buynow'), {
    loading: () => <p>loader</p>
});

const Header = () => {


    const Benifits = [
        { title: 'दमदार मसल', image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6ca28300-308a-4bc4-fb98-137cd5bcba00/public' },
        { title: 'जबरदस्त ताकत', image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c5970fc5-72f4-43db-fba6-ab038deb6400/public' },
        { title: 'जोश-स्फूर्ति', image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8c95804d-ee24-49ac-79ce-62ef5cf45300/public' },
    ]


    return (

        <section>


            <div className="head_bg">

                {/*Desktop View only.......*/}
                <div className='sm:block hidden'>
                    <div className="max-w-[80%] mx-auto">
                        <div className="grid sm:grid-cols-2 justify-center items-center pt-7">
                            <div className="fontAnton">
                                <div className="">
                                    <div className="fontJosefin text-[#efd600] text-[1.6vw] py-2 leading-tight uppercase">
                                        Ayurvedic Muscle Gainer
                                    </div>
                                    <div className='leading-tight'>
                                        <div className="text-[#00c64b] text-[5.5vw] uppercase">
                                            Ashwarin Plus
                                        </div>
                                        <div className="text-white text-[1.6vw] md:text-[3vw] tracking-[0.4em] uppercase pb-3">
                                            Powder
                                        </div>
                                    </div>
                                    <div className="fontNoto text-[3.5vw] text-[#efd600] font-extrabold pt-5">
                                        अच्छी सेहत का राज!
                                    </div>
                                    <div className="fontJosefin text-white text-[1.6vw] py-2 leading-tight">
                                        Pure natural formulation to build<br /> muscle and strength for men
                                    </div>

                                    <Buynow />

                                </div>
                            </div>
                            <div className="">
                                <img
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/15a0cc94-331c-4b5f-96cf-835d3d9c3400/public"
                                    alt=""
                                    className="w-[75%] mx-auto"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#efd600]">
                        <div className="md:max-w-[80%]  mx-auto relative">
                            <div className="grid grid-cols-1 sm:grid-cols-2 py-6">
                                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 items-center justify-center">
                                    {Benifits.map((item, key) => (
                                        <div key={key} className="flex items-center gap-1">
                                            <div>
                                                <img src={item.image} alt="pic" className="w-20" />
                                            </div>
                                            <div className="fontNoto font-extrabold md:text-[1.4vw] pt-2">
                                                {item.title}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Absolute Element */}
                            <div className="absolute bottom-0 right-0 sm:right-5 md:right-8 lg:right-12 flex gap-1 items-end mb-2">
                                <img
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cbe7923b-7509-4d62-d015-75e05a7f5d00/public"
                                    alt=""
                                    className="w-[40%] sm:w-[35%] md:w-[50%] lg:w-[45%]"
                                />
                                <div className="fontAnton text-black text-[2.1vw] uppercase leading-tight">
                                    Blend of<br /> 9 premium herbs
                                </div>
                            </div>
                        </div>

                    </div>


                </div>


                {/* Mobile View only.................. */}
                <div className='sm:hidden block'>
                    <div className="relative">
                        <div className=" pt-7">
                            <div className="fontAnton  text-center">
                                <div className="fontJosefin text-[#efd600] text-[5vw] leading-tight uppercase">
                                    Ayurvedic Muscle Gainer
                                </div>
                                <div className="leading-tight">
                                    <div className="text-[#00c64b] text-5xl uppercase ">
                                        Ashwarin Plus
                                    </div>
                                    <div className="text-white text-3xl tracking-[.25em] uppercase py-2">
                                        Powder
                                    </div>
                                    <div className="fontNoto text-4xl text-[#efd600] font-extrabold pt-2">
                                        अच्छी सेहत का राज!
                                    </div>
                                    <div className="fontJosefin text-white text-xl py-2 leading-tight">
                                        Pure natural formulation to build<br /> muscle and strength for men
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <img
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/15a0cc94-331c-4b5f-96cf-835d3d9c3400/public"
                                    alt=""
                                    className="w-[90%] mx-auto"
                                />
                            </div>
                        </div>
                        <div className="relative  bg-[#efd600] py-12">

                        </div>
                        <div className="absolute bottom-0 right-0 flex gap-2 items-end px-2 pb-3">
                            <div className=" fontAnton text-black text-[7.2vw] uppercase leading-tight text-end">
                                Blend of<br /> 9 premium herbs
                            </div>
                            <img
                                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cbe7923b-7509-4d62-d015-75e05a7f5d00/public"
                                alt=""
                                className="w-2/5"
                            />
                        </div>
                    </div>




                    <div className="">

                        <div className="md:max-w-[80%] mx-auto">
                            <div className="bg-black text-white pt-5">
                                <div className="grid grid-cols-3 items-center justify-center">
                                    {Benifits.map((item, key) => (
                                        <div
                                            key={key}
                                            className=""
                                        >
                                            <div>
                                                <img
                                                    src={item.image}
                                                    alt="pic"
                                                    className="w-16 mx-auto"
                                                />
                                            </div>
                                            <div className="fontNoto font-extrabold md:text-[1.4vw] text-center pt-2">
                                                {item.title}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className=""></div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default Header