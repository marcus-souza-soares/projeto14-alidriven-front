import { useContext } from "react";
import ProductContext from "../contexts/ProductContext";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContexts";
import { useNavigate } from "react-router-dom";

export default function Checkout({ payment, setPayment, checkout, setCheckout, listToBuy, value }) {
    const { setCart_list } = useContext(ProductContext)
    const { token } = useContext(UserContext)
    const navigate = useNavigate();
    let select =
        [
            {
                type: "card",
                checked: false
            },
            {
                type: "pix",
                checked: false
            },
            {
                type: "money",
                checked: false
            }
        ]
        const [render_payment, setRender_payment] = useState(select)
    
    const check = (a) => {
        for (let i = 0; i < select.length; i++){
            if(select[i] !== select[a]){
                select[i].checked = false;
            }else {
                select[i].checked = true;
                payment = select[i].type
            }
            setRender_payment([...select])
        }
        return;
    }
    const buy = () => {
        
        const permission = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const promise = axios.post("http://localhost:5000/purchases", {
            products: listToBuy, 
            total: value,
            payment
        }, permission)
        promise.then(res => {
            console.log(res.data);
            setCheckout(!checkout)
            alert("Compra efetuada com sucesso!")
            const promise = axios.delete("http://localhost:5000/cart", permission)
            promise.then((res) => {
                console.log("deletou");
                setCart_list([...res.data.products])
                navigate("/")
            })
            promise.catch(()=> console.log("Não deletou"))
        });
        promise.catch(() => {
            console.log("Não foi possível enviar o pedido")
        })
    }

    return (
        <Container>
            {select.length > 0 ? render_payment.map((e, i) => {
                return (
                    <div className="payment" key={i} onClick={() => {
                        check(i);
                        console.log(payment)
                    }}>
                        <div className="check" >
                            {e.checked ? <ion-icon name="checkmark-outline"></ion-icon> : null}
                        </div>
                        <h1>{e.type}</h1>
                    </div>
                )
            }) : null}
            <button onClick={buy}>OK</button>
        </Container>
    )
}

const Container = styled.div`
    width: 200px;
    height: 300px;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 5px;
    box-shadow: 1px 1px 5px black;
    background-color: #FFFFFF;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .payment{
        width: 100%;
        display: flex;
        align-items: center;
    }

    .check{
        width: 20px;
        height: 20px;
        border: 2px solid black;
        margin: 20px;
    
    }
    button{
        margin-top: 50px;
        width: 150px;
        height: 60px;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: orange;
        border: none;
        margin-bottom: 30px;
    }
`