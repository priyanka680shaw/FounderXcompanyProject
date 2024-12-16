import AboutHeading from "../aboutHeading/aboutHeading"
import News from "../aboutSections/newspage/news"
export default function LeftSideBar(){
    return(
        <>
            <div className=" w-[65%] h-[700px]" style={{border : "2px solid red" , padding  :"5px"}}>
            {/* <AboutHeading heading={"heading"}/> */}
            <News/>

            </div>
        </>
    )
}