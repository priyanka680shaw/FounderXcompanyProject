'use client'
import mobileMenuStyle from "./mobileMenu.module.css"
import { CiSearch} from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import logo from "../../images/mobileLogo.png"
import Image from "next/image";
export default function Mobilemenu({setMobileMenu , mobileMenu}){
    
    function closeSideMenuBar(){
        setMobileMenu((prev)=>!prev)
        mobileMenu
    }
    return(
       <>
        <div className= {`${mobileMenuStyle.mainContainer}`}>
                     <div className={`${mobileMenuStyle.logoContainer} ` }>
                        
                     <Image src={logo} alt="mobileLogo" className={`${mobileMenuStyle.mobileLogo} mobileLogo`}></Image>
                        
                        <RxCross2 className={`${mobileMenuStyle.crossButton} crossButton `} onClick={closeSideMenuBar} />
                    </div>
                    <div className= {`${mobileMenuStyle.searchBar}  `}>
                        <input type="text" placeholder="Search  Stock , Quotes , News , Mutual Funds and more ..." className={`${mobileMenuStyle.searchInput} searchInput`}/>
                        <CiSearch style={{ strokeWidth : 1 ,  fontWeight: "bolder", fontSize: "25px"}}  className="searchBarIcon"/>
                    </div>
                    <div className= {`${mobileMenuStyle.accessButtons}`}>
                        <button className= {`${mobileMenuStyle.btnStyle} accessButton`} style={{border : "2px solid black" ,  backgroundColor : "black"}}>Login</button>
                        <button className= {`${mobileMenuStyle.btnStyle} accessButton`} style={{border : "2px solid blue" , backgroundColor : "blue"}}>Singup</button>
                        <button className= {`${mobileMenuStyle.btnStyle} accessButton`} style={{border : "2px solid rgb(216,9,27)" ,  backgroundColor : "rgb(216,9,27)"}}>Suscribe</button>
                    </div>
        </div>
       </>
    )
}  