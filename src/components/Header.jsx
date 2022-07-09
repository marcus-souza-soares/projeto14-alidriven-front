import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <div className="title">
        <h1 className="yellow">Ali</h1>
        <h1 className="red">Driven</h1>
      </div>
      <Options>
        <ion-icon name="person-outline"></ion-icon>
        <Link to="/cart">
          <ion-icon name="cart-outline"></ion-icon>
        </Link>
      </Options>
    </Container>
  );
}

const Container = styled.div`
  padding: 16px;
  background-color: #d9d0d0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 35px;
  }
  .yellow {
    color: #ef8f0d;
  }
  .red {
    color: #dd2e1f;
  }
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  ion-icon{
    width: 20px;
    height: 20px;
  }
`;
