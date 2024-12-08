import Image from "next/image"
import Frame from "../../../../pics/item-category 1.png"
import Frame1 from "../../../../pics/card.png"
import Frame2 from "../../../../pics/card (1).png"


const Arrival = () => {
    return (
        <div>
            <div className="mt-[120px] w-full  sm:h-[150px] flex items-center flex-col">
                

                <div className="flex w-[76%]  mt-4 gap-16 items-center  flex-col sm:flex-row">
                    <h1 className="font-inter font-[600] text-[24px] sm:text-[36px] text-black">New Arrival</h1>

                </div>


            </div>


            {/* New arrival section */}

            <div className="w-full h-auto mt-[40px] flex justify-center items-center flex-wrap pb-[50px]">
                <div className="w-full md:w-[80%] xl:h-[600px] h-auto flex xl:flex-row  sm:gap-8  justify-center items-center flex-col ">
                    <div className="md:w-[648px] h-[648px] ">
                        <Image src={Frame} alt="frame" />
                    </div>
                    <div className="flex flex-col gap-6 justify-center items-center">
                        <div className="flex gap-8 md:w-[570px] justify-center sm:justify-start items-center sm:flex-row flex-col ">
                            <Image src={Frame2} alt="frame2" />
                            <Image src={Frame1} alt="frame3" />
                        </div>
                        <div className="flex gap-8 md:w-[570px] justify-center sm:justify-start items-center sm:flex-row flex-col ">
                            <Image src={Frame2} alt="frame2" />
                            <Image src={Frame1} alt="frame3" />
                        </div>


                    </div>

                </div>

            </div>





        </div>
    )
}

export default Arrival