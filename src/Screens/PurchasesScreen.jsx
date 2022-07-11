import axios from "axios";
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import UserContext from "../contexts/UserContexts.js";


function Order({ id, date }) {
    return (
        <>
            <Link to={`/purchases/${id}`}>
                <div>{id}</div>
                <div>{date}</div>
            </Link>
        </>
    )
}

export default function PurchasesScreen() {
    const [orders, setOrders] = useState([]);
    const { token } = useContext(UserContext);
    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.get(`http://localhost:5000/purchases`, config).then((r) => {
            setOrders(r.data);
        }).catch((r) => {
            console.log(r);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <Container>
            <Header />
            <Title>SEUS PEDIDOS</Title>
            <OrdersTag>
                <div>
                    <div>ID do pedido</div>
                    <div>Data</div>
                </div>
                {(orders.length > 0) ? orders.map((o, i) => <Order id={o._id} key={i + 1} date={o.date} />) : undefined}
            </OrdersTag>
        </Container>
    )
}


const Title = styled.div`
    font-size: 30px;
    color: #dd2e1f;
    margin-bottom: 20px;
    width: 100%;
    padding: 10px;
`
const OrdersTag = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    justify-content: flex-start;
    overflow-y: scroll;
    width: 100%;
    a{
        margin-bottom: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 88%;
        font-size: 14px;
    }
    > div:nth-child(1){
        margin-bottom: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 88%;
        font-size: 20px;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`