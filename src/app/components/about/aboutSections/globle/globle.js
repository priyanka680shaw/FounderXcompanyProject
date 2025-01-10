import AboutHeading from "../../aboutHeading/aboutHeading"
import globleStyle from "./globleStyle.module.css"
import BigCard from "@/app/components/card/bigCard/bigCard"
import SmallCard from "@/app/components/card/smallCard/smallcard"
import img from "../../../../images/banner/banner3.webp"
export default function Global(){

    const smallcardData = [
        {
            image : img,
            heading : "Budget 2024 : Insights into Fiscal Projections a...",
           
        },
        {
            image : img,
            heading : "Budget 2024 : Insights into Fiscal Projections a...",
           
        },
        {
            image : img,
            heading : "Budget 2024 : Insights into Fiscal Projections a...",
           
        },
        {
            image : img,
            heading : "Budget 2024 : Insights into Fiscal Projections a...",
           
        },
        {
            image : img,
            heading : "Budget 2024 : Insights into Fiscal Projections a...",
           
        },
        {
            image : img,
            heading : "Budget 2024 : Insights into Fiscal Projections a...",
           
        }
    ]
    return(
        <>
            <AboutHeading heading={"Globle"}/>
            <div className= {`${globleStyle.mainContainer} globleMainContainer`}>
                <div className= {`${globleStyle.bigCards} globleBigCardContainer`}>
                    <BigCard image ={img}/>
                    <BigCard image ={img}/>
                </div>
                <div className={globleStyle.smallCards}>
                    {
                        smallcardData.map((items , index)=>{
                            return(
                                <SmallCard key={index} heading ={items.heading} para2 ={items.para2} image={img} flexDirection={"column"} imageContainerWidth ={"200px"} mainContainerWidth ={"250px"}/>
                            )
                           
                        })
                    }
                </div>
            </div>
        </>
    )
}