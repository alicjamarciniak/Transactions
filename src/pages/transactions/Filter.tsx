import styled from "styled-components";
import { Card } from "../../components";
import device from "../../device";

const Filter = () => {
  return (
    <Component className="Card">
      <Card>Filter</Card>
    </Component>
  );
};

const Component = styled.div`
  margin-top: 10px;

  @media ${device.laptop} {
    margin: 0 5px 0 0;
  }
`;

export default Filter;
