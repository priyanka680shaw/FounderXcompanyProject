import navbarStyle from "./navbarStyle.module.css"
export default function Navbar(){
    return(
        <>
            <div className={navbarStyle.mainContainer}>
                <div className={navbarStyle.innerContainer}>
                    <ul className= {navbarStyle.ul}>
                        <li className= {navbarStyle.li}>all</li>
                        <li className= {navbarStyle.li}>aews</li>
                        <li className= {navbarStyle.li}>about</li>
                        <li className= {navbarStyle.li}>products</li>
                        <li className= {navbarStyle.li}>market</li>
                        <li className= {navbarStyle.li}>finance</li>
                        <li className= {navbarStyle.li}>globle</li>
                        <li className= {navbarStyle.li}>business</li>
                        <li className= {navbarStyle.li}>commodities</li>
                        <li className= {navbarStyle.li}>stock</li>
                        <li className= {navbarStyle.li}>currencies</li>
                    </ul>
                </div>
            </div>
        </>
    )
}