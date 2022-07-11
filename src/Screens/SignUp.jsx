import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
    const [disabled, setDisabled] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_pwd, setConfirm_pwd] = useState("");
    
    const cadastrar = e => {
        e.preventDefault();
        setDisabled(true);
        const validaNome = /^[a-zA-Z]{3,}/;
        const validaEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/;
        const validaSenha = /^[0-9a-zA-Z$*&@#]{3,}$/;

        if (!validaNome.test(name)) {
            return alert("Nome inválido")
        }
        if (!validaEmail.test(email)) {
            return alert('E-mail inválido!');
        }
        if (!validaSenha.test(password)) {
            return alert('Senha inválida! Mínimo de 3 caracteres.');
        }
        if (password !== confirm_pwd) {
            return alert("As senhas se diferem!")
        }
        const dados = {
            name,
            email,
            password
        }
        const promise = axios.post("http://localhost:5000/cadastrar", dados);
        promise.then(res => {
            console.log(res.data);
<<<<<<< HEAD
            setDisabled(false)
            navigate('/signin');
=======
            setDisabled(false);
            navigate("/signin");
>>>>>>> main
        })
        promise.catch(e => {
            console.log("Não foi possivel encontrar a rota")
            setDisabled(false)
        })
    }

    return (
        <Container>
            <div className="title">
                <h1 className="yellow">Ali</h1>
                <h1 className="red">Driven</h1>
            </div>
            <form onSubmit={cadastrar}>
                <input
                    type="text"
                    placeholder="Nome"
                    disabled={disabled}
                    onChange={e => setName(e.target.value)}
                    value={name}
                    required />

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

                <input
                    type="password"
                    placeholder="Confirmar senha"
                    disabled={disabled}
                    onChange={e => setConfirm_pwd(e.target.value)}
                    value={confirm_pwd}
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