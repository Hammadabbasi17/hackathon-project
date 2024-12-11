import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"












import logo from "../../../../pics/Logo Icon.png"
import card4 from "../../../../pics/Cart (4).png"


import Link from "next/link"
import { CiSearch } from "react-icons/ci"
import { FaRegHeart } from "react-icons/fa"
import { IoIosContact } from "react-icons/io"
import { LuMenu } from "react-icons/lu"
import { MdOutlineShoppingCart } from "react-icons/md"


const Navbar = () => {
    return (
        <div>

            <div className="w-full h-[84px] bg-lightwhite  flex justify-center items-center fixed">
                <div className="w-full md:w-[80%] flex justify-between items-center">
                    <div className="flex gap-2 ml-2 md:ml-0">

                        <Image src={logo} alt="logo" />


                        <h1 className="text-[26px] font-inter font-[500] ">Comforty</h1>
                    </div>
                    <div className="hidden lg:block">
                        <Image src={card4} alt="card2" />
                    </div>

                    {/* menubar */}

                    <div className="text-[40px] mr-4 lg:hidden ">
                        <Sheet>
                            <SheetTrigger><LuMenu className="mt-3" /></SheetTrigger>
                            <SheetContent className="mt-[30px]">
                                <ul className=" flex flex-col  mt-11 gap-[32px] font-poppin  h-[70%]">
                                    <Link href={"/"}> <li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >Home</li></Link>
                                    <Link href={"/Shop"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]"  >Shop</li></Link>
                                    <Link href={"/Product"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >Product</li></Link>
                                    <Link href={"/Pages"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >Pages</li></Link>
                                    <Link href={"/About"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >About</li></Link>
                                </ul>





                                {/* <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader> */}
                            </SheetContent>
                        </Sheet>



                    </div>










                </div>

            </div>

            <div className="w-full flex justify-center items-center">


                <div className=" w-full md:w-[80%] h-[74px]  justify-between items-center  flex mt-[84px]">


                    <ul className=" flex-col md:flex-row justify-center items-center gap-[32px] font-poppin hidden lg:flex">
                        <Link href={"/"}> <li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >Home</li></Link>
                        <Link href={"/Shop"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]"  >Shop</li></Link>
                        <Link href={"/Product"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >Product</li></Link>
                        <Link href={"/Pages"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >Pages</li></Link>
                        <Link href={"/About"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >About</li></Link>

                    </ul>






                    <div className=" gap-9 justify-center items-center hidden lg:flex ">
                        <div className="mr-9">
                            <h1>Contact: (808) 555-0111</h1>
                        </div>

                    </div>
                </div>










            </div>

        </div>
    )
}

export default Navbar
