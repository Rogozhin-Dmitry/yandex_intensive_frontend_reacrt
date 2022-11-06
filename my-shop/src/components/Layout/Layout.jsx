export const Layout = (props) => {
    return <div className="container">
        <header>
            <h1 className="header_logo">Магазин</h1>
            <div className="cart_element">
                <div className="cart_img_1"></div>
                <div className="cart_element_loyal">
                    <div className="cart_img_2"></div>
                    <div className="cart_img_3"></div>
                </div>
            </div>
        </header>
        {props.children}
    </div>
}
