import AboutHeading from "../aboutHeading/aboutHeading"
import News from "../aboutSections/newspage/news"
import Markets from "../aboutSections/markets/markets"
import Global from "../aboutSections/globle/globle"
import Finance from "../aboutSections/finance/finance"
import Navbar from "../aboutSections/navbar/nanvbar"
import Currencies from "../aboutSections/currencies/currencies"
import leftSideBarStyle from "./leftSideBar.module.css"
export default function LeftSideBar(){
    const mainContainer = {
        display  :"flex",
        alignItems  : "center",
        // border  :"2px solid black",
        flexDirection : "column",
        height : "auto",
        gap  : "15px",
        padding : "0px ",
        width : "65%" , 
        height : "auto"
    }
    return(
        <>
        {/* <div style={mainContainer}> */}
            <div  className= {leftSideBarStyle.mainContainer}>
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