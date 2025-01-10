import LeftSideBar from "./leftsidebar/leftpage";
import RightSideBar from "./rightsidebar/rightpage";
import Wrapper from "@/app/layouts/wrapper/wrapper";
import aboutStyle from "./about.module.css"
export default function About(){

    
    return(

     
        <>
            <Wrapper >
                <div className={`${aboutStyle.mainContainer} aboutMainContainer`}>
                    <div className= {`${aboutStyle.leftContainer} aboutMainLeftContainer`}>
                        <LeftSideBar/>
                    </div>
                    <div className={aboutStyle.rightContainer}>
                        <RightSideBar/>
                    </div>
                </div>
              
            </Wrapper>
        </>
    )
}