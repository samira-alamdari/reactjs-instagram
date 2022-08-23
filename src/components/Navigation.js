import "../styles/navigation.scss";
import logo from "../images/logo.png";
import searchicon from "../images/searchIcon.png";
import Menu from "./Menu"


const Navigation=()=>{
    return(
         <div className="navigation">
             <div className="container">
                 <img className="logo" src={logo}/>
                 <div className="search">
                     <img className="searchIcon" src={searchicon}/>
                     <span className="searchText">Search</span>
                 </div>
                 <Menu/>
             </div>
         </div>
    )
}
export default Navigation;