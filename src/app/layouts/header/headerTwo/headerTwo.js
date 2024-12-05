import Wrapper from "../../wrapper/wrapper";
import headerTwoStyle from './headerTwo.module.css';
import logoImage from "../../../images/logo.png"
import Image from "next/image";
//importing search icon from react icons
import { CiSearch } from "react-icons/ci";
export default function HeaderTwo() {

    return (
        <>
            <Wrapper>
            <div className={headerTwoStyle.mainContainer}>
                    <div className="logo">
                        <Image src={logoImage} alt="founderlogo" style={{cursor : "pointer"}}></Image>
                    </div>
                    <div className={headerTwoStyle.searchBar}>
                        <input type="text" placeholder="Search  Stock , Quotes , News , Mutual Funds and more ..." className={headerTwoStyle.searchInput}/>
                        <CiSearch style={{ strokeWidth : 1 ,  fontWeight: "bolder", fontSize: "20px"}} />
                    </div>
                    <div className="userAccess">
                        <button className= {headerTwoStyle.btnStyle} style={{border : "2px solid black" ,  backgroundColor : "black"}}>Login</button>
                        <button className= {headerTwoStyle.btnStyle} style={{border : "2px solid blue" , backgroundColor : "blue"}}>Singup</button>
                        <button className= {headerTwoStyle.btnStyle} style={{border : "2px solid rgb(216,9,27)" ,  backgroundColor : "rgb(216,9,27)"}}>Suscribe</button>
                    </div>
            </div>           
            <hr style={{ border: "1px solid rgb(218, 214, 214)", margin: "0px" , width : "100%" }} />
            <hr style={{ border: "1px solid rgb(218, 214, 214)", margin: "2px 0px" , width : "100%" }} />
        </Wrapper>
       
        </>
        
    );
}