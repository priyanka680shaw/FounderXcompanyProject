
import React from "react";

export default function SocialMediacard({ logo, followers, socialIcon, bgColor }) {
    const containerStyle = {
                width :"200px",
                backgroundColor : bgColor , 
                padding  :"15px" ,
                display :"flex",
                justifyContent : "center",
                alignItems :  "center" ,
                 margin : "5px",
                gap  : "12px",
                color : "white",
                borderRadius : "10px"
                // border : "2px solid green"
            }
    return (
        <div style={containerStyle}>
            <div style={{ fontSize: "36px" }}>
                {React.createElement(logo)}  {/* Dynamically render the icon */}
            </div>
            <h3>{socialIcon}</h3>
            {followers && <p>{followers}</p>}
        </div>
    );
}
