import Wrapper from "../../wrapper/wrapper"
import headerThreeStyle from "./headerThree.module.css"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function HeaderThree(){

    const menuLists = ["market" , "global" , "news" , "finance" , "industry" , "research" , "magazine" , "startup" ,  "sports" , "crpto" , "calculator" , "tools" , "learn" , "media" , "community"]


    return(
        <>
        <div style={{ width  :"100%" , display : "flex" , justifyContent : "center" }}>
            <Wrapper>
                <div className= {headerThreeStyle.mainContainer}>
                   <ul>
                    {
                        menuLists.map((items , index)=>{
                            return(
                                <li key={index}>{items}</li>
                            )
                        })
                    }
                   </ul>
                </div>  
                <hr style={{ border: "1px solid rgb(218, 214, 214)", margin: "2px 0px" , width : "100%" }} />                                                              
            </Wrapper>
            
        </div>

          
        
            
        </>
    )
}