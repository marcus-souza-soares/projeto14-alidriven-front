import styled from "styled-components";
import Header from "../components/Header";
import ProductAtCart from "../components/ProductAtCart";
import UserContext from "../contexts/UserContexts.js";

export default function CartScreen() {
    const cart_list = [
        {
            pictureURL:
                "https://files.tecnoblog.net/wp-content/uploads/2021/11/poco-f3-produto.png",
            name: "Poco F3",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum consectetur non, nesciunt laborum eum iste accusantium veritatis id quibusdam consequatur, ut beatae",
            price: 1800,
        },
        {
            pictureURL:
                "https://files.tecnoblog.net/wp-content/uploads/2021/11/poco-f3-produto.png",
            name: "Poco F3",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum consectetur non, nesciunt laborum eum iste accusantium veritatis id quibusdam consequatur, ut beatae",
            price: 1800,
        },
        {
            pictureURL:
                "https://files.tecnoblog.net/wp-content/uploads/2021/11/poco-f3-produto.png",
            name: "Poco F3",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum consectetur non, nesciunt laborum eum iste accusantium veritatis id quibusdam consequatur, ut beatae",
            price: 1800,
        },
        {
            pictureURL:
                "https://files.tecnoblog.net/wp-content/uploads/2021/11/poco-f3-produto.png",
            name: "Poco F3",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum consectetur non, nesciunt laborum eum iste accusantium veritatis id quibusdam consequatur, ut beatae",
            price: 1800,
        },
        {
            pictureURL:
                "https://files.tecnoblog.net/wp-content/uploads/2021/11/poco-f3-produto.png",
            name: "Poco F3",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum consectetur non, nesciunt laborum eum iste accusantium veritatis id quibusdam consequatur, ut beatae",
            price: 1800,
        },
        {
            pictureURL:
                "https://files.tecnoblog.net/wp-content/uploads/2021/11/poco-f3-produto.png",
            name: "Poco F3",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum consectetur non, nesciunt laborum eum iste accusantium veritatis id quibusdam consequatur, ut beatae",
            price: 1800,
        },
        {
            pictureURL:
                "https://files.tecnoblog.net/wp-content/uploads/2021/11/poco-f3-produto.png",
            name: "Poco F3",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum consectetur non, nesciunt laborum eum iste accusantium veritatis id quibusdam consequatur, ut beatae",
            price: 1800,
        },
    ];
    return (
        <Container>
            <Header />
            {cart_list.map((product) => (
                <ProductAtCart product={product} />
            ))}
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
`;
