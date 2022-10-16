import styled from "styled-components";
import { Card, Select } from "../../components";
import device from "../../device";
import useTransactions from "../../hooks/useTransactions";

const Filter = () => {
  const { transactions } = useTransactions();
  const filterData = transactions
    .map(({ id, beneficiary }) => ({
      id,
      option: beneficiary,
    }))
    .filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.option === value.option)
    );

  return (
    <Component className="Card">
      <Card>
        <Select data={filterData} placeholder="Select beneficiaries" />
        <button>Reset filter</button>
      </Card>
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
