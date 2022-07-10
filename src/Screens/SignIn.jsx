import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContexts";
import { useContext } from "react";
export default function SignIn() {
    const { setToken } = useContext(UserContext);
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const login = e => {
        e.preventDefault();
        console.log("Logou")
        setDisabled(true);
        const dados = {
            password,
            email
        }
        const validaEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/;
        const validaSenha = /^[0-9a-zA-Z$*&@#]{6,}$/;

        if (!validaEmail.test(email)) {
            return alert('E-mail inválido!');
        }
        if (!validaSenha.test(password)) {
            return alert('Senha inválida! Mínimo de 3 caracteres.');
        }
        const promise = axios.post("http://localhost:5000/login", dados);
        promise.then(res => {
            setDisabled(false);
            setToken(res.data.token);
            console.log(res.data.token)
            navigate("/");

        })
        promise.catch(e => {
            console.log(["Não logou ", e]);
            setDisabled(false);
        })

    }

    return (
        <Container>
            <div className="title">
                <h1 className="yellow">Ali</h1>
                <h1 className="red">Driven</h1>
            </div>
            <form onSubmit={login}>
                <input
                    type="email"
                    placeholder="email"
                    disabled={disabled}
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    required />

                <input
                    type="password"
                    placeholder="Senha"
                    disabled={disabled}
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required />

                <button
                    type="submit"
                    disabled={disabled}>Entrar</button>
            </form>
            <Link to="/signup" style={{ textDecoration: "none" }}>
                <h3>Não possui conta? Cadastre-se!</h3>
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