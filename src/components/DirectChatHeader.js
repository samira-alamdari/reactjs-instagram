import "../styles/DirectChatHeader.scss";
import {ReactComponent as AudioCall} from "../images/audioCall.svg";
import {ReactComponent as VideoCall} from "../images/videoCall.svg";
import {ReactComponent as Details} from "../images/details.svg";
const DirectChatHeader=()=>{
    return(
        <div className="directChatHeader">
            <div className="directChatHeader-image"><img src="" alt=""/></div>
            <div className="icons">
                <AudioCall/>
                <VideoCall/>
                <Details/>
            </div>
        </div>
    )
}
export default DirectChatHeader;