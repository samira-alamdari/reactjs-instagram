import "../styles/cards.scss";
import Stories from "./stories";
import Card from "./card";
const Cards=()=>{
    return(
        <div className="cards">
            <Stories/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}
export default Cards;
