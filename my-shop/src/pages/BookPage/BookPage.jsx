import {Book} from "../../components/Book/Book";
import {BookAnnotation} from "../../components/BookAnnotation/BookAnnotation";
import {Reviews} from "../../components/Reviews/Reviews";
import './BookPage.css';


export const BookPage = (props) => {
    const book = props.items[0].books[0];
    return <div className="book_content">
        <div className="content">
            <div className="book">
                <Book book={book}></Book>
            </div>
            <div>
                <BookAnnotation>{book.annotation}</BookAnnotation>
            </div>
        </div>
        <Reviews reviews={book.reviews}></Reviews>
    </div>
}