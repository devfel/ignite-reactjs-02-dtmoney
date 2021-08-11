import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

// // Moving transactions data to the context
// interface Transaction {
//   id: number;
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
//   createdAt: string;
// }

export function TransactionTable() {
  const { transactions } = useContext(TransactionsContext);

  // // Moving transactions data to the context
  // const [transactions, setTransactions] = useState<Transaction[]>([]);

  // // // Using Fetch instead of Axios
  // //   useEffect(() => {
  // //     fetch("/transactions")
  // //       .then((response) => response.json())
  // //       .then((data) => console.log(data));
  // //   }, []);

  // // Using Axios
  // useEffect(() => {
  //   api.get("/transactions").then((response) => setTransactions(response.data.transactions));
  // }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                {/* For BR curency the conf is:  {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(transaction.amount)} */}
                <td className={transaction.type}>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(transaction.amount)}</td>
                <td>{transaction.category}</td>
                <td>{new Intl.DateTimeFormat("en-US").format(new Date(transaction.createdAt))}</td>
              </tr>
            );
          })}

          {/* Example of one item.
          <tr>
            <td>Water</td>
            <td className="withdraw">- 100.00</td>
            <td>Bill</td>
            <td>15/01/2020</td>
          </tr> */}
        </tbody>
      </table>
    </Container>
  );
}
