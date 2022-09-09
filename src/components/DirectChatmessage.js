import {useSelector} from "react-redux";
import {Fragment} from "react";

const DirectChatMessage=()=>{
    const {chat}=useSelector(state=>state.chat);
    const {instaChat}=useSelector(state=>state.chat);
    return(
        <div className="DirectChatMessage">
            {
                chat.map((item,index)=>{
                    return(
                        <Fragment key={index}>
                            <div className="myMsg"><pre>{item}</pre></div>
                            <div className="instaMsg"><span>{instaChat}</span></div>
                        </Fragment>
                    )
                })
            }
        </div>
    )
}
export default DirectChatMessage;


