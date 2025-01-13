import gainersCardStyle from "./gainersStyle.module.css"
export default function GainersCard({heading , b1 ,b2 ,p1,p2,p3,p4,a}){
    return(
        <>
            <div className={`${gainersCardStyle.mainContainer} gainersCardMainContainer`}>
                <div className={`${gainersCardStyle.innerContainer} gainersCardsInnerContainer`}>
                    <h1 className={gainersCardStyle.h1} >{heading}</h1>
                    <div className={`${gainersCardStyle.button1} gainersCardsButton1`}>
                        <div style={{backgroundColor : "#EE6E25" }} className= {`${gainersCardStyle.btn1} gainersCardSBtn1`}>{b1}</div>
                        <div style={{color : "gray"}} className= {`${gainersCardStyle.btn1} gainersCardSBtn1`}>{b2}</div>
                    </div>
                    <div className= {`${gainersCardStyle.button2} gainersCardButton2`}>
                        <p className={gainersCardStyle}>{p1}</p>
                        <p>{p2}</p>  
                        <p>{p3}</p>
                        <p>{p4}</p>
                    </div>
                    <div className={gainersCardStyle.aTag}>
                        <a>{a}</a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}