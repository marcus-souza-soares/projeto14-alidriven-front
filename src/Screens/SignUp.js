import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
    const [disabled, setDisabled] = useState(false);

    const login = e => {
        e.preventDefault();
        console.log("Logou")
    }

    return (
        <Container>
            <div className="title">
                <h1 className="yellow">Ali</h1>
                <h1 className="red">Driven</h1>
            </div>
            <form onSubmit={login}>
                <input
                    type="text"
                    placeholder="Nome"
                    disabled={disabled}
                    required />

                <input
                    type="email"
                    placeholder="email"
                    disabled={disabled}
                    required />

                <input
                    type="password"
                    placeholder="Senha"
                    disabled={disabled}
                    required />

                <input
                    type="password"
                    placeholder="Confirmar senha"
                    disabled={disabled}
                    required />

                <button
                    type="submit"
                    disabled={disabled}>Entrar</button>
            </form>
            <Link to="/signin" style={{ textDecoration: "none" }}>
                <h3>Já tem cadastro? Faça login!</h3>
            </Link>
        </Container>

    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    //Mudar essa parte apos o GlobalStyled
    min-height: 900px;
    background-color: #d9d0d0;

    .title{
        padding-top: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1{
        font-family: 'Roboto', sans-serif;
        font-size: 35px;
    }
    .yellow{
        color: #ef8f0d;
    }
    .red {
        color: #dd2e1f;
    }
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    input, button {
        margin: 0 5px 10px 5px;
        height: 35px;
        padding: 0 5px;
    }
`