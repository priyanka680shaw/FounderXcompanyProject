import Wrapper from "@/app/layouts/wrapper/wrapper"
import slideCardStyle from "./sliderCard.module.css"
import Image from "next/image"
import sliderimg from "../../images/slider/slider.webp"
export default function SliderCard(){
    return(
        <>
            <section>
                <div className={slideCardStyle.cardContainer}>
                    <figure className={slideCardStyle.innerContainer}>
                        <div className= {slideCardStyle.imageContainer}>
                             <Image src={sliderimg} alt="Image description" className={slideCardStyle.image} />
                        </div>
                        <figcaption>
                            <h3 className= {slideCardStyle.imgCaptionh3}>Image Header</h3>
                            <p className={slideCardStyle.imgCaptionP}>Date: 2024-12-10</p>
                            <p className={slideCardStyle.imgCaptionP}>This is a brief description about the image.</p>
                        </figcaption>
                    </figure>
                </div>
            </section>

        </>
    )
}