import './Reviews.css';
import {Review} from "../Review/Review";

export const Reviews = (props) => {
    return <div className="reviews_block">
        {
            props.reviews.map((review) => <Review review={review} key={review.id}></Review>)
        }
    </div>
}