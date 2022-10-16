import useTransactions from "../../hooks/useTransactions";
import { Table, Card } from "../../components";
import styled from "styled-components";
import device from "../../device";

const TransactionsTable = () => {
  const { transactions } = useTransactions();
  const columns = [
    {
      title: "Id",
      field: "id",
    },
    {
      title: "Amount",
      field: "amount",
    },
    {
      title: "Beneficiary",
      field: "beneficiary",
    },
    {
      title: "Account",
      field: "account",
    },
    {
      title: "Date",
      field: "date",
    },
    {
      title: "Description",
      field: "description",
    },
  ];

  return (
    <Component>
      <StyledCard>
        <Title>Transactions List</Title>
        <Table columns={columns} data={transactions} />
      </StyledCard>
    </Component>
  );
};

const Component = styled.div`
  justify-content: center;
  margin: 0 10px;
`;

const StyledCard = styled(Card)`
  max-height: 60vh;
`;

const Title = styled.h4`
  font-family: Roboto-Bold;
  font-size: 16px;
  margin: 0;
  padding: 0 10px;
  text-align: left;

  @media ${device.laptop} {
    font-size: 20px;
    padding: 0 20px;
  }
`;

export default TransactionsTable;
