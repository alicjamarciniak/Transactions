import styled from "styled-components";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <Header>
      <Logo src={logo} className="App-logo" alt="logo" />
    </Header>
  );
};

export default Navbar;

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  min-height: 10vh;
  padding: 5vh 5vw;
  text-align: left;
`;

const Logo = styled.img`
  height: 7vh;
  pointer-events: none;
`;
