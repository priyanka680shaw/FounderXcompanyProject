import GainersCard from "../gainersCard"
export default function TopGainers(){
    const containerStyle = {
        width : "100%",
        height  :"aouto"
    }
    return(
        <>
        <div style={{...containerStyle}}>
            <GainersCard/>
        </div>
            
        </>
    )
}