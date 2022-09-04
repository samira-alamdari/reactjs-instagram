import "../styles/DirectChat.scss";
import DirectChatHeader from "./DirectChatHeader"
import DirectChatMessage from "./DirectChatmessage";
import DirectChatInput from "./DirectChatInput";
const DirectChat=()=>{
    return(
        <div className="directChat">
            <DirectChatHeader/>
            <DirectChatMessage/>
            <DirectChatInput/>
        </div>
    )
}
export default DirectChat;