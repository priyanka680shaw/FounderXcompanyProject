import Card from "../maincard/card"
import smallCardStyle from "./smallCardStyle.module.css"
export default function SmallCard({heading ,para2 , image , flexDirection , mainContainerWidth , imageContainerWidth , btnTextLable , cards}){

    const  mainContainerStyle = {
        width : mainContainerWidth ?  mainContainerWidth : "100%",
        height : "auto",
        marginBottom : flexDirection == "column" ? "0px" :  "8px",
        // border : "2px solid black"
    }

    const innerContainerStyle = {
        justifyContain : "center",
        alignItems: "center",
        flexDirection : flexDirection,
    }

    const imageContainer ={
        width  : imageContainerWidth ?  imageContainerWidth : "150px",
    }

    const textContainer ={
        width : "100%",
        padding : "5px 0px"
    }

    return(
        <>
            <Card  mainContainerStyle = {mainContainerStyle}  innerContainerStyle={innerContainerStyle}  textContainer ={textContainer} heading={heading} para2={para2} image={image} btnTextLable = {btnTextLable} />
            </>
    )
}





