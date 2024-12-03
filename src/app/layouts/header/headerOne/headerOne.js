import headeroneStyle from "./headerOneStle.module.css"
import Wrapper from "../../wrapper/wrapper"
import headerOneStyle from "./headerOneStle.module.css"
export default function HeaderOne(){
  return(
    <>
    <div className = {headerOneStyle.mainContainner}>
      <Wrapper style={{border : "2px solid green" , margin : "auto" }}>
        <div>
          <h1>Header one </h1>
        </div>
      </Wrapper>
    </div>
     
   
      {/* <h1 style={{headeroneStyle.color}}>Hello Header one</h1> */}
    </>
  )
}
  