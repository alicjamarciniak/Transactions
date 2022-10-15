import useTransactions from "../../hooks/useTransactions";
import { Table } from "../../components";

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

  return <Table columns={columns} data={transactions} />;
};

export default TransactionsTable;
