import HeaderMainPage from "./layouts/header/headermainpage";
import Bannerpage from "./components/banner/bannerpage";
import SliderPage from "./components/slider/slider";
import Card from "./components/card/bigCard/bigcard";
export default function Home() {
  const  mainContainerStyle = {
        // backgroundColor : "red" , 
        width : "500px",
        // height : "300px",
        margin : "10px"

  }

  const innerContainerStyle = {
    // backgroundColor : "green" , 
    flexDirection : "column" ,
    // padding : "20px",
    justifyContain : "center"
  
  }

  const imageContainer ={
    width : "100%",
    height : "200px"
  }

  const textContainer ={
    width : "100%",
    padding : "10px 0px"
  }
  return (
    <>
    <div className=" w-[100%] bg-white flex flex-col justify-center items-center m-auto h-auto">
      <HeaderMainPage/>
      <Bannerpage/>
      <SliderPage/>
      <Card mainContainerStyle = {mainContainerStyle}  innerContainerStyle={innerContainerStyle} imageContainer = {imageContainer} textContainer ={textContainer}/>
      {/* <Card mainContainerStyle = {mainContainerStyle}  innerContainerStyle={innerContainerStyle} /> */}
    </div>
    </>
  );
}
