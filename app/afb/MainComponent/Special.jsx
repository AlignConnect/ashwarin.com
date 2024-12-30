import React from 'react'

const Special = () => {
    return (
        <section className="">
            <div className="sm:max-w-7xl mx-auto my-10">

                <div className="bg-[#d3ffe3] rounded-lg p-6 fontNoto my-6 mx-2">
                    <div className="grid md:grid-cols-12 items-center justify-center gap-3">
                        <div className="col-span-4 flex space-x-4">
                            <img
                                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5d904a16-7c16-4bf8-6e22-96c37b29ee00/public"
                                alt="Ashwarin Plus Powder"
                                className="w-full mx-auto"
                            />
                            <img
                                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3e4a6646-1273-440a-c50f-a8efa9514600/public"
                                alt="Drinking Ashwarin Plus"
                                className="w-full mx-auto"
                            />
                        </div>

                        <div className='col-span-8 md:pt-0 pt-5'>
                            <h3 className="bg-[#05ca4c] text-black text-xl font-bold inline-block px-4 pt-2 rounded">
                                स्पेशल सुविधा
                            </h3>
                            <p className="text-gray-800 mt-4">
                                कमजोरी हद से ज्यादा होने पर ASHWARIN PLUS को व्यक्ति के उम्र, हाइट और
                                वजन का आंकलन कर कस्टमाइज्ड भी तैयार किया जाता है। जिससे इसका प्रभाव
                                बढ़ जाता है और यह कुछ ही सप्ताह में अपना असर दिखाने लगता है। इसके
                                कमजोर व्यक्ति को ज्यादा से ज्यादा लाभ मिलता है।
                            </p>
                        </div>
                    </div>
                </div>


                <div className="bg-yellow-100 rounded-lg p-6 fontNoto  my-6 mx-2">
                    <div className="grid md:grid-cols-2 items-center justify-center">
                        <div className=''>
                            <h3 className="bg-[#05ca4c] text-black  text-xl font-bold inline-block px-4 pt-2 rounded">
                                सेवन का तरीका
                            </h3>
                            <p className="text-gray-800 mt-4">
                                बॉल व्यक्ति को एक चम्मच ASHWARIN PLUS POWDER गुनगुने दूध या पानी में
                                अच्छे से मिलाकर सुबह शाम भोजन उपरांत पीना है। बेहतर लाभ के लिए एक्सपर्ट
                                दूध में मिश्रण करने का सलाह देते है। मस्क्युलर बॉडी के लिए कम से कम 3
                                महीने नियमित सेवन अवश्य करें।
                            </p>
                        </div>

                        <div className=" flex justify-center items-center gap-2 ">
                            <div className="">
                                <img
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6e318dd6-194b-4223-28fb-753e18280000/public"
                                    alt="One Spoon"
                                    className="w-24 md:w-36 mx-auto"
                                />
                                <p className='text-center pt-2 font-semibold'>एक चम्मच पावडर</p>
                            </div>
                            <span className="text-xl font-bold">+</span>
                            <div className="">
                                <img
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/42c50c5e-0030-449f-f23b-937011a08e00/public"
                                    alt="Warm Milk or Water"
                                    className="w-24 md:w-36 mx-auto"
                                />
                                <p className='text-center pt-2 font-semibold'>गुनगुना दूध या पानी</p>
                            </div>
                            <span className="text-xl font-bold">=</span>
                            <div className="">
                                <img
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1c3a29b3-ca63-49ee-a081-ed5ec5513200/public"
                                    alt="Muscular Body"
                                    className="w-24 md:w-36 mx-auto"
                                />
                                <p className='text-center pt-2 font-semibold'>मस्क्युलर बॉडी</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section >
    )
}

export default Special