import styled from "styled-components";
import { Card } from "../../components";
import device from "../../device";

const Balance = () => {
  return (
    <Component>
      <Card>Balance</Card>
    </Component>
  );
};

const Component = styled.div`
  margin-top: 10px;

  @media ${device.laptop} {
    margin: 0 5px 10px 0;
  }
`;

export default Balance;
