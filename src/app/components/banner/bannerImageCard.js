import Image from "next/image"
import bannerStyle from "./banner.module.css"
// import banner1 from "../../images/banner1.webp"
export default function BannerImageCard({height , image , headingText , btnColor , buttonText , fontSize}){
    return(
        <>
            <figure style={{position : "relative"}}>
                        <div style={{ height: height }} className={bannerStyle.imgContainer}>
                            <Image
                                src={image}
                                alt="Image"
                                // fill
                                className= {bannerStyle.mainImage}
                                // style={{ objectFit: "cover" , objectPosition : "top-center" , padding  :"5px" , borderRadius : "15px"}} // Makes the image cover the container
                            />
                            <div style={{position : "absolute" , color : "white" , bottom  :"30px" , left : "30px"}}>
                                <button className = {bannerStyle.buttonType} style={{backgroundColor : btnColor}}>{buttonText}</button>
                                <h1 className={bannerStyle.heading} style={{fontSize : fontSize}}>{headingText}</h1>
                            </div>
                        </div>
                      
            </figure>
        </>
    )
}