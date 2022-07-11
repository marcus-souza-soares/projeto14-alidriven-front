import axios from "axios";
import { useParams } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import UserContext from "../contexts/UserContexts.js";


function Itens({setTotal, total, image,name,price}){
    setTotal(total+=price);
    return(
        <>
            <ItemTag>
                <div>{name}</div>
                <div>{price}</div>
            </ItemTag>
        </>
    );
}

export default function PurchaseScreen() {
    const {id} = useParams();
    const [order,setOrder] = useState('');
    const {token} = useContext(UserContext);
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        axios.get(`http://localhost:5000/orders/${id}`).then((r)=>{
            setOrder(r.data);
        }).catch((r)=>{
            console.log(r);
        })
    },[]);
    return (
        <Container>
            <Header/>
            <OrderInfos>
                <div>Número do pedido{order._id}</div>
                {(order.products>0)? order.products.map((p, i) => <Itens key={i+1} setTotal={setTotal} total={total} image={p.pictureURL} name={p.name} price={p.price} />):undefined}
                <div>Data do Pedido{order.date}</div>
                <div>Forma de Pagamento{order.payment}</div>
                <div>Total{total}</div>
            </OrderInfos>
        </Container>



    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
`

const OrderInfos = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
`

const ItemTag = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`