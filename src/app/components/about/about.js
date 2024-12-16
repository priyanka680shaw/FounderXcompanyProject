import LeftSideBar from "./leftsidebar/leftpage";
import RightSideBar from "./rightsidebar/rightpage";
import Wrapper from "@/app/layouts/wrapper/wrapper";
export default function About(){
    return(
        <>
            <Wrapper style={{display : "flex"}}>
                <LeftSideBar/>
                <RightSideBar/>
            </Wrapper>
        </>
    )
}