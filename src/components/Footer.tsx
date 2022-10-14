import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Component>
        <Background>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            height="100%"
            width="100%"
          >
            <path
              d="M-2.54,78.47 C271.16,158.39 389.10,-75.47 684.81,121.88 L500.00,150.00 L0.00,150.00 Z"
              stroke="none"
              fill="rgb(39, 9, 121)"
            ></path>
          </svg>
        </Background>
        <Text>
          <p>Created by Alicja Marciniak</p>
        </Text>
      </Component>
    </>
  );
};

const Component = styled.div`
  position: relative;
`;

const Background = styled.div`
  height: 15vh;
  overflow: hidden;
`;

const Text = styled.div`
  bottom: 10px;
  color: rgb(255, 255, 255);
  font-size: 12px;
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 10;
`;

export default Footer;
