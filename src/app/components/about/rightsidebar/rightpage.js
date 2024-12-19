import EditorsPick from "../editorspick/editorspick"
import FollowMe from "../folllowme/followme"
import Mostpopular from "../mostPopular/mostpopular"
export default function RightSideBar(){
    return(
        <>
             <div className=" w-[35%] h-[auto]" style={{border : "2px solid black"}}>
                <EditorsPick/>
                <FollowMe/>
                <Mostpopular/>
             </div>
        </>
    )
}