
export default function Wrapper({ children , style }){
  return(
    <>
        <div style={{...style , width : "95%"}}>
          {children}
        </div>
    </>
  )
}


