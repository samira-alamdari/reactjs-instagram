import "../styles/profileIcon.scss"
const ProfileIcon=(props)=>{
    const {iconSize,storyBorder,image}=props;
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    const randomId=getRndInteger(1,70);
    const profileImage=image ? image : `https://i.pravatar.cc/150?img=${randomId}`

    return(
        <div className={storyBorder ? "storyBorder" : ""}>
            <img className={`profileIcon ${iconSize}`}
                src={profileImage}
                alt="profile"/>
        </div>
    )
}
export default ProfileIcon;