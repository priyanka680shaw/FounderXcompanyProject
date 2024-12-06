import headeroneStyle from "./headerOneStle.module.css"
import Wrapper from "../../wrapper/wrapper"
import headerOneStyle from "./headerOneStle.module.css"
export default function HeaderOne(){

    const headerData = ["data1" , "data2" , "data3" , "data4" , "data4" , "data5"]

  return(
    <>
    <marquee >
    <div className = {headerOneStyle.mainContainner}>
        {
          headerData.map((items , index)=>{
             return(
              <p key={index} style={{color :"red"}}>{items}</p>
             )
          })
        }
      </div>

    </marquee>
    
      <hr style={{ border: "1px solid rgb(218, 214, 214)", margin: "2px 0px" , width : "100%" }} />    
    </>
  )
}
  