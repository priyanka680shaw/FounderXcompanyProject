import GainersCard from "../gainersCard"
export default function TopGainers(){
    const containerStyle = {
        width : "100%",
        height  :"aouto"
    }
    return(
        <>
        <div style={{...containerStyle}}>
            <GainersCard heading={"Top Gainers"} b1={"NEFTY"} b2 ={"SENSEX"} p1 ={"Company"} p2= {"Price"} p3 ={"Change"} p4 = {"%Gain"} a={"see all top Gainers"} />
        </div>
            
        </>
    )
}