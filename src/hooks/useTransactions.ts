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

const useTransactions = () => {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/db")
      .then((res) => res.json())
      .then((res) => {
        setTransactions(res.transactions);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  return { transactions, loading };
};

export default useTransactions;
