import LeftSideBar from "./leftsidebar/leftpage";
import RightSideBar from "./rightsidebar/rightpage";
import Wrapper from "@/app/layouts/wrapper/wrapper";
import aboutStyle from "./about.module.css"
export default function About(){

    const mainContainerW = {
        display  :"flex",
        // alignItems  : "center",
        // border  :"2px solid black",
        // flexDirection : "column",
        height : "auto",
        gap  : "25px",
    }
    return(

     
        <>
            <Wrapper >
                <div className={aboutStyle.mainContainer}>
                    <div className={aboutStyle.leftContainer}>
                        <LeftSideBar/>
                    </div>
                    <div className={aboutStyle.rightContainer}>
                        <RightSideBar/>
                    </div>
                
               
                {/* <div className="w-[200px] h-[300px] bg-red-300 m-2"></div>
                <div className="w-[200px] h-[300px] bg-red-300 m-2"></div> */}
                </div>
              
            </Wrapper>
        </>
    )
}