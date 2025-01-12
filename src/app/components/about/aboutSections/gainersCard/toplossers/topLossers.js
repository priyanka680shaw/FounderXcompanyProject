import GainersCard from "../gainersCard"
import topLossStyle from "./topLossess.module.css"
export default function TopLossers(){
    
    return(
        <>
        <div className={`${topLossStyle.mainContainer} topLossMainContainer`}>
          <GainersCard heading={"Top Losers"} b1={"NEFTY"} b2 ={"SENSEX"} p1 ={"Company"} p2= {"Price"} p3 ={"Change"} p4 = {"%Gain"} a ={"see all top Gainers"}/>
        </div>
            
        </>
    )
}