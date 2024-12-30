import React, { useRef } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import YoutubeFrame from "./YoutubeFrame"
import { BiSkipNext } from "react-icons/bi";
import { BiSkipPrevious } from "react-icons/bi";
import dynamic from 'next/dynamic';


const Flipkart_Amazon = dynamic(() => import('./Flipkart_Amazon'), {
    loading: () => <p>loader</p>
});

const Buynow = dynamic(() => import('./buynow'), {
    loading: () => <p>loader</p>
});

const Second_content = () => {

    let sliderRef = useRef(null);

    const next = () => {
        sliderRef.slickNext();
    };

    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const proud_to_be_imgs = [
        "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/696bc038-c357-4a8e-e1af-a951dc59bf00/public",
        "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a40b0dfe-7379-4a0a-d512-f39f29d0d600/public",
        "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/248c9c0e-e9f2-44ec-e39d-74559c54bd00/public",
        "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/05ad8292-1be8-4c16-d226-cf11b81dc100/public",
        "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/95c3492b-1b4f-4f68-dc43-64af1c587300/public",
        "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/eb11a1ff-6425-4980-6a18-09b243d06f00/public",
    ];


    const features = [
        {
            text: "प्रीपेड आर्डर के साथ पा सकते है हर आर्डर पर भारी बचत।",
        },
        {
            text: "शुद्ध आयुर्वेदिक उत्पाद किसी प्रकार के केमिकल का मिश्रण नहीं।",
        },
        {
            text: "ISO, GMP और आयुष मंत्रालय भारत सरकार द्वारा प्रमाणित।",
        }
    ];


    const features_second = [
        {
            text: "मसल्स की वृद्धि और उन्हें मजबूत बनाने में मददद करता है।",
        },
        {
            text: "पाचक अग्नि को मजबूत कर, भूख बढाने में मदद करता है।",
        },
        {
            text: "इम्युनिटी बढाकर संक्रमण और बिमारियों से बचाव करता है।",
        },
        {
            text: "ताकत, शक्ति और स्फूर्ति बढ़ाकर शरीर को एक्टिव रखता है।",
        },
        {
            text: "सप्तधातुओं को पोषित कर शारीरिक विकास को सपोर्ट करता है।",
        },
        {
            text: "कमजोर से कमजोर शरीर को फौलादी बना सकता है।",
        },
        {
            text: "थकान और अनुत्साह को दूर रखता है, ऊर्जा बनाये रखता है।",
        },
        {
            text: "इसका कोई दुष्प्रभाव नहीं है उपयोग के लिए 100% सुरक्षित है।",
        },
    ];

    return (
        <section className=''>

            <div className="bg-black text-white">

                <div className="sm:max-w-7xl mx-auto py-10">

                    <div className="fontNoto uppercase md:text-[3vw] text-[9vw] leading-tight py-4 font-extrabold text-center">
                        तेजी से बढ़ रही है लोकप्रियता
                    </div>

                    <p className='text-center px-3'>
                        2020 के वायरस संक्रमण और आपातकाल के बाद से लोगो ने आयुर्वेद के महत्त्व को समझा है और बहुत तेजी से प्राकृतिक उत्पादों पर शिफ्ट हो रहे है। Ashwarin Plus Powder जो एक मसल गेनर सप्लीमेंट है। संक्रमण काल के बाद इसकी भी लोकप्रियता बहुत तेजी से बढ़ी है। युवा इसके इस्तेमाल से मनचाही बॉडी बना रहे है। सबसे बड़ी बात है की इसका कोई नुकसान नहीं है केवल फायदे ही फायदे है इसलिए इसकी विक्री में तेजी से बृद्धि देखने को मिल रही है।
                    </p>


                    <div className="mx-1 pb-4 sm:pb-7 slider-container">
                        <Slider ref={slider => {
                            sliderRef = slider;
                        }}
                            {...settings}
                        >
                            <div className="">
                                <YoutubeFrame vid={"mOL8VqJxgV4"} />
                            </div>
                            <div className="">
                                <YoutubeFrame vid={"YyrKvsKQ2hY"} />
                            </div>
                            <div className="">
                                <YoutubeFrame vid={"dxxMcjzCVkM"} />
                            </div>
                            <div className="">
                                <YoutubeFrame vid={"XcWQfR7rKUg"} />
                            </div>
                            <div className="">
                                <YoutubeFrame vid={"wSfh3OOSD04"} />
                            </div>
                            <div className="">
                                <YoutubeFrame vid={"L_sB-g02xdg"} />
                            </div>
                        </Slider>
                        <div className='flex justify-between items-center gap-1 text-sm px-6'>
                            <button className="button cursor-pointer flex items-center" onClick={previous}>
                                <BiSkipPrevious size={20} />Previous
                            </button>
                            <button className="button cursor-pointer flex items-center" onClick={next}>
                                Next<BiSkipNext size={20} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>


            <div className="bg-white text-black">

                <div className="sm:max-w-7xl mx-auto py-5">

                    <div className="fontAnton uppercase md:text-[4vw] text-[12vw] leading-tight py-2 text-center">
                        We're <span className='text-[#04cc4b]'> Proud to be</span>
                    </div>

                    <p className='text-center px-3 py-2'>
                        Ashwarin Plus Powder को आयुष मंत्रालय भारत सरकार द्वारा प्रमाणित किया गया है। Ashwarin Plus के प्रभाव और लोकप्रियता को देखते हुए आज की तारीख में डॉक्टर भी अच्छी बॉडी की चाहत रखने वाले युवाओ को इसे सेवन करने का सुझाव देते है। आप इसे भारत के सबसे ट्रस्टेड प्लेटफार्म "Flipkart" से आर्डर किया जा सकता है।
                    </p>


                    <div className="bg-gray-200 p-3 m-1 rounded-lg grid md:grid-cols-6 grid-cols-3 gap-3 justify-center items-center">
                        {proud_to_be_imgs.map((url, index) => (
                            <div key={index} className="">
                                <img
                                    src={url}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-24 mx-auto"
                                />
                            </div>
                        ))}
                    </div>


                    <ul className=" p-3">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-2 fontNoto my-2">
                                <span className="text-xl text-green-500"><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/bd97d4cd-69b4-4dac-97e3-788c01f91f00/public" alt="" className='w-5' /></span>
                                <p className="">{feature.text}</p>
                            </li>
                        ))}
                    </ul>


                </div>


            </div>


            <Flipkart_Amazon />


            <div className="bg_testoo">
                <div className="sm:max-w-7xl mx-auto">
                    <div className="grid sm:grid-cols-2 justify-center items-center gap-5 pt-5 text-white
                    ">

                        <div className=" px-3">


                            <div className="fontAnton uppercase md:text-[3.6vw] text-[10.5vw] leading-tight py-2 ">
                                How <span className='text-[#04cc4b]'>Ashwarin Plus Powder</span> Works?
                            </div>

                            <p>
                                Ashwarin Plus में 9 प्रीमियम और चुनिंदा हर्ब्स मौजूद है जो टेस्टोस्टेरोन बढ़ाने, मसल गेन करने, जोश व स्फर्ति बढ़ाने के साथ शरीर में ताकत और स्टैमिना बढ़ाने में बहुत उपयोगी है। इन जड़ीबूटियों पर सालों तक रिसर्च हुए है और यह प्रमाणित हुआ है की इन जड़ीबूटियों को उचित मात्रा में इस्तेमाल करने से कोई नुकसान नहीं होता अपितु अनेक फायदे मिलते है। अश्वरिन प्लस के सेवन से कोई भी व्यक्ति आसानी से मसल बढ़ाकर अपनी पर्सनालिटी डेवलप कर सकता है।
                            </p>


                            <Buynow />

                        </div>

                        <div className="">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7ee9d7e3-1056-4045-c590-47fb58010e00/public" alt="" className='w-full mx-auto' />
                        </div>


                    </div>
                </div>


            </div>


            <div className="bg-white">
                <div className="sm:max-w-7xl mx-auto">
                    <div className="grid sm:grid-cols-2 justify-center items-center gap-5 md:py-16 py-5 text-black
                    ">


                        <div className="">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7013008d-c4eb-4d27-3dbc-50318cb93b00/public" alt="" className='w-3/4 md:w-full mx-auto' />
                        </div>

                        <div className=" px-3">


                            <div className="fontNoto uppercase md:text-[3vw] text-[9vw] leading-tight py-2 font-extrabold">
                                <span className='text-[#04cc4b] fontAnton font-normal'>Ashwarin Plus Powder</span> के उपयोगकर्ताओं के अनुभव
                            </div>

                            <ul className=" p-3">
                                {features_second.map((feature, index) => (
                                    <li key={index} className="flex items-center space-x-2 fontNoto my-2">
                                        <span className="text-xl text-green-500"><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/bd97d4cd-69b4-4dac-97e3-788c01f91f00/public" alt="" className='w-7' /></span>
                                        <p className="text-xl md:text-2xl">{feature.text}</p>
                                    </li>
                                ))}
                            </ul>

                            

                        </div>

                    </div>
                </div>


            </div>
            <Flipkart_Amazon />


        </section >
    )
}

export default Second_content