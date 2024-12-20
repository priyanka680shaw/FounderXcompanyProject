import gainersCardStyle from "./gainersStyle.module.css"
export default function GainersCard(){
    return(
        <>
            <div className={gainersCardStyle.mainContainer}>
                <div className={gainersCardStyle.innerContainer }>
                    <h1 className={gainersCardStyle.h1} >Top Gainers</h1>
                    <div className={gainersCardStyle.button1}>
                        <div style={{backgroundColor : "#EE6E25" }} className= {gainersCardStyle.btn1}>NEFTY</div>
                        <div style={{color : "gray"}} className= {gainersCardStyle.btn1}>SENSEX</div>
                    </div>
                    <div className={gainersCardStyle.button2}>
                        <p className={gainersCardStyle}>Company</p>
                        <p>Price</p>  
                        <p>Change</p>
                        <p>%Gain</p>
                    </div>
                    <div className={gainersCardStyle.aTag}>
                        <a>see all top Gainers</a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}