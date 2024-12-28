import EditorsPick from "../editorspick/editorspick"
import FollowMe from "../folllowme/followme"
import Mostpopular from "../mostPopular/mostpopular"
import CardsNews from "../cardsNews/cardsnews"
import TopGainers from "../aboutSections/gainersCard/topgainers/topgainers"
import TopLossers from "../aboutSections/gainersCard/toplossers/topLossers"
import Navbar from "../aboutSections/navbar/nanvbar"
import Pichartone from "../piChartsSection/pichartone"

export default function RightSideBar(){
    const containerStyle = {
        display  :"flex",
        alignItems  : "center",
        // border  :"2px solid black",
        flexDirection : "column",
        height : "auto",
        gap  : "15px",
        padding : "0px "
    }
    return(


        <>
             <div className=" w-[35%] h-[auto]" style={{...containerStyle}}>
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