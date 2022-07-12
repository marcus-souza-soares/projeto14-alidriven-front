import styled from "styled-components";
import Header from "../components/Header";
import ProductAtCart from "../components/ProductAtCart";
import ProductContext from "../contexts/ProductContext.js";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContexts";
import axios from "axios";
import Checkout from "../components/Checkout";
import { useNavigate } from "react-router-dom";

export default function CartScreen() {
    const {cart_list, setCart_list} = useContext(ProductContext);
    const { token } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {

        const permission = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        if (!token){
            alert("Você não está logado, faça login primeiro!")
            navigate("/signin");            
        }
        const promise = axios.get("https://projeto14-alidriven.herokuapp.com/cart", permission);
        promise.then(res => {
            console.log(res.data);
            setCart_list(res.data.products);
        });
        promise.catch(() => {
            console.log("Não foi possível buscar a lista de carrinhos")
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[token]);
    //LISTA DE ITENS QUE SERÃO COMPRADOS!
    const [listToBuy, setListToBuy] = useState([])
    //Valor total
    const [value, setValue] = useState(0);

    let payment = "";
    const [checkout, setCheckout] = useState(false)

       
    return (
        <Container>
            <Header />
            {cart_list.length > 0 ? cart_list.map((product, index) => (
                <ProductAtCart 
                setCart_list={setCart_list}
                product={product}
                listToBuy={listToBuy} 
                setListToBuy={setListToBuy} 
                key={index} 
                setValue={setValue}
                value={value}/>
            )) : null}
            <h1 className="valor">{`Valor total: R$ ${value.toFixed(2).replace(".",",")}`}</h1>
            <button onClick={() => setCheckout(!checkout)}>Fechar Compra</button>

            {checkout ? <Checkout 
            payment={payment} 
            checkout={checkout}
            setCheckout={setCheckout}
            listToBuy={listToBuy}
            value={value}
            /> : null}
            
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        margin-top: 50px;
        width: 150px;
        height: 60px;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: orange;
        border: none;
        margin-bottom: 30px;
    }
    .valor {
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        color: #ff4000;
        margin-top: 20px;
    }
`;
