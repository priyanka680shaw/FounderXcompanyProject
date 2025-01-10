import AboutHeading from "../aboutHeading/aboutHeading"
import News from "../aboutSections/newspage/news"
import Markets from "../aboutSections/markets/markets"
import Global from "../aboutSections/globle/globle"
import Finance from "../aboutSections/finance/finance"
import Navbar from "../aboutSections/navbar/nanvbar"
import Currencies from "../aboutSections/currencies/currencies"
import leftSideBarStyle from "./leftSideBar.module.css"
export default function LeftSideBar(){
   
    return(
        <>
       
            <div  className= {`${leftSideBarStyle.mainContainer} aboutleftSideBarMainContainer`}>
            <Navbar/>
            <News/>
            <Currencies/>
            <Markets/>
            <Global/>
            <Finance/>
            </div>
        </>
    )
}