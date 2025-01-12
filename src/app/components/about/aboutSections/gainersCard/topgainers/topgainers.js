import GainersCard from "../gainersCard"
import topGainStyle from "./topGainer.module.css"
export default function TopGainers(){
    const containerStyle = {
        width : "50%",
        height  :"aouto"
    }
    return(
        <>
        <div className={`${topGainStyle.mainContainer} topGainMainContainer`}>
            <GainersCard heading={"Top Gainers"} b1={"NEFTY"} b2 ={"SENSEX"} p1 ={"Company"} p2= {"Price"} p3 ={"Change"} p4 = {"%Gain"} a={"see all top Gainers"} />
        </div>
            
        </>
    )
}