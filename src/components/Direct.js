import "../styles/direct.scss";
import DirectChat from "./DirectChat";
import DirectUsers from "./DirectUsers";
import DirectLayout from "../containers/directLayout";
import DirectChatMessage from "./DirectChatmessage";
import {useParams} from "react-router-dom";

const Direct=()=>{
    const params=useParams();
    console.log(params);
    return(
        // <div className="Direct">
        //     <div className="directUsers">
        //         <DirectUsers/>
        //     </div>
        //     <DirectChat/>
        // </div>

        <DirectLayout><DirectChatMessage/></DirectLayout>
        // <h1>{params.direct_id}</h1>
    )
}
export default Direct;