'use client'
import { useState , useEffect } from "react"
import AboutHeading from "../../aboutHeading/aboutHeading"
import newsStyle from "./newsStyle.module.css"
import BigCard from "@/app/components/card/bigCard/bigCard"
import SmallCard from "@/app/components/card/smallCard/smallcard"
import img from "../../../../images/banner/banner3.webp"
import smallCardStyle from "../../../card/smallCard/smallCardStyle.module.css"
export default function News(){

    const [is1024Screen , setIs1024Screen] = useState(false);

        const cheackScreenResize = () =>{
            setIs1024Screen(window.innerWidth === 1024)
        }

        useEffect(() => {
            cheackScreenResize();

            window.addEventListener("resize" , cheackScreenResize)

            //return 

            return () =>{
                window.addEventListener("resize" , cheackScreenResize)
            }
 } ,[])

    const smallcardData = [
        {
            image : img,
            heading : "Budget 2024 : Insights into Fiscal Projections a...",
            para2 : "May 04, 2024"
        },
        {
            image : img,
            heading : "Budget 2024 : Insights into Fiscal Projections a...",
            para2 : "May 04, 2024"
        },
        {
            image : img,
            heading : "Budget 2024 : Insights into Fiscal Projections a...",
            para2 : "May 04, 2024"
        },
        {
            image : img,
            heading : "Budget 2024 : Insights into Fiscal Projections a...",
            para2 : "May 04, 2024"
        }
    ]
    return(
        <>
            <AboutHeading heading={"News"}/>
            <div className={newsStyle.mainContainer}>
                <div className={newsStyle.bigCards}>
                    <BigCard image ={img}/>
                </div>
                <div className={newsStyle.smallCards}>
                    {
                        smallcardData.map((items , index)=>{
                            return(
                                // <SmallCard key={index} heading ={items.heading} para2 ={items.para2} image={img}  imageContainerWidth ={"200px"} mainContainerWidth ={"250px"}  className={`${newsStyle.cards}`} />







 <SmallCard key={index} heading ={items.heading} para2 ={items.para2} image={img} className ={smallCardStyle.cards}/>
                            



                                    //  <SmallCard key={index} heading ={items.heading} para2 ={items.para2} image={img} 
                                    //  imageContainerWidth={is1024Screen ? "200px" : " "}
                                    //  mainContainerWidth={is1024Screen ? "250px" : " "}
                                    //  flexDirection={is1024Screen ? "column" : " "}
                                    //  ></SmallCard>
                            )
                           
                        })
                    }
                </div>
            </div>
        </>
    )
}