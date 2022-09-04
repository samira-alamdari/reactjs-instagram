import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ACTION_MAKE_CHAT , ACTION_MAKE_FAKE} from "../redux/slices/userSlice"

const DirectChatInput=()=>{
    const dispatcher=useDispatch() ;
    const[message,setMessage]=useState('');
    const reset = () => setMessage('');
    const onInputChange=(e)=>{
        setMessage(e.target.value);
    }
    const onInputSubmit=(e)=>{
        e.preventDefault();
        // console.log(message);
        if (message.trim()){
            dispatcher(ACTION_MAKE_CHAT(message.trim()));
        }
        reset();

        dispatcher(ACTION_MAKE_FAKE('samira'))
    }
    return(
        <form className="DirectChatInput">
            <input type="text" value={message} placeholder="Message..." onChange={(e)=>onInputChange(e)}/>
            <input type="submit" value="send" onClick={onInputSubmit}/>
        </form>
    )
}
export default DirectChatInput;