import SliderCard from "./sliderCard"
import sliderStyle from "./sliderCard.module.css"
import Wrapper from "@/app/layouts/wrapper/wrapper"
import sliderBg from "../../images/slider/sliderBg.png"
export default function SliderPage(){
    return(
        <>
        <section className= {sliderStyle.sliderContainer}>
            <div className= {sliderStyle.mainContainer} style={{margin  :"auto"}}>
              <Wrapper style={{display  :"flex" , justifyContent  :"center" , alingItem : "center"}}>
                <SliderCard/>
                <SliderCard/>
                <SliderCard/>
              </Wrapper>
            </div>
        </section>
            
        </>
    )
}