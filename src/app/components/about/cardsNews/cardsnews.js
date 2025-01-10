import SmallCard from "../../card/smallCard/smallcard"
import globleStyle from "../aboutSections/globle/globleStyle.module.css"
import img from "../../../images/banner/banner3.webp"
export default function CardsNews(){
    const smallcardData = [
        {
            image : img,
            heading : "Budget 2024 : Insights into Fiscal Projections a...",
            btnTextLable : "news"
           
        },
        {
            image : img,
            heading : "Budget 2024 : Insights into Fiscal Projections a...",
             btnTextLable : "globle"
           
        },
        {
            image : img,
            heading : "Budget 2024 : Insights into Fiscal Projections a...",
            btnTextLable : "globle"
        },
        {
            image : img,
            heading : "Budget 2024 : Insights into Fiscal Projections a...",
            btnTextLable : "markets"
        },
        {
            image : img,
            heading : "Budget 2024 : Insights into Fiscal Projections a...",
            btnTextLable : "crypto"
        },
        {
            image : img,
            heading : "Budget 2024 : Insights into Fiscal Projections a...",
            btnTextLable : "news"
        }
    ]

    const cardsContainer = {
        width : "100%" ,
        // border : "12px solid blue",
        display  :"flex",
        justifyContent : "center"
    }
    return(
        <>
          
         <div style={{...cardsContainer}}>
         <div className={globleStyle.smallCards}>
                    {
                        smallcardData.map((items , index)=>{
                            return( 
                                <SmallCard key={index} heading ={items.heading} para2 ={items.para2} image={img} btnTextLable = {items.btnTextLable} flexDirection={"column"}  mainContainerWidth ={"200px"}/>
                            )
                           
                        })
                    }
                </div>
         </div>
               
               
           </>
    )
}