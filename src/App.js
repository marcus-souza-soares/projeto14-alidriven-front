import { BrowserRouter, Routes, Route }  from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContexts"
import FeedScreen from "./Screens/FeedScreen"
import SignIn from "./Screens/SignIn"
import SignUp from "./Screens/SignUp"
import CartScreen from "./Screens/CartScreen"
import ProductScreen from "./Screens/ProductScreen";
import PurchasesScreen from "./Screens/PurchasesScreen";


export default function App(){
    const [token, setToken] = useState();

    return(
        <BrowserRouter>
            <UserContext.Provider value={{token, setToken}}>
                <Routes>
                    <Route path="/" element={<FeedScreen/>} />
                    <Route path="/signin" element={<SignIn/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/cart" element={<CartScreen/>} /> 
                    <Route path="/product:id" element={<ProductScreen />} />
                    <Route path="/purschases" element={<PurchasesScreen />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}