'use client'

import MarketDashboard from "../../pichart/pichart"
export default function Pichartone(){
    const mainContainer = {
        width : "100%" , 
        // border : "2px solid red",
        padding  :"10px"
    }

    const innerContainer = {
        width : "100%" , 
        boxShadow :  "0px 0px 10px 2px gray ",
        padding  :"15px",
        // margin :  "10px"
    }
    return(
        <>
            <div style={mainContainer}> 
               <div style={innerContainer}>
               <MarketDashboard/>
               </div>
                
            </div>
        </>
    ) 
}