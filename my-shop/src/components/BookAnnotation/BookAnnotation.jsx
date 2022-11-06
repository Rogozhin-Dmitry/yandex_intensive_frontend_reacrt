import './BookAnnotation.css';

export const BookAnnotation = (props) => {
    return <div className="book_annotation_block">
        <h1 className="book_annotation_header">Аннотация</h1>
        <p className="book_annotation">{props.children}</p>
    </div>
}