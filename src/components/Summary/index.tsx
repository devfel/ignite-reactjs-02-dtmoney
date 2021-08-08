import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import TotalImg from "../../assets/total.svg";

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
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
