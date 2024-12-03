import HeaderOne from "./headerOne/headerOne";
import Wrapper from "../wrapper/wrapper";
import HeaderTwo from "./headerTwo/headerTwo";

export default function HeaderMainPage(){
    return(
        <>
        <div style={{border  :"2px solid red" , width : "100%" , display  : "flex" , flexDirection : "column" , alignItems : "center" }}>
        <HeaderOne/>
        <HeaderTwo/>
        </div>
         
            
        </>
    )
}