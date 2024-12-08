import Image from "next/image"
import image5 from "../../../pics/Image (5).png"
import group12 from "../../../pics/Group 112.png"
import group13 from "../../../pics/Group 113.png"
import group14 from "../../../pics/Group 114.png"
import group15 from "../../../pics/Group 115.png"
import group16 from "../../../pics/Group 116.png"
const Shop = () => {
    return (
        <div>
            <div className='w-full h-auto flex justify-center items-center mt-[84px]'>
                <div className='w-[95%] lg:w-[80%] h-[850px] flex flex-col-reverse md:flex-row-reverse justify-around items-center '>

                    <div className=' w-auto lg:w-[541px] lg:h-[500px]  flex  flex-col justify-between gap-10'>
                        <div>
                            <h1 className='text-left text-[32px] font-[700] sm:text-[60px]'>Library Stool Chair</h1>

                            <button className="w-[171px] h-[52px] text-[16px] text-white mt-4 border bg-cgreen border-cgreen rounded-3xl hover:bg-transparent hover:text-black transition-all duration-500"> $20.00 USD</button>
                        </div>
                        <h1 className='sm:text-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</h1>

                        <button className="w-[171px] h-[52px] text-[16px] text-white mt-4 border bg-cgreen border-cgreen rounded-[5px] hover:bg-transparent hover:text-black transition-all duration-500">Add To cart</button>

                    </div>
                    <div>
                        <Image src={image5} alt='chair' />
                    </div>
                </div>

            </div>










            {/* Features product */}


            <div className="mt-[120px] w-full  sm:h-[150px] flex items-center flex-col">
                {/* <div className="w-[80%] flex flex-col sm:flex-row ">
                    <div className="flex gap-2 items-center">
                        <div className="w-[20px] h-[40px] sm:ml-[36px]  bg-oranges"></div>
                        <h2 className="font-poppin text-oranges">Categories&quot;s</h2>

                    </div>
                </div> */}

                <div className="flex w-[80%]  mt-4 gap-16 items-center  flex-col sm:flex-row">
                    <h1 className="font-inter font-[600] text-[24px] sm:text-[36px] text-black">Featured Products</h1>

                </div>


            </div>


            {/* features product section */}

            <div className="w-full h-auto  flex justify-center items-center  overflow-hidden mt-[40px] pb-11" >
                <div className="w-full xl:w-[90%] 2xl:w-[80%] h-auto ">



                    {/* Large box 1 start */}
                    <div className="flex flex-wrap   justify-evenly items-center w-full h-auto gap-11">
                        {/* box one */}
                        <div className="w-[270px] xl:w-[312px] h-auto  flex-col  text-black justify-between items-center">






                            {/* small box 1 */}


                            <div className="w-[263px] xl:w-[312px] h-[312px] flex justify-center items-center">
                                <Image src={group12} alt="group12" />
                            </div>

                            





                        </div>




                        {/* box one end */}




                        {/* box two start */}

                        <div className="w-[270px] xl:w-[312px]  h-[350px]  flex-col  text-black justify-between items-center">



                            <div className="w-[270px] xl:w-[312px]  h-[312px] flex justify-center items-center">
                                <Image src={group13} alt="group13" />
                            </div>

                            

                        </div>





                        {/* box two end */}


                        {/* box three start */}

                        <div className="w-[270px] xl:w-[312px] h-[350px]  flex-col  text-black justify-between items-center">



                            <div className="w-[270px] xl:w-[312px]  h-[312px] flex justify-center items-center">
                                <Image src={group14} alt="group14" />
                            </div>

                            

                        </div>
                        {/* box three end */}



                        {/* box four start */}
                        <div className="w-[270px] xl:w-[312px]  h-[350px]  flex-col  text-black justify-between items-center">



                            <div className="w-[270px] xl:w-[312px]  h-[312px] flex justify-center items-center">
                                <Image src={group15} alt="group15" />
                            </div>

                            

                        </div>
                        {/* box five end */}

                        {/* box four start */}
                        <div className="w-[270px] xl:w-[312px]  h-[350px]  flex-col  text-black justify-between items-center">



                            <div className="w-[270px] xl:w-[312px]  h-[312px] flex justify-center items-center">
                                <Image src={group16} alt="group16" />
                            </div>

                            

                        </div>
                        {/* box five end */}


                    </div>

                    {/* large box 1 end */}










                </div>

            </div>




























        </div>
    )
}

export default Shop
