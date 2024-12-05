import headeroneStyle from "./headerOneStle.module.css"
import Wrapper from "../../wrapper/wrapper"
import headerOneStyle from "./headerOneStle.module.css"
export default function HeaderOne(){
  return(
    <>
    <div className = {headerOneStyle.mainContainner}>
      {/* <Wrapper style={{border : "2px solid green" , margin : "auto" }}> */}
      <Wrapper>
        <div>
          <h1>Header one </h1>
        </div>
      </Wrapper>
    </div>
    <hr style={{ border: "1px solid rgb(218, 214, 214)", margin: "2px 0px" , width : "100%" }} />    
     
   
      {/* <h1 style={{headeroneStyle.color}}>Hello Header one</h1> */}
    </>
  )
}
  