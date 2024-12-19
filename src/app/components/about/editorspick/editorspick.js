import Eitorpickscard from "./editorspickCard/editorpickscard"
import editorPicksStyle from "./editordpicsStyle.module.css"
export default  function EditorsPick(){

    const cardData = [
        {
            date : " Apr 25, 2024",
            heading : "Cryptocurrency : Understanding the Fundamentals of Di..."
        },
        {
            date : " Apr 25, 2024",
            heading : "Cryptocurrency : Understanding the Fundamentals of Di..."
        },
        {
            date : " Apr 25, 2024",
            heading : "Cryptocurrency : Understanding the Fundamentals of Di..."
        },
        {
            date : " Apr 25, 2024",
            heading : "Cryptocurrency : Understanding the Fundamentals of Di..."
        }
    ]
    return (
        <>
           <div className={editorPicksStyle.mainContainer}>
                <div className={editorPicksStyle.innercontainer}>
                    <div>
                        <h1 className={editorPicksStyle.h1}>Editor’s Picks</h1>
                        <hr className={editorPicksStyle.hr}/>
                    </div>
                    <div>
                        {
                            cardData.map((data , index)=>{
                                return(
                                    <Eitorpickscard key={index} heading ={data.heading} date ={data.date}/>
                                )
                            })
                        }
                    </div>
                </div>
           </div>
        </>
    )
}