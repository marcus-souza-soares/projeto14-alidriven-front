import { BrowserRouter, Routes, Route }  from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./contexts/UserContexts.js"
import FeedScreen from "./Screens/FeedScreen.js"
import SignIn from "./Screens/SignIn.js"
import SignUp from "./Screens/SignUp.js"
import CartScreen from "./Screens/CartScreen.js"
import ProductScreen from "./Screens/ProductScreen.js";
import PurchasesScreen from "./Screens/PurchasesScreen.js";


export default function App(){
    const [token, setToken] = useState();

    return(
        <BrowserRouter>
            <UserContext.Proviver value={{token, setToken}}>
                <Routes>
                    <Route path="/" element={<FeedScreen/>} />
                    <Route path="/signin" element={<SignIn/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/cart" element={<CartScreen/>} /> 
                    <Route path="/product:id" element={<ProductScreen />} />
                    <Route path="/purschases" element={<PurchasesScreen />} />
                </Routes>
            </UserContext.Proviver>
        </BrowserRouter>
    )
}