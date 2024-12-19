import SmallCard from "../../card/smallCard/smallcard"
import AboutHeading from "../aboutHeading/aboutHeading"
import img from "../../../images/banner/banner1.webp"
import financeStyle from "../aboutSections/finance/financeStyle.module.css"
export default function Mostpopular(){

    const containerStyle = {
        width : "100%",
        height :"auto" ,
        border : "2px solid green",
    }

    const cardContainer = {
        width : "100%",
        height :"auto" ,
        display  :"flex",
        justifyCopntent  :"center",
        border : "2px solid green",
    }


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
            <div style={{...containerStyle}}>
                <AboutHeading heading={"Most Popular"} fontSize = {"24px"}/>
                <div className={financeStyle.smallCards} style={{...cardContainer}}>
                    {
                        smallcardData.map((items , index)=>{
                            return(
                                <SmallCard key={index} heading ={items.heading} para2 ={items.para2} image={img} />
                            )
                        
                        })
                    }
                </div>
            </div>           
        </>
    )
}