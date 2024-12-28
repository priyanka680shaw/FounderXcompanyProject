import currencyStyle from "./currencieStyle.module.css"
export default function Currencies(){
    const mainContainer = {
      width  : "100%" ,
      // border  :"2px solid black",
      padding  :"10px",
      boxShadow : "0px 0px 10px 2px gray"
    }
    return(
        <>
        
       <div style={mainContainer}>

       <table className={currencyStyle.currencyTable}>
            <caption className={currencyStyle.caption}>Currencies</caption>
  <thead>
    <tr>
    <th className={currencyStyle.th}></th>
      <th className={currencyStyle.th}>Name</th>
      <th className={currencyStyle.th} >Price</th>
      <th className={currencyStyle.th} >Open</th>
      <th className={currencyStyle.th} >High</th>
      <th className={currencyStyle.th} >Low</th>
      <th className={currencyStyle.th} >Close</th>
      <th className={currencyStyle.th} >Chg</th>
      <th className={currencyStyle.th} >Chg%</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td className={currencyStyle.td} >logo</td>
    <th className={currencyStyle.th}>USD/INR</th>
      <td className={currencyStyle.td} >0.00</td>
      <td className={currencyStyle.td} >0.00</td>
      <td className={currencyStyle.td} >0.00</td>
      <td className={currencyStyle.td} >0.00</td>
      <td className={currencyStyle.td} >0.00</td>
      <td className={currencyStyle.td} >-</td>
      <td className={currencyStyle.td} >-</td>
    </tr>
    <tr>
    <td className={currencyStyle.td} >logo</td>
    <th className={currencyStyle.th}>GBP/INR</th>
      <td className={currencyStyle.td} >0.00</td>
      <td className={currencyStyle.td} >0.00</td>
      <td className={currencyStyle.td} >0.00</td>
      <td className={currencyStyle.td} >0.00</td>
      <td className={currencyStyle.td} >0.00</td>
      <td className={currencyStyle.td} >-</td>
      <td className={currencyStyle.td} >-</td>
    </tr>
    <tr>
    <td className={currencyStyle.td} >logo</td>
    <th className={currencyStyle.th}>EUR/INR</th>
      <td className={currencyStyle.td} >0.00</td>
      <td className={currencyStyle.td} >0.00</td>
      <td className={currencyStyle.td} >0.00</td>
      <td className={currencyStyle.td} >0.00</td>
      <td className={currencyStyle.td} >0.00</td>
      <td className={currencyStyle.td} >-</td>
      <td className={currencyStyle.td} >-</td>
    </tr>
    <tr>
    <td className={currencyStyle.td} >logo</td>
    <th className={currencyStyle.th}>JPY/INR</th>
      <td className={currencyStyle.td} >0.00</td>
      <td className={currencyStyle.td} >0.00</td>
      <td className={currencyStyle.td} >0.00</td>
      <td className={currencyStyle.td} >0.00</td>
      <td className={currencyStyle.td} >0.00</td>
      <td className={currencyStyle.td} >-</td>
      <td className={currencyStyle.td} >-</td>
    </tr>
  </tbody>
        </table>

       </div>

        </>
    )
}