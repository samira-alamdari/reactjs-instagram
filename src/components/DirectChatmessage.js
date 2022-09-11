import {useSelector} from "react-redux";
import {Fragment} from "react";
import {useParams} from "react-router-dom";

const DirectChatMessage=()=>{
    const params=useParams();
    const {chat}=useSelector(state=>state.chat);
    const {instaChat}=useSelector(state=>state.chat);
    console.log(chat.filter(message=>message.id==params.direct_id));
    return(
        <div className="DirectChatMessage">
            {
                chat.filter(message=>message.id==params.direct_id).map((item,index)=>{
                    return(
                        <Fragment key={index}>
                            <div className="myMsg"><pre>{item.msg}</pre></div>
                            <div className="instaMsg"><span>{instaChat}</span></div>
                        </Fragment>
                    )
                })
            }
        </div>
    )
}
export default DirectChatMessage;


