import styled from "styled-components";
import logo from "../assets/images/logo.png";
import device from "../device";

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
  padding: 2vh 2vw 3vh;
  text-align: left;

  @media ${device.laptop} {
    min-height: 10vh;
    padding: 5vh 5vw;
  }
`;

const Logo = styled.img`
  height: 7vh;
  pointer-events: none;
`;
