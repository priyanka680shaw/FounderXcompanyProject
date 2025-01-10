import Wrapper from "@/app/layouts/wrapper/wrapper"
import Image from "next/image"
import bannerStyle from "./banner.module.css"
import banner1 from "../../images/banner/banner1.webp"
import banner2 from "../../images/banner/banner2.webp"
import banner3 from "../../images/banner/banner3.webp"
import banner4 from "../../images/banner/banner4.webp"
import BannerImageCard from "./bannerImageCard"
export default function Bannerpage (){
    return(
        <>
           <Wrapper>
            <div className={`${bannerStyle.mainContainer} bannerMainContainer`}>
                
                <div className= {`${bannerStyle.leftContainer} bannerLeftContainer`}>
                    <BannerImageCard height = {"450px"} image={banner1} headingText = {"Contrary to popular belief, Lorem Ipsum is not simply random text"} buttonText={"learn"} btnColor ={"#F20860"} fontSize = {"30px"}/>
                </div>

                <div className={`${bannerStyle.righContainer} bannerRightContainer`}>
                    <div className= {`${bannerStyle.topdiv} bannerRightContainerTopContainer`} >
                        <BannerImageCard height = {"250px"} image={banner2} headingText = {"Contrary to popular belief, Lorem Ipsum is not simply random text"} buttonText={"finance"} btnColor ={"#0074CC"} fontSize = {"25px"}/>
                    </div>
                    <div className= {`${bannerStyle.bottomdiv} bannreBottomDiv`} style={{ width: "100%",  position: "relative"}}>
                        <div className={`${bannerStyle.rightImg} bannerBottomDivRightContainer `} style={{ width: "50%", height: "200px" }}>
                            <BannerImageCard height = {"200px"} image={banner3} headingText = {"Contrary to popular belief, Lorem Ipsum is not simply random text"} buttonText={"news"} btnColor ={"#E59F3C"} fontSize = {"15px"}/>
                        </div>
                      
                        <div className={`{bannerStyle.rightImg} bannerBottomDivLeftContainer `}style={{ width: "50%", height: "200px" }}>
                            <BannerImageCard height = {"200px"} image={banner4} headingText = {"Contrary to popular belief"} buttonText={"news"} btnColor ={"#F717BA"} fontSize = {"15px"}/>
                        </div>
                    </div>
                </div>
            </div>
           
           </Wrapper>
        </>
    )
}