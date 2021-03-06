import styled from "styled-components";
import { useState } from "react";
import { useContext } from "react";
import axios from "axios"
import UserContext from "../contexts/UserContexts";

export default function ProductAtCart({ product, listToBuy, setListToBuy, setValue, value, setCart_list }) {
    const { token } = useContext(UserContext);
    
    const [checked, setChecked] = useState(false);

    //Para adicionar items na lista dos que serão comprados
    const addTolistToBuy = () => {
        const add = checked;
        if(add === false){
            setListToBuy([...listToBuy, product])
            setValue(value + product.price)
        } else {
            setListToBuy([...listToBuy.filter(item => product.id === item.id ? false : true)])
            setValue(value - product.price)
        }
        setChecked(!checked)
        console.log(listToBuy)
    }
    const deleteOfCart = () => {
        const permission = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        console.log(token)
        const promise = axios.delete(`http://localhost:5000/cartItem?id=${product._id}`, permission);
        promise.then(res => {
            console.log(res.data);
            setCart_list([...res.data.products])
        })
        promise.catch(() => {
            return console.log("Não deletou esse item!")
        })

    }
    
    return (
        <Container>
            <div className="img-and-check">
                <div className="check" onClick={addTolistToBuy}>
                    {checked ? <ion-icon name="checkmark-outline"></ion-icon> : null}
                </div>
                <div className="picture">
                    <img src={`${product.pictureURL}`} alt="" />
                </div>
            </div>
            <div className="description">
                <h1>{product.name}</h1>
                <h2>{`R$ ${product.price.toFixed(2).replace(".", ",")}`}</h2>
            </div>
            <ion-icon name="trash-outline" onClick={deleteOfCart}></ion-icon>
        </Container>
    )
}

const Container = styled.div`
    background-color: #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    padding: 0 20px;
    margin-bottom: 5px;

    .img-and-check{
        display: flex;
        align-items: center;
    }
    .check{
        width: 20px;
        height: 20px;
        border: 2px solid black;
    }
    .picture{
        width: 70px;
        height: 70px;
        margin-left: 30px;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`