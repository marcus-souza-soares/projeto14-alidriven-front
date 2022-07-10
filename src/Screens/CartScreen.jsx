import styled from "styled-components";
import Header from "../components/Header";
import ProductAtCart from "../components/ProductAtCart";
import ProductContext from "../contexts/ProductContext";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContexts";
import axios from "axios";

export default function CartScreen() {
    const {cart_list, setCart_list} = useContext(ProductContext)
    const { token } = useContext(UserContext);

    useEffect(() => {

        const permission = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const promise = axios.get("http://localhost:5000/cart", permission);
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

    const buy = () => {
        // //const permission = {
        //     headers: {
        //         "Authorization": `Bearer ${token}`
        //     }
        // }
        //const promisse = axios.post("")
    }
    
    return (
        <Container>
            <Header />
            {cart_list.map((product, index) => (
                <ProductAtCart product={product} listToBuy={listToBuy} setListToBuy={setListToBuy} key={index}/>
            ))}
            <button onClick={buy}>Fechar Compra</button>
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
`;
