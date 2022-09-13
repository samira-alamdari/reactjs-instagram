import "../styles/card.scss";
import axios from "axios";
import {useEffect, useState} from "react";
import Profile from "./Profile";
import CardMenu from "./CardMenu";
const Card=(props)=>{
    const{
        storyBorder,
        likedByText,
        likedByNumber
    }=props

    const[cardImgs,setCardImgs]=useState([]);
    // Getting Every Post Picture
    const fetchData=async ()=>{
        try {
            const response = await axios({
                url:'https://api.unsplash.com/photos/?client_id=uPQ-b_lwvyxB5zYNwRDam012Ox-DmjxUBVkJDFyd1tE'
            })
            setCardImgs(response.data);

        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    useEffect( ()=>{
        fetchData();
    },[]);
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    const randomId=getRndInteger(1,10);
    const src=cardImgs.map(item=>{return(item.urls.raw)});
    const eachSrc=src[randomId]
    return(
        <div className="card">
            <header>
                <Profile iconSize="medium" storyBorder={storyBorder}/>
                <div className="cardButton"><span></span><span></span><span></span></div>
            </header>
            <div className="cardImage">
                {
                    <img  src={eachSrc} />
                }
            </div>

            <CardMenu/>
            <div className="likedBy">
                <Profile iconSize="small" hideAccountName={true}/>
                <span>
                    Liked by <strong>{likedByText}</strong> and {""}
                    <strong>{likedByNumber} others</strong>
                </span>
            </div>
        </div>
    )
}
export default Card;



