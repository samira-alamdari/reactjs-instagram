import "../styles/direct.scss";
import DirectChat from "./DirectChat";
import DirectUsers from "./DirectUsers";

const Direct=()=>{
    return(
        <div className="Direct">
            <div className="directUsers">
                <DirectUsers/>
            </div>
            <DirectChat/>
        </div>
    )
}
export default Direct;