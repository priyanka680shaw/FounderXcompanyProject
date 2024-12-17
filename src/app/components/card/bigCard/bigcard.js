import Card from "../maincard/card"

export default function BigCard({image}){

    const  mainContainerStyle = {
        // backgroundColor : "red" , 
        width : "100%",
        height : "auto",
        // margin : "10px"
    }

    const innerContainerStyle = {
        // backgroundColor : "green" , 
        flexDirection : "column" ,
        // padding : "20px",
        justifyContain : "center"
    }

    const imageContainer ={
        width : "100%",
         height : "250px",
        //  border :"2px solid black"
    }

    const textContainer ={
        width : "100%",
        padding : "10px 0px"
    }
    
    const headingstyle = {
        fontSize : "24px"
    }
    return(
        <>
         <Card  mainContainerStyle = {mainContainerStyle}  innerContainerStyle={innerContainerStyle} imageContainer = {imageContainer} textContainer ={textContainer} headingstyle={headingstyle} btnText = {"News"} heading={"Budget 2024 : Insights into Fiscal Projections a..."} para1={"May 04, 2024"} para2={"US Presidential Election 2024 : Predictions and Projections for the Next Leader"} image={image}/>

         {/* <Card  mainContainerStyle = {mainContainerStyle}  innerContainerStyle={innerContainerStyle} imageContainer = {imageContainer} textContainer ={textContainer} headingstyle={headingstyle} btnText = {"Global"} heading={"Budget 2024 : Insights into Fiscal Projections a..."}  para2={"US Presidential Election 2024 : Predictions and Projections for the Next Leader"}/> */}
      
        </>
    )
}