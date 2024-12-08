import React from 'react'
import Image from 'next/image'
import chair5 from "../../../../pics/chair 5.png"
import chair6 from "../../../../pics/chair 6.png"
import chair7 from "../../../../pics/chair 7.png"
const Categories = () => {
    return (
        <div>

            <div className="mt-[120px] w-full  sm:h-[150px] flex items-center flex-col ">


                <div className="flex w-[80%]  mt-4 gap-16 items-center  flex-col sm:flex-row">
                    <h1 className="font-inter font-[600] text-[24px] sm:text-[36px] text-black">Top categories</h1>

                </div>


            </div>



            {/* Categories section */}

            <div className="w-full flex justify-center items-center mt-16">
                <div className="w-[90%] xl:w-[90%] 2xl:w-[80%]  flex justify-center xl:justify-between items-center flex-wrap gap-6 md:gap-4">
                    <Image src={chair5} alt="logo" />
                    <Image src={chair6} alt="" />
                    <Image src={chair7} alt="" />
                    
                    

                </div>


            </div>







        </div>
    )
}

export default Categories