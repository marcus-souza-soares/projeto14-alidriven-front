import axios from "axios";
import { Link, useNavigate, } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';



function ProductComponent({ image, name, price, key, navigate }) {
    return (
        <Product>
            <img src={image} alt={name}  onClick={() => navigate(`/product/${1}`)} />
            <div>{name}</div>
            <div>R${price}</div>
            <button>COMPRAR</button>
        </Product>
    );
}
export default function FeedScreen() {
    const testVar = [1, 2, 3, 4, 5, 6, 7, 8];
    const navigate = useNavigate();
    const [products, setProducts] = useState(testVar);
    return (
        <>
            <FeedProducts>
                {testVar.map((p, i) => <ProductComponent image={"https://m.media-amazon.com/images/I/41-RhQeujUL._AC_SL1000_.jpg"} key={i + 1} name={'Macbook'} price={9900} navigate={navigate} />)}
            </FeedProducts>
        </>
    )
}

const FeedProducts = styled.div`
    width: 414px;
    height: 896px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: #d9d0d0;
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