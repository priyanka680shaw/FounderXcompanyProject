import Wrapper from "@/app/layouts/wrapper/wrapper"
import slideCardStyle from "./sliderCard.module.css"
import Image from "next/image"
import sliderimg from "../../images/slider/slider.webp"
export default function SliderCard({image , heading ,description}){
    // console.log(image.src , heading , description)
    return(
        //1.if image is given addd fall back image
        <>
            <section>
                <div className={slideCardStyle.cardContainer}>
                    <figure className={slideCardStyle.innerContainer}>
                        <div className= {slideCardStyle.imageContainer}>
                             <Image src={image} alt="Image description" className={slideCardStyle.image} />
                        </div>
                        <div className={slideCardStyle.captioncContainer}>
                            <figcaption>
                                <h3 className= {slideCardStyle.imgCaptionh3}>{heading}</h3>
                                {/* <p className={slideCardStyle.imgCaptionP}>{}</p> */}
                                <p className={slideCardStyle.imgCaptionP}>{description}</p>
                            </figcaption>
                        </div>
                    </figure>
                </div>
            </section>

        </>
    )
}