import React from 'react'
import Image from 'next/image'
import chair1 from "../../../../pics/chair 1.png"
import chair2 from "../../../../pics/chair 2.png"
import chair3 from "../../../../pics/chair 3.png"
import chair4 from "../../../../pics/chair 4.png"
import image6 from "../../../../pics/Image (6).png"
import image7 from "../../../../pics/Image (7).png"
import card1 from "../../../../pics/card (1).png"

import { Input } from '@/components/ui/input'

const Product = () => {
    return (
        <div>
            <div>
                <div className="mt-[120px] w-full  sm:h-[150px] flex items-center flex-col">
                    {/* <div className="w-[80%] flex flex-col sm:flex-row ">
                    <div className="flex gap-2 items-center">
                        <div className="w-[20px] h-[40px] sm:ml-[36px]  bg-oranges"></div>
                        <h2 className="font-poppin text-oranges">Categories&quot;s</h2>

                    </div>
                </div> */}

                    <div className="flex w-[80%]  mt-4 gap-16 items-center justify-center flex-col sm:flex-row ">
                        <h1 className="font-inter font-[600] text-[24px] sm:text-[36px] text-black">Our Products</h1>

                    </div>


                </div>


                {/* features product section */}

                <div className="w-full h-auto  flex justify-center items-center  overflow-hidden mt-[40px] pb-11" >
                    <div className="w-full xl:w-[90%] 2xl:w-[80%] h-auto ">



                        {/* Large box 1 start */}
                        <div className="flex flex-wrap   justify-evenly items-center w-full h-auto gap-11 md:gap-7  pb-[120px] mt-4">
                            {/* box one */}
                            <div className="w-[270px] xl:w-[312px] h-[350px]  flex-col  text-black justify-between items-center">






                                {/* small box 1 */}


                                <div className="w-[270px] xl:w-[312px] h-[312px] flex justify-center items-center">
                                    <Image src={chair1} alt="Remote" />
                                </div>

                                <div className="">

                                    <h2 className="text-[16px] font-[600]  pt-3">Library Stool Chair</h2>
                                    <div className="flex gap-2">
                                        <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">$120</button>
                                        <button className="w-[77px] h-[40px] text-[16px] mt-3 underline" >$160</button>
                                    </div>
                                    {/* <div className="flex text-[20px] mt-2  items-center">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <h1 className="pl-2">(88)</h1>
                                </div> */}
                                </div>





                            </div>




                            {/* box one end */}




                            {/* box two start */}

                            <div className="w-[270px] xl:w-[312px]  h-[350px]  flex-col  text-black justify-between items-center">



                                <div className="w-[270px] xl:w-[312px]  h-[312px] flex justify-center items-center">
                                    <Image src={chair2} alt="Keyboard" />
                                </div>

                                <div className="">

                                    <h2 className="text-[16px] font-[600] font-poppin pt-3">Library Stool Chair</h2>
                                    <div className="flex gap-2">
                                        <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">$120</button>
                                        <button className="w-[77px] h-[40px] text-[16px] mt-3 underline" >$160</button>
                                    </div>
                                    {/* <div className="flex text-[20px] mt-2  items-center">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <h1 className="pl-2">(88)</h1>
                                </div> */}
                                </div>

                            </div>





                            {/* box two end */}


                            {/* box three start */}

                            <div className="w-[270px] xl:w-[312px] h-[350px]  flex-col  text-black justify-between items-center">



                                <div className="w-[270px] xl:w-[312px]  h-[312px] flex justify-center items-center">
                                    <Image src={chair3} alt="Led" />
                                </div>

                                <div className="">

                                    <h2 className="text-[16px] font-[600] font-poppin pt-3">Library Stool Chair</h2>
                                    <div className="flex gap-2">
                                        <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">$120</button>
                                        <button className="w-[77px] h-[40px] text-[16px] mt-3 underline" >$160</button>
                                    </div>
                                    {/* <div className="flex text-[20px] mt-2  items-center">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <h1 className="pl-2">(88)</h1>
                                </div> */}
                                </div>

                            </div>
                            {/* box three end */}



                            {/* box four start */}
                            <div className="w-[270px] xl:w-[312px]  h-[350px]  flex-col  text-black justify-between items-center">



                                <div className="w-[270px] xl:w-[312px]  h-[312px] flex justify-center items-center">
                                    <Image src={chair4} alt="Chair" />
                                </div>

                                <div className="">

                                    <h2 className="text-[16px] font-[600] font-poppin pt-3">Library Stool Chair </h2>
                                    <div className="flex gap-2">
                                        <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">$120</button>
                                        <button className="w-[77px] h-[40px] text-[16px] mt-3 underline" >$160</button>
                                    </div>
                                    {/* <div className="flex text-[20px] mt-2  items-center">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <h1 className="pl-2">(88)</h1>
                                </div> */}
                                </div>

                            </div>
                            {/* box four end */}


                        </div>

                        {/* large box 1 end */}


                        {/* Large box 2 start */}
                        <div className="flex flex-wrap   justify-evenly items-center w-full  h-auto gap-11 md:gap-8 lg:gap-0  pb-[120px] mt-4">
                            {/* box one */}
                            <div className="w-[270px] xl:w-[312px] h-[350px]  flex-col  text-black justify-between items-center">






                                {/* small box 1 */}


                                <div className="w-[270px] xl:w-[312px] h-[312px] flex justify-center items-center">
                                    <Image src={image6} alt="image6" />
                                </div>

                                <div className="">

                                    <h2 className="text-[16px] font-[600]  pt-3">Library Stool Chair</h2>
                                    <div className="flex gap-2">
                                        <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">$120</button>
                                        <button className="w-[77px] h-[40px] text-[16px] mt-3 underline" >$160</button>
                                    </div>
                                    {/* <div className="flex text-[20px] mt-2  items-center">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <h1 className="pl-2">(88)</h1>
                                </div> */}
                                </div>





                            </div>




                            {/* box one end */}




                            {/* box two start */}

                            <div className="w-[270px] xl:w-[312px]  h-[350px]  flex-col  text-black justify-between items-center">



                                <div className="w-[270px] xl:w-[312px]  h-[312px] flex justify-center items-center">
                                    <Image src={card1} alt="card1" />
                                </div>

                                <div className="">

                                    <h2 className="text-[16px] font-[600] font-poppin pt-3">Library Stool Chair</h2>
                                    <div className="flex gap-2">
                                        <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">$120</button>
                                        <button className="w-[77px] h-[40px] text-[16px] mt-3 underline" >$160</button>
                                    </div>
                                    {/* <div className="flex text-[20px] mt-2  items-center">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <h1 className="pl-2">(88)</h1>
                                </div> */}
                                </div>

                            </div>





                            {/* box two end */}


                            {/* box three start */}

                            <div className="w-[270px] xl:w-[312px] h-[350px]  flex-col  text-black justify-between items-center">



                                <div className="w-[270px] xl:w-[312px]  h-[312px] flex justify-center items-center">
                                    <Image src={image7} alt="image7" />
                                </div>

                                <div className="">

                                    <h2 className="text-[16px] font-[600] font-poppin pt-3">Library Stool Chair</h2>
                                    <div className="flex gap-2">
                                        <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">$120</button>
                                        <button className="w-[77px] h-[40px] text-[16px] mt-3 underline" >$160</button>
                                    </div>
                                    {/* <div className="flex text-[20px] mt-2  items-center">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <h1 className="pl-2">(88)</h1>
                                </div> */}
                                </div>

                            </div>
                            {/* box three end */}



                            {/* box four start */}
                            <div className="w-[270px] xl:w-[312px]  h-[350px]  flex-col  text-black justify-between items-center">



                                <div className="w-[270px] xl:w-[312px]  h-[312px] flex justify-center items-center">
                                    <Image src={chair1} alt="Chair" />
                                </div>

                                <div className="">

                                    <h2 className="text-[16px] font-[600] font-poppin pt-3">Library Stool Chair </h2>
                                    <div className="flex gap-2">
                                        <button className="w-[100px] h-[30px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">$120</button>
                                        <button className="w-[77px] h-[40px] text-[16px] mt-3 underline" >$160</button>
                                    </div>
                                    {/* <div className="flex text-[20px] mt-2  items-center">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <h1 className="pl-2">(88)</h1>
                                </div> */}
                                </div>

                            </div>
                            {/* box four end */}


                        </div>
                        {/* Large box 2 end */}





















                    </div>

                </div>









            </div>




        







        </div>
    )
}

export default Product