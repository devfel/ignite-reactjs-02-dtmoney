import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import TotalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();
  console.log(transactions);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.totals += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.totals -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      totals: 0,
    }
  );

  return (
    <Container>
      {/* Old way of doing context consumer instead of useContext */}
      {/* <TransactionsContext.Consumer>
        {(data) => {
          console.log(data);
          return null;
        }}
      </TransactionsContext.Consumer> */}
      <div>
        <header>
          <p>Incomes</p>
          <img src={IncomeImg} alt="Incomes" />
        </header>
        <strong>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Outcomes</p>
          <img src={OutcomeImg} alt="Outcomes" />
        </header>
        <strong>- {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(summary.withdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(summary.totals)}</strong>
      </div>
    </Container>
  );
}
