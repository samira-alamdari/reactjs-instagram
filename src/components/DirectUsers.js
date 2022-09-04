import "../styles/DirectUsers.scss"
import {useEffect, useState} from "react";
import axios from "axios";
const DirectUsers=()=>{
    let[activeID,setActiveID]=useState(false);
    const[users,setUsers]=useState([]);
    const findActiveID=(id)=>{
        // console.log(index);
        setActiveID(id)
    }
    console.log(activeID);
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
                <div className={`directUser ${activeID === user.id ? 'active' : ''} `} key={index} onClick={()=>findActiveID(user.id)} >
                    <div className="userImage"><img src={user.image} alt=""/></div>
                    <div className="textContainer">
                        <span className="accountName">{user.firstName}</span>
                    </div>
                </div>
            )
        })
    )

}
export default DirectUsers;