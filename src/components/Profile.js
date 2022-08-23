import "../styles/profile.scss"
import ProfileIcon from "./profileIcon";
import users from "../data/users";
const Profile=(props)=>{
    const{
        image,
        caption,
        iconSize,
        urlText,
        captionSize,
        storyBorder,
        hideAccountName
    }=props;
    let accountName=users[Math.floor(Math.random() * users.length)].first_name;

    return(
        <div className="profile">
            <ProfileIcon iconSize={iconSize} image={image} storyBorder={storyBorder}/>
            {(accountName || caption) && !hideAccountName &&(
                <div className="textContainer">
                    <span className="accountName">{accountName}</span>
                    <span className={`caption ${captionSize}`}>{caption}</span>
                </div>
            )}
            <a href="/">{urlText}</a>
        </div>
    )
}
export default Profile;
