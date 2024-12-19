import HeaderMainPage from "./layouts/header/headermainpage";
import Bannerpage from "./components/banner/bannerpage";
import SliderPage from "./components/slider/slider";
import About from "./components/about/about";
import Footer from "./layouts/footer/footer";
import Mostpopular from "./components/about/mostPopular/mostpopular";
export default function Home() {
   return (
    <>
    <div className=" w-[100%] bg-white flex flex-col justify-center items-center m-auto h-auto">
      <HeaderMainPage/>
      <Bannerpage/>
      <SliderPage/>
      <About/>
    <Mostpopular/>
      <Footer/>
     
    </div>
    </>
  );
}
