import cardStyle from "./cardStyle.module.css"
import Image from "next/image"
import img from "../../../images/slider/slider.webp"
export default function  Card(
    {
        mainContainerStyle , innerContainerStyle , imageContainer , textContainer, headingstyle , image , heading , para1 ,para2 , btnText , btnTextLable
    }
){
    console.log(btnText , heading , para1)

    return(

        
        <>
            <div className= {cardStyle.mainContainer} style={{...mainContainerStyle}}>
                <div className={cardStyle.innerContainer} style={{...innerContainerStyle}}>
                    <figure className= {cardStyle.imageContainer}>
                        <div  style={{...imageContainer}}>
                            <Image src={img} alt = "bgImage" style={{width : "100%" , height : "100%" , borderRadius : "15px"}}></Image>
                           {
                            btnText ? <button className={cardStyle.button1}>{btnText}</button>  : null
                           } 
                           {
                            btnTextLable ? <button className={cardStyle.button2}>{btnTextLable}</button> : null
                           }
                        </div>
                    </figure> 
                    <figcaption className={cardStyle.textContainer} style={{...textContainer}}>
                      
                            <h1 className={cardStyle.heading} style={{...headingstyle}}>{heading}</h1>
                            {
                                para1 ? <p className={cardStyle.para}><span className= {cardStyle.para1Spaan}>by Foundrex  -</span>{para1}</p>  :null
                            }
                            <p className={cardStyle.para}>{para2}</p>
                          
                        
                    </figcaption>
                </div>
            </div>
        </>
    )
}


//in this component you have to pass height aand width aND SPEECIFIC STYLE FOR THE CONTAINER USING PROPS 