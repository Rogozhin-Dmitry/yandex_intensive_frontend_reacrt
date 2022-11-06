import './Rating.css';
import {useState} from "react";

export const Rating = (props) => {
    const [rating, setRating] = useState(0)

    function love() {
        setRating(rating + 1)
        console.log(rating)
    }

    function non_love() {
        if (rating !== 0) {
            setRating(rating - 1)
        }
    }

    return <div className="book_right_block">
        <button className="reaction_icon"  onClick={non_love} disabled={!rating}>
            <div className="minus_icon"></div>
        </button>
        <h1 className="book_rating">{rating}</h1>
        <button className="reaction_icon" onClick={love}>
            <div className="plus_icon"></div>
        </button>
    </div>
}