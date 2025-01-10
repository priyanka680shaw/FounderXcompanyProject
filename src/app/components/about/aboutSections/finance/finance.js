import AboutHeading from "../../aboutHeading/aboutHeading"
import financeStyle from "./financeStyle.module.css"
import BigCard from "@/app/components/card/bigCard/bigCard"
import SmallCard from "@/app/components/card/smallCard/smallcard"
import img from "../../../../images/banner/banner3.webp"
export default function Finance(){

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
            <AboutHeading heading={"Finance"}/>
            <div className={`${financeStyle.mainContainer} finnanceMainContainer`}>
            <div className={`${financeStyle.bigCards} finnanceBigCards`}>
                    <BigCard image ={img}/>
                    <BigCard image ={img}/>
                </div>
                <div className={financeStyle.smallCards}>
                    {
                        smallcardData.map((items , index)=>{
                            return(
                                <SmallCard key={index} heading ={items.heading} para2 ={items.para2} image={img}/>
                            )
                           
                        })
                    }
                </div>
            </div>
        </>
    )
}