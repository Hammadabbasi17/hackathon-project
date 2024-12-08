import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
// import arrow from "../../../../images/arrow.png"
// import rcode from "../../../../images/Qr Code@2x.png"
// import google from "../../../../images/GooglePlay.png"
// import appstore from "../../../../images/download-appstore.png"
import React from 'react'
import logo from "../../../../pics/Logo Icon.png"
import { GrFacebookOption } from "react-icons/gr"
import { IoLogoInstagram } from "react-icons/io"
import { RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri"

const Footer = () => {
    return (
        <div >
            <div className="w-full h-[1500px] xl:h-auto mt-[150px] flex justify-center items-center bg-lightwhite text-black">
                <div className=" w-full flex xl:flex-row flex-col lg:justify-evenly justify-center items-center lg:items-start   gap-8 xl:gap-0 lg:pl-[40px] ">

                    <div className="sm:w-[350px] flex  flex-col justify-center items-center lg:items-start lg:justify-start gap-11 ">
                        <div className="flex gap-2">
                            <Image src={logo} alt="logo" />
                            <h1 className='font-inter font-[700] text-[24px] text-center lg:text-left'>Comforty</h1>
                        </div>
                        <div className="w-auto">
                            <h1 className='text-center text-[16px] font-[700] lg:text-left'>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus </h1>
                        </div>

                        <div className="flex gap-6">
                            <GrFacebookOption className="text-[24px]" />

                            <RiTwitterFill className="text-[24px]" />
                            <IoLogoInstagram className="text-[24px]" />
                            <RiLinkedinBoxFill className="text-[24px]" />


                        </div>
                    </div>

                    <div className="flex flex-col gap-6 w-[105px]">

                        <h2 className="text-[24px] font-[700] text-center lg:text-left font-inter">Category</h2>
                        <h3 className=" text-center lg:text-left ">Sofa</h3>
                        <h3 className=" text-center lg:text-left ">Armchair</h3>
                        <h3 className=" text-center lg:text-left">Wing Chair</h3>
                        <h3 className=" text-center lg:text-left ">Desk Chair</h3>
                        <h3 className=" text-center lg:text-left ">wooden Chair</h3>
                        <h3 className=" text-center lg:text-left">Park Bench</h3>

                    </div>










                    <div className="flex flex-col gap-6 w-[156px]">
                        <h2 className="text-[24px] font-[700] text-center lg:text-left font-inter">Support</h2>
                        <h3 className=" text-center lg:text-left ">Help & Support</h3>
                        <h3 className=" text-center lg:text-left ">Tearms & Conditions</h3>
                        <h3 className=" text-center lg:text-left">Privacy Policy</h3>
                        <h3 className=" text-center lg:text-left ">Help</h3>

                    </div>







                    <div className="flex flex-col gap-9 w-auto  xl:w-[424px] ">

                        <h2 className="text-[24px] font-[700] text-center lg:text-left font-inter">Newsletter</h2>
                        <div className="flex flex-col gap-4 justify-center items-center lg:items-start ">
                            <Input className="w-[220px] xl:w-[285px] mt-0" placeholder="Email" />

                            <button className="w-[171px] h-[52px] text-[16px] text-white mt-4 border bg-cgreen border-cgreen rounded-[5px] hover:bg-transparent hover:text-black transition-all duration-500">Subscribe</button>
                            <h3 className=" text-center lg:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</h3>
                        </div>




                    </div>





















                </div>
            </div>
            <div className="w-full h-auto sm:h-[100px]  flex justify-center items-center bg-lightwhite text-white ">
                <div className="pb-8  items-center  border-black">

                    <h2 className="text-neutral-700">Copyright Rimel 2022. All right reserved</h2>



                </div>

            </div>
        </div>

    )
}

export default Footer