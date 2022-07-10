import axios from "axios";
import { Link, useNavigate, } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Header from "../components/Header";


function ProductComponent({token, product, id, image, name, price, navigate }) {
    return (
        <Product>
            <img src={image} alt={name} onClick={() => navigate(`/product/${id}`)} />
            <div>{name}</div>
            <div>R${price}</div>
            <button onClick={()=>addingProduct(product, token, navigate)}>COMPRAR</button>
        </Product>
    );
}
export default function FeedScreen() {
    const navigate = useNavigate();
    const [products,setProducts] = useState([]);
    const {token} = useContext(UserContext);
    useEffect(()=>{
        axios.get('http://localhost:5000/products').then((r)=>{
            setProducts(r.data);
        }).catch((r)=>{
            console.log(r);
        })
    },[]);
    return (
        <Container>
            <Header />
            <FeedProducts>
                {(products.length>0)? products.map((p, i) => <ProductComponent token={token} product={p} id={p._id} image={p.pictureURL} key={i + 1} name={p.name} price={p.price} navigate={navigate} />):undefined}
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
    height: fit-content;
    padding: 10px;
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
    width: 100px;
    height: 150px;
    border: 1px solid black;
    padding: 2px;
    margin-right: 6px;
    margin-bottom: 18px;
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
