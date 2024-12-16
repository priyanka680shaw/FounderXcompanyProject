import Card from "../maincard/card"
export default function SmallCard(){

    const  mainContainerStyle = {
        // backgroundColor : "red" , 
        width : "450px",
        height : "auto",
        margin : "10px"
    }

    const innerContainerStyle = {
        // backgroundColor : "green" , 
        // flexDirection : "column" ,
        // padding : "20px",
        justifyContain : "center"
    }

    const imageContainer ={
        width : "200px",
        // height : "250px"
    }

    const textContainer ={
        width : "100%",
        padding : "10px 0px"
    }

    return(
        <>
        <p>calling small cards</p>
                <Card btnTextLable={"Globle"} mainContainerStyle = {mainContainerStyle}  innerContainerStyle={innerContainerStyle} imageContainer = {imageContainer} textContainer ={textContainer}/>
        </>
    )
}