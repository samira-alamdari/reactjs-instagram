import "../styles/menu.scss";
import {ReactComponent as Home} from "../images/homeIcon.svg";
import {ReactComponent as Inbox} from "../images/inbox.svg";
import {ReactComponent as Explore} from "../images/explore.svg";
import {ReactComponent as Notification} from "../images/notification.svg";
import ProfileIcon from "./profileIcon";
import profilePhoto from "../images/instagram-01.jpg";
import {Link} from "react-router-dom";

const Menu=()=>{
    return(
        <div className="menu">
            <Link to="/"><Home className="icon"/></Link>
            <Link to='/direct'>
                <Inbox className="icon"/>
            </Link>
            <Explore className="icon"/>
            <Notification className="icon"/>
            <ProfileIcon storyBorder={true} iconSize="small" image={profilePhoto}/>
        </div>
    )
}
export default Menu;