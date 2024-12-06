import HeaderMainPage from "./layouts/header/headermainpage";
import Bannerpage from "./components/banner/bannerpage";
export default function Home() {
  return (
    <>
    <div className=" w-[100%] bg-white flex flex-col justify-center items-center m-auto h-auto">
      <HeaderMainPage/>
      <Bannerpage/>


    </div>
    </>
  );
}
