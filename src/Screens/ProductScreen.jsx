import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import { addingProduct } from "../functions/addingProduct";
import UserContext from "../contexts/UserContexts.js";

export default function ProductScreen() {
    const {id} = useParams();
    const [product,setProduct] = useState('');
    const {token} = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:5000/products/${id}`).then((r)=>{
            setProduct(r.data);
        }).catch((r)=>{
            console.log(r);
            console.log('deu BO');
        })
    },[]);
    return (
        <Container>
            <Header/>
            <ProductInfos>
                <img src={product.pictureURL} alt={product.name} />
                <div>{product.name}</div>
                <div>R${product.price}</div>
                <button onClick={()=>addingProduct(product, token, navigate)}>COMPRAR</button>
                <Description>Descrição</Description>
                <div>{product.description}</div>
            </ProductInfos>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
const ProductInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    color: black;
    font-size: 40px;
    background-color: white;
    img {
        max-width: 300px;
        max-height: 200px;
        margin-bottom: 20px;
    }
    > div:nth-child(3){
        margin-top: 20px;
        margin-bottom: 20px;
        color: brown;
    }
    button{
        width: 150px;
        height: 40px;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: orange;
        border: none;
        margin-bottom: 30px;
    }
    > div:last-child{
        font-size: 14px;
        text-align: start;
        width: 100%;
    }
`
const Description = styled.div`
    text-align: start;
    font-size: 30px;
    color: blue;
    margin-bottom: 14px;
    width: 100%;
`
