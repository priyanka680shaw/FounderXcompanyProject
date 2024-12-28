'use client'
import SocialMediacard from "../socialmediacard/socialmediacard"
import AboutHeading from "../aboutHeading/aboutHeading"
//icons 
import { FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube, FaTiktok, FaTelegram } from 'react-icons/fa';

export default function FollowMe(){
    const containerStyle = {
        width : "100%",
        height :"auto" ,
        // border : "2px solid green",
    }

    const cardContainer = {
        width : "100%" , 
        height : "auto" , 
        display  :"flex" ,
        flexWrap : "wrap",
        justifyContent : "center"
    }



    
    const socialmediaData = [
        {
            logo: FaFacebookSquare,
            followers: "12.9K",
            socialIcon: "Facebook",
            bgColor: "#1A6DD5",
        },
        {
            logo: FaTwitter,  // Use the correct component
            followers: "12.9K",
            socialIcon: "Twitter",
            bgColor: "#57ACED",
        },
        {
            logo: FaInstagram,  // Use the correct component
            followers: "12.9K",
            socialIcon: "Instagram",
            bgColor: "#C23382",
        },
        {
            logo: FaYoutube,  // Use the correct component
            followers: "12.9K",
            socialIcon: "YouTube",
            bgColor: "#FD0002",
        },
        {
            logo: FaTiktok,  // Use the correct component
            socialIcon: "TikTok",
            bgColor: "#FE2B54",
        },
        {
            logo: FaTelegram,  // Use the correct component
            followers: "12.9K",
            socialIcon: "Telegram",
            bgColor: "#0288C7",
        },
    ];
    
    return(
        <>
            <div >
                <div style = {{...containerStyle}} >
                    <AboutHeading heading = {"Follow Us"} fontSize={"24px"} bullet={"true"}/>
                    <div style={{...cardContainer}}>
                        {
                            socialmediaData.map((data , index)=>{
                                return(
                                    <SocialMediacard key ={index} logo={data.logo}   followers={data.followers} socialIcon = {data.socialIcon} bgColor={data.bgColor}/>
                                )
                            })
                        }
                    </div>
                   
                </div>

            </div>
        </>
    )
}