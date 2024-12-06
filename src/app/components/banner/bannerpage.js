import Wrapper from "@/app/layouts/wrapper/wrapper"
import Image from "next/image"
import bannerStyle from "./banner.module.css"
import banner1 from "../../images/banner1.webp"
import banner2 from "../../images/banner2.webp"
import banner3 from "../../images/banner3.webp"
import banner4 from "../../images/banner4.webp"
export default function Bannerpage (){
    return(
        <>
           <Wrapper>
            <div className={bannerStyle.mainContainer}>
                
                <div className={bannerStyle.leftContainer}>
                    <figure>
                        <div style={{ width: "100%", height: "450px", position: "relative" }}>
                            <Image
                                src={banner1}
                                alt="Image"
                                fill
                                style={{ objectFit: "cover" , objectPosition : "top-ccenter" , padding  :"5px" , borderRadius : "15px"}} // Makes the image cover the container
                            />
                        </div>
                        <figcaption>
                            {/* <h1>kkdsfjdfj</h1> */}
                        </figcaption>
                    </figure>
                </div>

                <div className={bannerStyle.righContainer}>
                    <div className={bannerStyle.topdiv} style={{ width: "100%", height: "250px", position: "relative" }} >
                         <figure>
                            <div style={{ width: "100%", height: "250px", position: "relative" , }}>
                                <Image src={banner2} 
                                    alt="image"
                                    fill
                                    style={{objectFit : "cover" , padding  :"5px" , borderRadius : "15px"}}
                                />
                            </div>
                        </figure> 
                    </div>
                    <div className={bannerStyle.bottomdiv} style={{ width: "100%", height: "200px", position: "relative"}}>
                        <div className={bannerStyle.leftImg} style={{ width: "50%", height: "200px" , position: "relative" , }}>
                            <Image src={banner3} 
                                alt="image"
                                fill
                                style={{ objectFit: "cover", objectPosition: "top center" , padding  :"5px" , borderRadius : "15px"}}
                                
                            />
                        </div>
                        <div className={bannerStyle.rightImg} style={{ width: "50%", height: "200px" , position: "relative" }}>
                            <Image src={banner4} 
                                alt="image"
                                fill
                                style={{ objectFit: "cover", objectPosition: "top center" , padding  :"5px" , borderRadius : "15px"}}
                            />
                        </div>
                    </div>
                </div>
            </div>
           </Wrapper>
        </>
    )
}