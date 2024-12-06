import Wrapper from "@/app/layouts/wrapper/wrapper"
import Image from "next/image"
import bannerStyle from "./banner.module.css"
import banner1 from "../../images/banner1.webp"
import banner2 from "../../images/banner2.webp"
import banner3 from "../../images/banner3.webp"
import banner4 from "../../images/banner4.webp"
import BannerImageCard from "./bannerImageCard"
export default function Bannerpage (){
    return(
        <>
           <Wrapper>
            <div className={bannerStyle.mainContainer}>
                
                <div className={bannerStyle.leftContainer}>
                    <BannerImageCard height = {"450px"} image={banner1}/>
                </div>

                <div className={bannerStyle.righContainer}>
                    <div className={bannerStyle.topdiv}  >
                        <BannerImageCard height = {"250px"} image={banner2}/>
                    </div>
                    <div className={bannerStyle.bottomdiv} style={{ width: "100%", height: "200px", position: "relative"}}>
                        <div className={bannerStyle.rightImg} style={{ width: "50%", height: "200px" }}>
                            <BannerImageCard height = {"200px"} image={banner3}/>
                        </div>
                      
                        <div className={bannerStyle.rightImg} style={{ width: "50%", height: "200px" }}>
                            <BannerImageCard height = {"200px"} image={banner4}/>
                        </div>
                    </div>
                </div>
            </div>
           
           </Wrapper>
        </>
    )
}