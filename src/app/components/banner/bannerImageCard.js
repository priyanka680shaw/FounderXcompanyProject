import Image from "next/image"
import bannerStyle from "./banner.module.css"
import banner1 from "../../images/banner1.webp"
export default function BannerImageCard({height , image}){
    return(
        <>
            <figure style={{position : "relative"}}>
                        <div style={{ width: "100%", height: height, position: "relative" }}>
                            <Image
                                src={image}
                                alt="Image"
                                fill
                                style={{ objectFit: "cover" , objectPosition : "top-ccenter" , padding  :"5px" , borderRadius : "15px"}} // Makes the image cover the container
                            />
                            <div style={{position : "absolute" , color : "red" , bottom  :"30px" , left : "30px"}}>
                                <button>crypto</button>
                                <h1>Cryptocurrency : Understanding the Funda...</h1>
                            </div>
                        </div>
                      
            </figure>
        </>
    )
}