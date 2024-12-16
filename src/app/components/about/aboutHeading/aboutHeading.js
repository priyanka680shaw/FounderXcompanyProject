import aboutHeadingStyle from  "./aboutHeadStyle.module.css"
export default function AboutHeading({heading}){
    return(
        <>
            <div className={aboutHeadingStyle.container}> 
                <h1 className={aboutHeadingStyle.h1}>{heading}</h1>
                <div className={aboutHeadingStyle.bullet}></div>
               <div className={aboutHeadingStyle.hrContainer}>
               <hr className={aboutHeadingStyle.hr}/>
               <hr className={aboutHeadingStyle.hr}/>
               </div>
            </div>
        </> 
    )
}