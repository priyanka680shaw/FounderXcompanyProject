
export default function Wrapper({ children , style }){
  return(
    <>
        <div style={{...style , width : "85%"}}>
          {children}
        </div>
    </>
  )
}


