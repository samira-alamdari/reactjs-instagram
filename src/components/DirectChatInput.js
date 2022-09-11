import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ACTION_MAKE_CHAT} from "../redux/slices/userSlice"
import {useParams} from "react-router-dom";

const DirectChatInput=()=>{
    const params=useParams();
    const dispatcher=useDispatch() ;
    const[message,setMessage]=useState('');
    const reset = () => setMessage('');
    // const[content,setContent]=useState([{id:}]);
    const onInputChange=(e)=>{
        setMessage(e.target.value);
    }
    const onInputSubmit=(e)=>{
        e.preventDefault();
        if (message.trim()){
            dispatcher(ACTION_MAKE_CHAT({id: params.direct_id, msg:message.trim()}));
        }
        reset();
    }
    return(
        <form className="DirectChatInput">
            <input type="text" value={message} placeholder="Message..." onChange={(e)=>onInputChange(e)}/>
            <input type="submit" value="send" onClick={onInputSubmit}/>
        </form>
    )
}
export default DirectChatInput;