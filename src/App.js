import { BrowserRouter, Routes, Route }  from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContexts"
import FeedScreen from "./Screens/FeedScreen.jsx"
import SignIn from "./Screens/SignIn.jsx"
import SignUp from "./Screens/SignUp.jsx"
import CartScreen from "./Screens/CartScreen.jsx"
import ProductScreen from "./Screens/ProductScreen.jsx";
import PurchasesScreen from "./Screens/PurchasesScreen.jsx";
import PurchaseScreen from "./Screens/PurchaseScreen.jsx";
import Reset from './theme/reset.js';
import GlobalStyle from "./theme/globalstyle.js";

export default function App(){
    const [token, setToken] = useState();

    return(
        
        <BrowserRouter>
            <Reset/>
            <GlobalStyle/>
            <UserContext.Provider value={{token, setToken}}>
                <Routes>
                    <Route path="/" element={<FeedScreen/>} />
                    <Route path="/signin" element={<SignIn/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/cart" element={<CartScreen/>} /> 
                    <Route path="/product/:id" element={<ProductScreen />} />
                    <Route path="/purchases" element={<PurchasesScreen />} />
                    <Route path="/purchases/:id" element={<PurchaseScreen />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}