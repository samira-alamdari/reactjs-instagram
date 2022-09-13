import "../styles/direct.scss";
import DirectChat from "./DirectChat";
import DirectLayout from "../containers/directLayout";
import DirectChatMessage from "./DirectChatmessage";
import {useParams} from "react-router-dom";
import DirectChatHeader from "./DirectChatHeader";
import DirectChatInput from "./DirectChatInput";

const Direct=()=>{
    const params=useParams();
    console.log(params);
    return(
        <DirectLayout>
            <DirectChatHeader/>
            <DirectChatMessage/>
            <DirectChatInput/>
        </DirectLayout>

    )
}
export default Direct;