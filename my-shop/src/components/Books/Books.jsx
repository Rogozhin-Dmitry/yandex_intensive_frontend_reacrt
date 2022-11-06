import {Book} from "../Book/Book";
import './Books.css';

export const Books = (props) => {
    return <div className="books_block">
            {
                props.activeclass.books.map((book) => <div key={book.id}><Book book={book}/></div>)
            }
    </div>
}