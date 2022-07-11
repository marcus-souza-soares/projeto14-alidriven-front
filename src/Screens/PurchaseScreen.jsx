import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import { addingProduct } from "../functions/addingProduct";
import UserContext from "../contexts/UserContexts.js";


function Itens({setTotal, total, image,name,price}){
    return(
        <>
            <ItemTag>
                <div>{name}</div>
                <div>R${price}</div>
            </ItemTag>
        </>
    );
}

export default function PurchaseScreen() {
    const {id} = useParams();
    const [order,setOrder] = useState('');
    const {token} = useContext(UserContext);
    useEffect(()=>{
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.get(`http://localhost:5000/orders/${id}`,config).then((r)=>{
            setOrder(r.data);
        }).catch((r)=>{
            console.log(r);
        })
    },[]);
    return (
        <Container>
            <Header/>
            <OrderInfos>
                <div>Número do pedido: {order._id}</div>
                <div>Itens:</div>
                {(order.products)? order.products.map((p, i) => <Itens key={i+1} image={p.pictureURL} name={p.name} price={p.price} />):undefined}
                <div>Data do Pedido: {order.date}</div>
                <div>Forma de Pagamento: {order.payment}</div>
                <div>Total: {order.total}</div>
            </OrderInfos>
        </Container>



    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`

const OrderInfos = styled.div`
    margin-top: 16px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    > *{
        margin-bottom: 8px;
    }
`

const ItemTag = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`