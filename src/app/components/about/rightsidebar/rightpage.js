import EditorsPick from "../editorspick/editorspick"
import FollowMe from "../folllowme/followme"
import Mostpopular from "../mostPopular/mostpopular"
import CardsNews from "../cardsNews/cardsnews"
import TopGainers from "../aboutSections/gainersCard/topgainers/topgainers"
import TopLossers from "../aboutSections/gainersCard/toplossers/topLossers"
import Navbar from "../aboutSections/navbar/nanvbar"
import Pichartone from "../piChartsSection/pichartone"
import rightSideBarStyle from "./rightSideBar.module.css"

export default function RightSideBar(){
    
    return(


        <>
             <div className= {rightSideBarStyle.mainContainer}>
                <Navbar/>
                <Pichartone/>
                <EditorsPick/>
                <FollowMe/>
                <TopGainers/>
                <TopLossers/>
                <CardsNews/>
                <Pichartone/>
                <Mostpopular/>
                
                
             </div>
        </>
    )
}