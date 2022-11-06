import {Books} from "../../components/Books/Books";
import {BooksClasses} from "../../components/BooksClasses/BooksClasses";
import {useState} from "react";

export const BooksPage = (props) => {
    const [activeClass, setActiveClass] = useState(props.items[0]);

    return <div className="content">
            <BooksClasses items={props.items} activeclass={activeClass} setactive={setActiveClass}/>
            <Books activeclass={activeClass}/>
    </div>
}