import Wrapper from "../../wrapper/wrapper";
import headerTwoStyle from './headerTwo.module.css';
import logoImage from "../../../images/logo.png"
import mobileLogo from  "../../../images/mobileLogo.png"
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
//importing search icon from react icons
import { CiSearch } from "react-icons/ci";
export default function HeaderTwo() {

    return (
        <>
            <Wrapper>
            <div className={`${headerTwoStyle.mainContainer} headerTwoStyleMainContainer`}>
                    <div className={`${headerTwoStyle.logoContainer} headerTwoStyleLogo` }>
                        <Image src={mobileLogo} alt="mobileLogo" className={`${headerTwoStyle.mobileLogo} mobileLogo`}></Image>
                        <Image src={logoImage} alt="founderlogo" style={{cursor : "pointer"}} className= {`${headerTwoStyle.desktopLogo} desktopLogo`}></Image>
                        {/* <TiThMenu className={`${headerTwoStyle.hamburg} headerTwoStyleHamburg `}/> */}
                    </div>
                    <div className= {`${headerTwoStyle.searchBar} headerTwoStyleSearchBar `}>
                        <input type="text" placeholder="Search  Stock , Quotes , News , Mutual Funds and more ..." className={`${headerTwoStyle.searchInput} headerTwoStyleSearchInput`}/>
                        <CiSearch style={{ strokeWidth : 1 ,  fontWeight: "bolder", fontSize: "25px"}}  className="searchBarIcon"/>
                    </div>
                    <div className="userAccess">
                        <button className= {`${headerTwoStyle.btnStyle} headerTwoSBtnStyle`} style={{border : "2px solid black" ,  backgroundColor : "black"}}>Login</button>
                        <button className= {`${headerTwoStyle.btnStyle} headerTwoSBtnStyle`} style={{border : "2px solid blue" , backgroundColor : "blue"}}>Singup</button>
                        <button className= {`${headerTwoStyle.btnStyle} headerTwoSBtnStyle`} style={{border : "2px solid rgb(216,9,27)" ,  backgroundColor : "rgb(216,9,27)"}}>Suscribe</button>
                    </div>
            </div>           
            <hr style={{ border: "1px solid rgb(218, 214, 214)", margin: "0px" , width : "100%" }} />
            <hr style={{ border: "1px solid rgb(218, 214, 214)", margin: "2px 0px" , width : "100%" }} />
        </Wrapper>
       
        </>
        
    );
}