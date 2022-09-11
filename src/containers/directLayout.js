import DirectUsers from "../components/DirectUsers";
import DirectChatHeader from "../components/DirectChatHeader";
import DirectChatInput from "../components/DirectChatInput";


const DirectLayout = ({children}) => {
    return (
        <div className="Direct">
            <div className="directUsers">
                <DirectUsers/>
            </div>
            <div className="directChat">
                <DirectChatHeader/>
                {children}
                <DirectChatInput/>
            </div>
        </div>
    )
}

export default DirectLayout;