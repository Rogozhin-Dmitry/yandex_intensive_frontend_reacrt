import './Book.css';
import {Stars} from "../Stars/Stars";
import {Rating} from "../Rating/Rating";

export const Book = (props) => {
    return <div className="book_block">
        <div className="book_left_block">
            <h1 className="book_title">{props.book.name}</h1>
            <h2 className="book_author">{props.book.author}</h2>
            <h2 className="book_type">{props.book.type}</h2>
            <Stars stars={props.book.stars}/>
            <h1 className="book_price">{props.book.price} ₽</h1>
        </div>
        <Rating/>
    </div>
}