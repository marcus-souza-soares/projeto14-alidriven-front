import axios from "axios";
import { Link, useNavigate, } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';

export default function FeedScreen() {
    const testVar = [1, 2, 3, 4, 5, 6, 7, 8];
    const [products, setProducts] = useState(testVar);
    return (
        <>
            <FeedProducts>
                eita
                <Product>
                    <img src="https://m.media-amazon.com/images/I/41-RhQeujUL._AC_SL1000_.jpg" alt="Macbook" />
                    <Bottom>
                        <div>9000,90</div>
                        <button onClick={() => console.log('add no carrinho')}>COMPRAR</button>
                    </Bottom>
                </Product>
            </FeedProducts>
        </>
    )
}

const FeedProducts = styled.div`
    width: 414px;
    height: 896px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`
const Product = styled.div`
    width: 100px;
    height: 100px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`