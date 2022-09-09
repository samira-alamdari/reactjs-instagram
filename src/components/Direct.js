import "../styles/direct.scss";
import DirectChat from "./DirectChat";
import DirectUsers from "./DirectUsers";
import directLayout from "../containers/directLayout";
import DirectChatMessage from "./DirectChatmessage";

const Direct=()=>{
    return(
        <div className="Direct">
            <div className="directUsers">
                <DirectUsers/>
            </div>
            <DirectChat/>
        </div>
        // <directLayout><DirectChatMessage/></directLayout>
    )
}
export default Direct;