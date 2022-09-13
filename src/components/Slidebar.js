import "../styles/sidebar.scss"
import Profile from "./Profile";
import profilePhoto from "../images/instagram-01.jpg";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
const SideBar=()=>{
    return(
        <div className="sideBar">
            <Profile username="samira alamdari" caption="react developer" urlText="Switch" image={profilePhoto} iconSize="big"/>
            <Suggestions/>
            <Footer/>
        </div>
    )
}
export default SideBar;