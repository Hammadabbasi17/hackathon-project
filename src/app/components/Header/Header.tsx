import Image from 'next/image'
import chair from "../../../../pics/Product Image.png"
import React from 'react'
import { chdir } from 'process'

const Header = () => {
    return (
        <div>
            <div className='w-full h-auto flex justify-center items-center mt-[84px]'>
                <div className='w-[95%] lg:w-[80%] h-[850px] flex flex-col md:flex-row justify-around items-center bg-lightwhite'>

                    <div className=' w-auto lg:w-[557px]  flex  flex-col justify-between '>
                        <h1 className='text-left'>Welcome to chairy</h1>
                        <h1 className='font-[700] text-[40px] md:text-[60px]'>Best Furniture Collection for your interior.</h1>

                            <button className="w-[171px] h-[52px] text-[16px] text-white mt-4 border bg-cgreen border-cgreen rounded-[5px] hover:bg-transparent hover:text-black transition-all duration-500">Shop Now</button>

                    </div>
                    <div>
                        <Image src={chair} alt='chair' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
