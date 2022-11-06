# Для коректной проверки 2й страницы:

## В файле App.jsx

## Закомментируйте:

### 
    export function App() {
        return <Layout>
            <BooksPage items={items}/>
        </Layout>
    }

## Раскомментируйте:

### 
    export function App() {
        return <Layout>
            <BookPage items={items}/>
        </Layout>
    }