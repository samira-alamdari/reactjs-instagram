import "../styles/DirectChat.scss"
import {ReactComponent as Inbox} from "../images/inbox.svg";
import DirectLayout from "../containers/directLayout";
import {Link} from "react-router-dom";
const InitialDirect=()=>{
    return(
        <DirectLayout>
            <div className="initialDirect">
                <Inbox className="icon"></Inbox>
                <p>Your Messages</p>
                <span>Send private photos and messages to a friend or group.</span>
                <Link to='/direct/0' className="init-send">
                    Send Message
                </Link>
            </div>
        </DirectLayout>
    )
}
export default InitialDirect;