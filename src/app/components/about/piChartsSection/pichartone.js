'use client'
import pichartStyle from './pichartStyle.module.css'
import MarketDashboard from "../../pichart/pichart"
export default function Pichartone(){
  
    return(
        <>
            <div className= {`${pichartStyle.mainContainer} piChartMainContainer`}> 
               <div className= {`${pichartStyle.innerContainer} piChartinnerContainer`}>
               <MarketDashboard/>
               </div>
                
            </div>
        </>
    ) 
}