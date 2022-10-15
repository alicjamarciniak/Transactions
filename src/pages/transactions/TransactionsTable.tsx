import useTransactions from "../../hooks/useTransactions";

const TransactionsTable = () => {
  const { transactions } = useTransactions();

  return (
    <>
      {transactions.map((transaction) => (
        <p>{JSON.stringify(transaction)}</p>
      ))}
    </>
  );
};

export default TransactionsTable;
