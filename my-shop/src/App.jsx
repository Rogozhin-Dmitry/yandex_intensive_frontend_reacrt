import {Layout} from "./components/Layout/Layout";
import {BooksPage} from "./pages/BooksPage/BooksPage";
import {BookPage} from "./pages/BookPage/BookPage";
import {items} from "./constants/mock";


export function App() {
    return <Layout>
        <BooksPage items={items}/>
    </Layout>
}

// export function App() {
//     return <Layout>
//         <BookPage items={items}/>
//     </Layout>
// }