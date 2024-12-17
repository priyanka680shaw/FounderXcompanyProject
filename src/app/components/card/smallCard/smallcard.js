import Card from "../maincard/card"
export default function SmallCard({heading ,para2 , image , flexDirection , mainContainerWidth , imageContainerWidth}){

    const  mainContainerStyle = {
        width : mainContainerWidth ?  mainContainerWidth : "400px",
        height : "auto",
        marginBottom : "18px"
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
        padding : "10px 10px"
    }

    return(
        <>
            <Card  mainContainerStyle = {mainContainerStyle}  innerContainerStyle={innerContainerStyle} imageContainer = {imageContainer} textContainer ={textContainer} heading={heading} para2={para2} image={image}/>
            </>
    )
}