import cardStyle from "./editordPickCardStyle.module.css"

const Eitorpickscard = ({heading , date}) => {
  return (
   <>
     <div className={cardStyle.mainContainer}>
      <p className={cardStyle.p}><span className= {cardStyle.founderX}>Founder X -  </span>{date}</p>
        <h1 className={cardStyle.h1}>{heading}</h1>
    </div>
    <hr/>
   </>
  )
}

export default Eitorpickscard
