import cardStyle from "./cardStyle.module.css"
import Image from "next/image"
import img from "../../../images/slider/slider.webp"
export default function  Card(
    {
        mainContainerStyle , innerContainerStyle , imageContainer , textContainer, heading , para1 ,para2 , para3 
    }
){
    return(
        <>
            <div className= {cardStyle.mainContainer} style={{...mainContainerStyle}}>
                <div className={cardStyle.innerContainer} style={{...innerContainerStyle}}>
                    <figure className= {cardStyle.imageContainer}>
                        <div  style={{...imageContainer}}>
                            <Image src={img} alt = "bgImage" style={{width : "100%" , height : "100%"}}></Image>
                        </div>
                    </figure> 
                    <figcaption className={cardStyle.textContainer} style={{...textContainer}}>
                      
                            <h1 className={cardStyle.heading}>Paytm Faces RBI Action Shakes Payments Bank, Raises User Concerns</h1>
                            <p><span className= {cardStyle.para1Spaan}>by Foundrex  -</span>
                            May 02, 2024</p>
                            <p>Ayodhya Ram Mandir Celebration : Commemorating a Historic Milestone</p>
                          
                        
                    </figcaption>
                </div>
            </div>
        </>
    )
}


//in this component you have to pass height aand width aND SPEECIFIC STYLE FOR THE CONTAINER USING PROPS 