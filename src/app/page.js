import HeaderMainPage from "./layouts/header/headermainpage";
import Bannerpage from "./components/banner/bannerpage";
import SliderPage from "./components/slider/slider";
import About from "./components/about/about";
import Footer from "./layouts/footer/footer";

export default function Home() {
   return (


    <>
    <div className=" w-[100%] bg-white flex flex-col justify-center items-center m-auto h-auto" >
      <HeaderMainPage/>
      <Bannerpage/>
      <SliderPage/>
      <About/>

      <Footer/>
    </div>
    </>
  );
}
