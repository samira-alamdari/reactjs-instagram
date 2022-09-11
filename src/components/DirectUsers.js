import "../styles/DirectUsers.scss"
import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const DirectUsers=()=>{
    let[activeID,setActiveID]=useState(false);
    const[users,setUsers]=useState([]);
    const[userURL,setUserURL]=useState(window.location.href);
    const findActiveID=(id)=>{
        setActiveID(id);
        console.log(id);
    }
    // const userRoutes=[
    //     {path:'userURL.concat(\'/\' + user.id)' element}
    // ]
    const fetchData=async ()=>{
        try {
            const response = await axios({
                url:'https://dummyjson.com/users'
            })
            setUsers(response.data.users);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    useEffect( ()=>{
        fetchData();
    },[]);
    return(
        users.map((user,index)=>{
            return(
                <div  className={`directUser ${activeID === user.id ? 'active' : ''} `} key={user.id} id={user.id} onClick={()=>findActiveID(user.id)} >
                    <div className="userImage"><img src={user.image} alt=""/></div>
                    <div className="textContainer">
                        <span className="accountName"><Link to={`/direct/${index}`}>{user.firstName}</Link></span>
                    </div>
                </div>
                // <link to={`/direct/${index}`}  className={`directUser ${activeID === user.id ? 'active' : ''} `} key={user.id} id={user.id} onClick={()=>findActiveID(user.id)} >
                //     <div className="userImage"><img src={user.image} alt=""/></div>
                //     <div className="textContainer">
                //         <span className="accountName">{user.firstName}</span>
                //     </div>
                // </link>
            )
        })
    )

}
export default DirectUsers;
// userURL.concat('/' + user.id)
//TODO use builtin functions for crate a url in js