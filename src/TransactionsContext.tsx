import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

// // Another way
// type TransactionInput = Pick<Transaction, "title" | "amount" | "type" | "category">;

// // Another way
// interface TransactionInput {
//     title: string;
//     amount: number;
//     type: string;
//     category: string;
//   }

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Using Axios
  useEffect(() => {
    api.get("/transactions").then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", { ...transactionInput, createdAt: new Date() });
    // // if date is not needed to be sent
    // const response = await api.post("/transactions", transactionInput);
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return <TransactionsContext.Provider value={{ transactions, createTransaction }}>{children}</TransactionsContext.Provider>;
}
