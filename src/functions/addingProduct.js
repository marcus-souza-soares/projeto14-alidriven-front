import axios from "axios";
import { Link, useNavigate, } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';

export function addingProduct(product, token, navigate){
    if(!token){
        alert('Necessário estar logado para adicionar itens no carrinho'); 
        return ;
    }
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    axios.put('http://localhost:5000/cart', product, config).then(()=>{
        navigate('/cart');
    }).catch((r)=>{
        console.log(r.response.data);
        alert('Não foi possível adicionar item no carrinho.');
    });
}