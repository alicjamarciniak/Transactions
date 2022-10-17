import { useEffect, useState } from "react";
import axios from "axios";

export type Transaction = {
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
    axios
      .get("http://localhost:3000/transactions")
      .then(({ data }) => {
        const transactions = parseTransactions(data);
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
