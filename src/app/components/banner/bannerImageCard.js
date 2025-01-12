'use client'
import { useEffect , useState } from "react";
import Image from "next/image"
import bannerStyle from "./banner.module.css"
// import banner1 from "../../images/banner1.webp"
export default function BannerImageCard({height , image , headingText , btnColor , buttonText , fontSize}){


    const [responsiveFontSize, setResponsiveFontSize] = useState(fontSize);

    useEffect(() => {
      const updateFontSize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 321) {
          setResponsiveFontSize("4px"); // Adjust font size for small screens
        } else if (screenWidth <= 768) {
          setResponsiveFontSize("20px"); // Adjust font size for medium screens
        } 
       else if (screenWidth <= 1024) {
        setResponsiveFontSize("20px"); // Adjust font size for medium screens
      }
      else if (screenWidth <= 1440) {
        setResponsiveFontSize("30px"); // Adjust font size for medium screens
      }else {
          setResponsiveFontSize(fontSize); // Default font size for larger screens
        }
      };
  
      updateFontSize(); // Set initial font size
      window.addEventListener("resize", updateFontSize); // Update on resize
  
      return () => {
        window.removeEventListener("resize", updateFontSize); // Cleanup
      };
    }, [fontSize]);
  









    return(
        <>
            <figure style={{position : "relative"}}>
                        <div style={{ height: height }} className= {`${bannerStyle.imgContainer} bannerImageConztiner`}>
                            <Image
                                src={image}
                                alt="Image"
                                // fill
                                className= {bannerStyle.mainImage}/>
                            <div style={{position : "absolute" , color : "white" , bottom  :"30px" , left : "30px"}}>
                                <button className = {bannerStyle.buttonType} style={{backgroundColor : btnColor}}>{buttonText}</button>
                                <h1 className={bannerStyle.heading} style={{fontSize : responsiveFontSize}}>{headingText}</h1>
                            </div>
                        </div>
                      
            </figure>
        </>
    )
}