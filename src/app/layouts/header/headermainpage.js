import HeaderOne from "./headerOne/headerOne";
import Wrapper from "../wrapper/wrapper";
import HeaderTwo from "./headerTwo/headerTwo";
import HeaderThree from "./headerThree/headerThree";

export default function HeaderMainPage(){
    return(
        <>
        <div style={{ width : "100%" , display  : "flex" , flexDirection : "column" , alignItems : "center"  , border : "2px solid red"}}>
        <HeaderOne/>
        <HeaderTwo/>
        <HeaderThree/>
        </div>
         
            
        </>
    )
}