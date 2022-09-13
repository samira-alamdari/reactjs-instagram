import "../styles/cardMenu.scss";
import {ReactComponent as Like} from "../images/like.svg";
import {ReactComponent as Comment} from "../images/comment.svg";
import {ReactComponent as Inbox} from "../images/inbox.svg";
import {useState} from "react";

const CardMenu =()=>{
    //Like a post
    const [isFill, setFill] = useState("false");
    const toggleFill = () => {
        setFill(!isFill);
    };
    return(
        <div className="cardMenu">
            <Like className={`${isFill ? "" : "liked"} icon`}/>
            <Comment className="icon"/>
            <Inbox className="icon"/>
        </div>
    )
}
export default CardMenu;