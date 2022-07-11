import axios from "axios";

export function addingProduct(product, token, navigate){
    if(!token){
        alert('Necessário estar logado para adicionar itens no carrinho'); 
        navigate("/signin");     
        return ;
    }
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    console.log(config);
    console.log(token);
    axios.put('http://localhost:5000/cart', product, config).then(()=>{
        navigate('/cart');
    }).catch((r)=>{
        console.log(r.response.data);
        alert('Não foi possível adicionar item no carrinho.');
    });
}