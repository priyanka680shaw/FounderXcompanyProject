import AboutHeading from "../aboutHeading/aboutHeading"
import News from "../aboutSections/newspage/news"
import Markets from "../aboutSections/markets/markets"
import Global from "../aboutSections/globle/globle"
import Finance from "../aboutSections/finance/finance"
export default function LeftSideBar(){
    return(
        <>
            <div className=" w-[65%] h-[auto]" style={{ padding  :"5px"}}>
            {/* <AboutHeading heading={"heading"}/> */}
            <News/>
            <Markets/>
            <Global/>
            <Finance/>
            </div>
        </>
    )
}