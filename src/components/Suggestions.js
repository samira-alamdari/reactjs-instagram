import "../styles/suggestions.scss";
import Profile from "./Profile";
const Suggestions=()=>{
    return(
        <div className="suggestion">
            <div className="titleContainer">
                <div className="title">Suggestion For You</div>
                <a href="/#">See All</a>
            </div>
            <Profile
                caption="followed by kalantari + 3more"
                urlText="Follow"
                iconSize="medium"
                captionSize="small"
                storyBorder={true}
            />
            <Profile
                caption="followed by kalantari"
                urlText="Follow"
                iconSize="medium"
                captionSize="small"
            />
            <Profile
                caption="followed by kalantari + 3more"
                urlText="Follow"
                iconSize="medium"
                captionSize="small"
            />
            <Profile
            caption="followed by kalantari + 1more"
            urlText="Follow"
            iconSize="medium"
            captionSize="small"
            storyBorder={true}
        />
            <Profile
                caption="followed by alireza "
                urlText="Follow"
                iconSize="medium"
                captionSize="small"
                storyBorder={true}
            />

        </div>
    )
}
export default Suggestions;