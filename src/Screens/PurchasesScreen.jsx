import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import UserContext from "../contexts/UserContexts.js";


function Order({id,date}){
    return (
        <>
            <Link to={`/purchases/${id}`}>
                <div>{id}</div>
                <div>{date}</div>
            </Link>
        </>
    )
}

export default function PurchasesScreen(){
    const [orders, setOrders]=useState([]);
    const {token} = useContext(UserContext);
    useEffect(()=>{
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.get(`http://localhost:5000/orders`, config).then((r)=>{
            setOrders(r.data);
        }).catch((r)=>{
            console.log(r);
        })
    },[])
    return (
        <Container>
            <Header/>
            <Title>SEUS PEDIDOS</Title>
            <OrdersTag>
                {(orders.length>0)? orders.map((o, i) => <Order  id={o._id} key={i + 1} date={o.date}/>):undefined}
            </OrdersTag>
        </Container>
    )
}


const Title = styled.div`
    font-size: 30px;
    color: blue;
    margin-bottom: 20px;
    width: 100%;
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
        text-decoration: underline;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 88%;
        font-size: 14px;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`