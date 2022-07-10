import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContexts"
import FeedScreen from "./Screens/FeedScreen.jsx"
import SignIn from "./Screens/SignIn"
import SignUp from "./Screens/SignUp"
import CartScreen from "./Screens/CartScreen"
import ProductScreen from "./Screens/ProductScreen.jsx";
import PurchasesScreen from "./Screens/PurchasesScreen";
import Reset from './theme/reset.js';
import GlobalStyle from "./theme/globalstyle.js";
import ProductContext from "./contexts/ProductContext";
import Cartlist from "./components/cartList";

export default function App() {
    const [token, setToken] = useState("")
    const [cart_list, setCart_list] = useState([])

    //let cart_list = Cartlist();

    return (

        <BrowserRouter>
            <Reset />
            <GlobalStyle />
            <UserContext.Provider value={{ token, setToken }}>
                <ProductContext.Provider value={{cart_list, setCart_list}}>
                    <Routes>
                        <Route path="/" element={<FeedScreen />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/cart" element={<CartScreen />} />
                        <Route path="/product/:id" element={<ProductScreen />} />
                        <Route path="/purschases" element={<PurchasesScreen />} />
                    </Routes>
                </ProductContext.Provider>
            </UserContext.Provider>
        </BrowserRouter>
    )
}