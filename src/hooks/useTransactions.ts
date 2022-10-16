import { useEffect, useState } from "react";

type Transaction = {
  id: number;
  amount: number;
  beneficiary: string;
  account: string;
  address: string;
  date: string;
  description: string;
};

const formatDate = (date: string): string => {
  return date.split("T").join(", ");
};

const parseTransactions = (transactions: Transaction[]): Transaction[] => {
  return transactions.map((transaction) => {
    return {
      ...transaction,
      id: transaction.id + 1,
      date: formatDate(transaction.date),
    };
  });
};

const useTransactions = () => {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/db")
      .then((res) => res.json())
      .then((res) => {
        const transactions = parseTransactions(res.transactions);
        setTransactions(transactions);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  return { transactions, loading, currency: "PLN" };
};

export default useTransactions;
