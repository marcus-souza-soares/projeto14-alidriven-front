import styled from "styled-components";
import { useState } from "react";

export default function ProductAtCart({ product }) {
    const [checked, setChecked] = useState(true);
    return (
        <Container>
            <div className="imgAndCheck">
                <div className="check" onClick={() => setChecked(!checked)}>
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

    .imgAndCheck{
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