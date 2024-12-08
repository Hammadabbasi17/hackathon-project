import Image from "next/image";
import Header from "./components/Header/Header";
import logo from "../../pics/Logo.png"
import logo1 from "../../pics/Logo (1).png"
import logo2 from "../../pics/Logo (2).png"
import logo3 from "../../pics/Logo (3).png"
import logo4 from "../../pics/Logo (4).png"
import logo5 from "../../pics/Logo (5).png"
import logo6 from "../../pics/Logo (6).png"
import Features from "./components/Features/Features";
import Categories from "./components/Categories/Categories";
import Arrival from "./components/Arrival/Arrival";
import Product from "./components/Product/Product";


export default function Home() {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center items-center mt-16">
        <div className="w-[80%] h-auto sm:h-[139px] flex justify-between items-center flex-wrap">
          <Image src={logo} alt="logo" />
          <Image src={logo1} alt="" />
          <Image src={logo2 } alt="" />
          <Image src={logo3 } alt="" className="hidden sm:flex"/>
          <Image src={logo4 } alt="" />
          <Image src={logo5 } alt="" />
          <Image src={logo6 } alt="" />

        </div>


      </div>
      <Features/>
      <Categories/>
      <Arrival/>
      <Product/>

    </div>
  );
}
