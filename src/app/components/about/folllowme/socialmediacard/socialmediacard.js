export default function SocialMediacard({bgColor  , logo , followers , socialIcon}){
    const containerStyle = {
        width :"200px",
        backgroundColor : bgColor , 
        padding  :"15px" ,
        display :"flex",
        justifyContent : "space-between", 
        margin : "10px",
        gap  : "12px",
        color : "white"
    }
    return(
        <>
            <div style={{...containerStyle}}>
                <a>{logo}</a>
                <p>{followers}</p>
                <p>{socialIcon}</p>
            </div>
        </>
    )
}