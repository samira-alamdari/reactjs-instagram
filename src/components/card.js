import "../styles/card.scss";
import axios from "axios";
import {useEffect, useState} from "react";
import Profile from "./Profile";
import users from "../data/users";
import CardMenu from "./CardMenu";
// import Comment from "./Comment";
const Card=(props)=>{
    const{
        storyBorder,
        comment,
        likedByText,
        likedByNumber,
        hours
    }=props

    const[cardImgs,setCardImgs]=useState([]);
    const fetchData=async ()=>{
        try {
            const response = await axios({
                url:'https://api.unsplash.com/photos/?client_id=uPQ-b_lwvyxB5zYNwRDam012Ox-DmjxUBVkJDFyd1tE'
            })
            // console.log(response.data);
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
    // console.log(src);
    const eachSrc=src[randomId]
    // console.log(eachSrc);
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
            {/*<div className="comments">*/}
            {/*    {*/}
            {/*        comments.map(comment=>{*/}
            {/*            return(*/}
            {/*                <Comment key={comment.id}*/}
            {/*                         accountName{comment.user }*/}
            {/*                         comment{comment.text }/>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}
            {/*<div className="timePosted">{hours} HOURS AGO</div>*/}
            {/*<div className="addComment">*/}
            {/*    <div className="commentText">Add a commnet ...</div>*/}
            {/*    <div className="postText">POST</div>*/}
            {/*</div>*/}
        </div>
    )
}
export default Card;
// {
//     cardImgs.map(cardImg=>{
//         return(
//             <img key={cardImg.user.id} src={cardImg.urls.regular} alt={cardImg.alt_description}/>
//         )
//     })
// }



