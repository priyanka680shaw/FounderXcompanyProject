import EditorsPick from "../editorspick/editorspick"
import FollowMe from "../folllowme/followme"
import Mostpopular from "../mostPopular/mostpopular"
import CardsNews from "../cardsNews/cardsnews"
import TopGainers from "../aboutSections/gainersCard/topgainers/topgainers"
import TopLossers from "../aboutSections/gainersCard/toplossers/topLossers"
export default function RightSideBar(){
    const containerStyle = {
        display  :"flex",
        // justifyContent : "",
        alignItems  : "center",
        border  :"2px solid black",
        flexDirection : "column",
        height : "auto",
        gap  : "20px"
    }
    return(


        <>
             <div className=" w-[35%] h-[auto]" style={{...containerStyle}}>
                <EditorsPick/>
                <FollowMe/>
                <TopGainers/>
                <TopLossers/>
                <CardsNews/>
                <Mostpopular/>
                
                
             </div>
        </>
    )
}