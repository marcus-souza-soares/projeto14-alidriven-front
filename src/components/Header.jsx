import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

export default function Header() {
  const [side_menu, setSide_menu] = useState(false);
  return (
    <>
      <Container>
        <Link to="/">
        <div className="title">
          <h1 className="yellow">Ali</h1>
          <h1 className="red">Driven</h1>
        </div>
        </Link>
        <Options>
          <ion-icon name="person-outline" onClick={() => setSide_menu(!side_menu)}></ion-icon>
          <Link to="/cart">
            <ion-icon name="cart-outline"></ion-icon>
          </Link>
        </Options>
      </Container>
      {side_menu ? <SideMenu>  
        <div className="profile">
        <ion-icon name="person-outline" onClick={() => setSide_menu(!side_menu)}></ion-icon>
        </div>
        <span><Link to="/signin"><h2>Sign-in</h2></Link>/<h2>Sign-out</h2></span>
      </SideMenu> : null}
    </>
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
  ion-icon {
    width: 20px;
    height: 20px;
  }
`;

const SideMenu = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 20vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  .profile{
    border: 1px solid black;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-bottom: 15px;
  }
  ion-icon {
    width: 30px;
    height: 30px;
  }
  span{
    display: flex;
  }
`;
