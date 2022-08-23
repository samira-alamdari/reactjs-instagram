import "../styles/story.scss";
import ProfileIcon from "./profileIcon";
import users from "../data/users";
const Story=()=>{
    let accountName=users[Math.floor(Math.random() * users.length)].first_name;
    // console.log(accountName);
    if(accountName.length > 10){
        accountName=accountName.substring(0,10) + "...";
    }
    return(
        <div className="story">
            <ProfileIcon storyBorder={true} iconSize="big"/>
            <span className="accountName">{accountName}</span>
        </div>
    )
}
export default Story;