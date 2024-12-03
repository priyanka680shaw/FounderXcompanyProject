import Wrapper from "../../wrapper/wrapper";
import headerTwoStyle from './headerTwo.module.css';
//importing search icon from react icons
import { CiSearch } from "react-icons/ci";
export default function HeaderTwo() {

    const menuLists = ["Home" , "Coronavireus" , "News" , "markets" , "Mutual Funds" , "Commodities" , "Insurance" , "Video" ,  "Podcast" , "Personal Finance" , "Portfolio" , "Forum" , "Be a Pro" , "Earth 360" , "Easybiz" , "Live TV"]
    return (
        <Wrapper style={{ border: "2px solid green" , margin : "10px" }}>
            <div className={headerTwoStyle.mainContainer}>
                <div className={headerTwoStyle.logoSearchBar}>
                    <div className="logo"><h1>FounderXLOgo</h1></div>
                    <div className={headerTwoStyle.searchBar}>
                        <CiSearch className=""/>
                        <input type="text" placeholder="search ..." className={headerTwoStyle.searchInput}/>
                    </div>
                </div>
                <div className="menu">
                    <ul className={headerTwoStyle.menuListItems}>
                        {
                           menuLists.map((items , index)=>{
                            return(
                                <li key={index} className= {headerTwoStyle.menuListItemsli}>{items}</li>
                            )
                           })
                           
                        }
                    </ul>   
                </div>
            </div>
        </Wrapper>
    );
}