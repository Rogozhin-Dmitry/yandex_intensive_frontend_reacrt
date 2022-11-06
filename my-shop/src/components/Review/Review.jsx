import './Review.css';
import {Stars} from "../Stars/Stars";

export const Review = (props) => {
    return <div className="review_block">
        <div className="upper_review_block">
            <h1 className="review_header">{props.review.name}</h1>
            <Stars stars={props.review.stars}></Stars>
        </div>
        {props.review.text}
    </div>
}
