import { useContext } from "react";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import TotalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  console.log(transactions);

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
        <strong>R$1000.00</strong>
      </div>
      <div>
        <header>
          <p>Outcomes</p>
          <img src={OutcomeImg} alt="Outcomes" />
        </header>
        <strong>- R$300.00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong>R$700.00</strong>
      </div>
    </Container>
  );
}
