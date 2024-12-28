import LeftSideBar from "./leftsidebar/leftpage";
import RightSideBar from "./rightsidebar/rightpage";
import Wrapper from "@/app/layouts/wrapper/wrapper";
export default function About(){

    const mainContainer = {
        display  :"flex",
        // alignItems  : "center",
        // border  :"2px solid black",
        // flexDirection : "column",
        height : "auto",
        gap  : "25px",
    }
    return(

     
        <>
            <Wrapper style={mainContainer}>
                <LeftSideBar/>
                <RightSideBar/>
            </Wrapper>
        </>
    )
}