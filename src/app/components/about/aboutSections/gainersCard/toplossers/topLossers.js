import GainersCard from "../gainersCard"
export default function TopLossers(){
    const containerStyle = {
        width : "100%",
        height  :"aouto"
    }
    return(
        <>
        <div style={{...containerStyle}}>
                        <GainersCard heading={"Top Losers"} b1={"NEFTY"} b2 ={"SENSEX"} p1 ={"Company"} p2= {"Price"} p3 ={"Change"} p4 = {"%Gain"} a ={"see all top Gainers"}/>
        </div>
            
        </>
    )
}