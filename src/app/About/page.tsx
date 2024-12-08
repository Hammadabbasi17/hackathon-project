import Image from 'next/image'
import card from "../../../pics/Image Block.png"
import text from "../../../pics/Text Block.png"
import bus from "../../../pics/Feature block.png"
import true1 from "../../../pics/Feature block (1).png"
import sajjad from "../../../pics/Feature block (2).png"
import hammad from "../../../pics/Feature block (3).png"
import beenish from "../../../pics/Product Card.png"
import hammad2 from "../../../pics/Product Card (1).png"
import hammad3 from "../../../pics/Product Card (2).png"

import React from 'react'

const About = () => {
  return (
    <div>
            <div className='w-full h-auto flex justify-center items-center'>
                <div className='w-[95%] lg:w-[80%] lg:h-[850px] h-auto flex flex-col md:flex-row justify-around items-center gap-7'>

                    <div className=' w-auto lg:  flex  flex-col justify-between '>
                    <Image src={text} alt='chair' />
                    </div>
                    <div>
                        <Image src={card} alt='chair' />
                    </div>
                </div>

            </div>


            <div className="flex w-full  mt-[90px] gap-16 justify-center items-center  flex-col sm:flex-row ">
                <h1 className="font-inter font-[600] text-[32px] lg:text-[60px] text-black text-center">What makes our Brand Different</h1>

            </div>

            <div className='w-full flex h-auto justify-center items-center mt-11'>
                <div className='w-full lg:w-[80%] flex justify-center items-center flex-wrap gap-4'>
                    <Image src={bus} alt='' className='w-[309px] h-[244px]' />
                    <Image src={true1} alt='' className='w-[309px] h-[244px]' />
                    <Image src={sajjad} alt='' className='w-[309px] h-[244px]' />
                    <Image src={hammad} alt='' className='w-[309px] h-[244px]' />
                    
                </div>

            </div>










            {/* Our Popular Products  */}

            <div className="mt-[120px] w-full  sm:h-[150px] flex items-center flex-col ">


                <div className="flex w-[80%]  mt-4 gap-16 items-center  flex-col sm:flex-row">
                    <h1 className="font-inter font-[600] text-[24px] sm:text-[36px] text-black">Our Popular Products </h1>

                </div>


            </div>



            {/* Categories section */}

            <div className="w-full flex justify-center items-center mt-16">
                <div className="w-[90%] xl:w-[90%] 2xl:w-[80%]  flex justify-center xl:justify-between items-center flex-wrap gap-6 md:gap-4">
                    <Image src={beenish} alt="logo" />
                    <Image src={hammad2} alt="" />
                    <Image src={hammad3} alt="" />
                    
                    

                </div>


            </div>

        </div>
  )
}

export default About