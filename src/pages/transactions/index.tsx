import styled from "styled-components";
import TransactionsTable from "./TransactionsTable";

const Transactions = () => {
  return (
    <Container>
      <TransactionsTable />
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  padding: 0 10px;
`;

export default Transactions;
