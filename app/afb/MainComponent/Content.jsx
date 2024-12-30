import dynamic from 'next/dynamic';
import React from 'react'

const Buynow = dynamic(() => import('./buynow'), {
    loading: () => <p>loader</p>
});

const Flipkart_Amazon = dynamic(() => import('./Flipkart_Amazon'), {
    loading: () => <p>loader</p>
});


const Content = () => {



    return (
        <section className=''>


            <div className="bg_s_c">
                <div className="sm:max-w-7xl mx-auto">
                    <div className="grid sm:grid-cols-2 justify-center items-center gap-5 pt-11">


                        <div className="sm:order-1 order-2">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9ca6b741-d17f-48f9-72da-07216d93ad00/public" alt="" className='w-1/2 mx-auto' />
                        </div>


                        <div className="sm:order-2 order-1 px-3">

                            <div className="fontAnton uppercase md:text-[3.6vw] text-[10.5vw] leading-tight py-2">
                                Life changing results <br />in <span className='text-[#04cc4b]'>10 weeks</span>
                            </div>
                            {/* 
                            <div className='fontPoppins uppercase md:text-[1.6vw] text-[5vw] font-semibold pb-3'>
                                with Ashwarin Plus Powder
                            </div> */}


                            <div className='md:text-[2vw] text-[5.5vw] fontNoto font-extrabold md:py-8 py-4 leading-tight'>
                                "जिम करने वाले युवा और सभी  पुरुष जो फिटनेस और स्फूर्ति भरी लाइफ चाहते है उनके लिए श्रेष्ठ आयुर्वेदिक फार्मूलेशन है।"
                            </div>


                            {/* <Buynow /> */}

                        </div>

                    </div>
                </div>


            </div>



            <Flipkart_Amazon />


            <div className="bg-white">
                <div className="sm:max-w-7xl mx-auto">
                    <div className="grid sm:grid-cols-2 justify-center items-center gap-5 py-6">




                        <div className="px-3">

                            <div className="fontNoto uppercase md:text-[2.5vw] text-[7.8vw] leading-tight py-2 font-extrabold">
                                इसलिए<span className='text-[#04cc4b] fontAnton font-normal'> Ashwarin Plus</span> बेस्ट है!
                            </div>

                            <p>
                                आज के युवा कमजोर बॉडी को डेवलप करने और मस्क्युलर बनाने की चाहत लिए जिम जाते है, परन्तु शरीर में ऊर्जा की कमी और कमजोरी की वजह से वार्म अप में ही थक जाते है। वर्कआउट के लिए उपर्युक्त एनर्जी और स्ट्रेंथ नहीं मिलती और प्रॉपर वर्कआउट नहीं हो पाता है। जिसकी वजह से बॉडी पंप नहीं हो पाती है और मसल्स एक्टिव नहीं हो पाते है।
                            </p>

                            <br />

                            <p>
                                कई बार कम ऊर्जा के साथ ओवरवेट वर्कआउट में मसल स्ट्रेच, क्रैम्प्स जैसी मुश्किलें हो सकती है। इसलिए बॉडी को बेहतर आकार देने के लिए शरीर में ऊर्जा, ताकत और स्फूर्ति होना बहुत जरुरी है। और हम गर्व के साथ कह सकते है की Ashwarin Plus Powder के साथ नेचुरल तरीके से ऊर्जा, ताकत और स्फूर्ति बढाकर मस्क्युलर बॉडी पाना बहुत आसान है।
                            </p>



                            <Buynow />

                        </div>

                        <div className="">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c9b2dd67-3a62-4789-e65a-fdf9a17e2500/public" alt="" className='w-full px-2 mx-auto' />
                        </div>


                    </div>
                    <p className='px-4 md:py-8 py-3 md:text-center font-extrabold md:text-2xl'>
                        9 चुनिंदा आयुर्वेदिक जड़ीबूटियों से बना <span className='text-green-600'>Ashwarin Plus Powder</span> नैचुरली मसल बढ़ाने में मदद करता है। यह हड्डियों का घनत्व बढ़ाने और मजबूत बनाने में भी मदद करता है जिससे हैवीवेट वर्कआउट और मस्क्युलर बॉडी बनाने का सपना साकार हो जाता है।
                    </p>

                </div>


            </div>

        </section>
    )
}

export default Content