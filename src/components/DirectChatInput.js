import {useState} from "react";
import {useDispatch} from "react-redux";
import {ACTION_MAKE_CHAT} from "../redux/slices/userSlice"

const DirectChatInput=()=>{
    const dispatcher=useDispatch() ;
    const[message,setMessage]=useState('');
    const reset = () => setMessage('');
    const onInputChange=(e)=>{
        setMessage(e.target.value);
    }
    const onInputSubmit=(e)=>{
        e.preventDefault();
        if (message.trim()){
            dispatcher(ACTION_MAKE_CHAT(message.trim()));
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