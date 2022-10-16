import styled from "styled-components";
import { Card } from "../../components";
import device from "../../device";

const AddForm = () => {
  return (
    <Component className="add-form">
      <Card>AddForm</Card>
    </Component>
  );
};

const Component = styled.div`
  height: 100%;
  display: grid;

  @media ${device.laptop} {
    margin: 0 0 0 5px;
  }
`;

export default AddForm;
