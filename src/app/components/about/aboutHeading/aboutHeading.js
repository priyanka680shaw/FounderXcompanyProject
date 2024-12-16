import aboutHeadingStyle from  "./aboutHeadStyle.module.css"
export default function AboutHeading(){
    return(
        <>
            <div>
                <h1 className={aboutHeadingStyle.h1}>News</h1>
                <hr className={aboutHeadingStyle.hr}/>
                <hr className={aboutHeadingStyle.hr}/>
            </div>
        </> 
    )
}