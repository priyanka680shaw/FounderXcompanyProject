import AboutHeading from "../../aboutHeading/aboutHeading"
import marketStyle from "./marketStyle.module.css"
import BigCard from "@/app/components/card/bigCard/bigCard"
import SmallCard from "@/app/components/card/smallCard/smallcard"
import img from "../../../../images/banner/banner3.webp"
import smallCardStyle from "../../../card/smallCard/smallCardStyle.module.css"
export default function Markets(){

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
      <AboutHeading heading={"Markets"} />
      <div className={`${marketStyle.mainContainer} newsMainContainer`}>
        <div className= {`${marketStyle.bigCards} newsBigCards`}>
          <BigCard image={img} />
        </div>
        <div className={`${marketStyle.smallCards} newsSmallCards`}>
          {smallcardData.map((items, index) => {
            return (
              <SmallCard
                key={index}
                heading={items.heading}
                para2={items.para2}
                image={img}
                className= {`${smallCardStyle.cards} smallCardsf`}
              />
            );
          })}
        </div>
      </div>
    </>
    )
}