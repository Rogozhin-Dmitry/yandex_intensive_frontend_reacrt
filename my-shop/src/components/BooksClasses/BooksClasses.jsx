import './BooksClasses.css';

export const BooksClasses = (props) => {
    return <div className="book__class__block">
        {
            props.items.map((item) => <button className={`book__class__button ${props.activeclass === item ? 'active' : ''}`} key={item.id} onClick={() => props.setactive(item)}>{item.name}</button>)
        }
    </div>
}