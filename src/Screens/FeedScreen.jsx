import axios from "axios";
import { Link, useNavigate, } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import UserContext from "../contexts/UserContexts";



function ProductComponent({ image, name, price, index, navigate }) {
    
    return (
        <Product>
            <img src={image} alt={name} onClick={() => navigate(`/product/${index}`)} />
            <div>{name}</div>
            <div>R${price}</div>
            <button>COMPRAR</button>
        </Product>
    );
}
export default function FeedScreenTeste() {
    const { token } = useContext(UserContext)
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        const promise = axios.get("http://localhost:5000/products");
        promise.then(res => {
            console.log(res.data);
            setProducts(res.data)
        })
        promise.catch(() => {
            console.log("Não foi possível obter a lista de produtos!");
        })

    },[token])

    return (
        <Container>
            <Header />
            <FeedProducts>
                {products.map((p, i) => <ProductComponent image={p.pictureURL} key={i + 1} name={p.name} price={p.price} navigate={navigate} index={i + 1} />)}
            </FeedProducts>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const FeedProducts = styled.div`
    width: 100%;
    height: 100%;
    padding: 15px 0 15px 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: white;
`
const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    width: 13vh;
    height: 17vh;
    padding: 2px;
    margin-bottom: 20px;
    margin-right: 15px;
    border-radius: 5px;
    box-shadow: 1px 2px 5px #464646;
    > div:nth-child(3){
        color: brown;
    }
    img{
        width: 86px;
        height: 56px;
    }
    button{
        width: 66px;
        height: 20px;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: orange;
        border: none;
    }
`
