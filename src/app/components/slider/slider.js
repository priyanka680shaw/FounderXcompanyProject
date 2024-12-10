import SliderCard from "./sliderCard"
import sliderStyle from "./sliderCard.module.css"
import Wrapper from "@/app/layouts/wrapper/wrapper"
import sliderBg from "../../images/slider/sliderBg.png"
export default function SliderPage(){
    return(
        <>
            <div className= {sliderStyle.sliderContainer}>
                <SliderCard/>
                
            </div>
        </>
    )
}