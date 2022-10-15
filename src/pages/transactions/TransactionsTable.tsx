import useTransactions from "../../hooks/useTransactions";
import { Table } from "../../components";
import styled from "styled-components";

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
      <Table columns={columns} data={transactions} />
    </Component>
  );
};

const Component = styled.div`
  display: flex;
  justify-content: center;
`;

export default TransactionsTable;
