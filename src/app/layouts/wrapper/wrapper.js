import wrapperStyle from "./wrapper.module.css"
export default function Wrapper({ children , style }){
  return(
    <>
        <div style={{...style }} className= {`${wrapperStyle.mainContainer} wrapperMainContainer`}>
          {children}
        </div>
    </>
  )
}


