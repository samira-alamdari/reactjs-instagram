import {useSelector} from "react-redux";

const DirectChatMessage=()=>{
    const {chat}=useSelector(state=>state.chat);
    const {instaChat}=useSelector(state=>state.chat);
    console.log(chat);
    console.log(instaChat);

    return(
        <div className="DirectChatMessage">
            {
                chat.map((item,index)=>{
                    return(
                        <div className="myMsg"><pre>{item}</pre></div>
                    )
                })
            }
            {
                <div className="instaMsg"><span>{instaChat}</span></div>
            }
        </div>
    )
}
export default DirectChatMessage;


