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
`;

export default Transactions;
