import styled from "styled-components";
import TransactionsTable from "./TransactionsTable";
import AddForm from "./AddForm";
import Balance from "./Balance";
import Filter from "./Filter";
import device from "../../device";
import useTransactions from "../../hooks/useTransactions";

const Transactions = () => {
  const { transactions, currency } = useTransactions();

  return (
    <Container className="transactions">
      <Panel>
        <Section>
          <AddForm />
        </Section>
        <Section>
          <StyledBalance transactions={transactions} currency={currency} />
          <Filter transactions={transactions} />
        </Section>
      </Panel>
      <TransactionsTable transactions={transactions} currency={currency} />
    </Container>
  );
};

const Container = styled.div`
  width: auto;
  padding: 0 10px;

  @media ${device.laptop} {
    width: fit-content;
  }
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  @media ${device.laptop} {
    flex-direction: row-reverse;
  }
`;

const Section = styled.div`
  flex: 1;
  flex-direction: column;
`;

const StyledBalance = styled(Balance)`
  @media ${device.laptop} {
    margin-right: 10px;
  }
`;

export default Transactions;
