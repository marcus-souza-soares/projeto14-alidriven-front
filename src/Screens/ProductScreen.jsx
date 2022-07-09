import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Header from "../components/Header";

export default function ProductScreen() {
    const image = 'https://m.media-amazon.com/images/I/41-RhQeujUL._AC_SL1000_.jpg';
    const name = 'macbook';
    const price = 9900;
    return (
        <Container>
            <Header/>
            <ProductInfos>
                <img src={image} alt="macbook" />
                <div>{name}</div>
                <div>R${price}</div>
                <button onClick={() => console.log('chama função que adiciona item no carrinho, e redireciona para a rota carrinho')}>COMPRAR</button>
                <Description>Descrição</Description>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quo possimus labore quos sint corporis minus inventore similique deserunt. Natus debitis consectetur commodi expedita, dignissimos repudiandae consequatur quasi odio doloremque!</div>
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
