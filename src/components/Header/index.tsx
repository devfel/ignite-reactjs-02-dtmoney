import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

//using props:, but can be destructured into {onOpenNewTransactionModal}: directly
export function Header(props: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="DT Money" />
        <button type="button" onClick={props.onOpenNewTransactionModal}>
          Add Transaction
        </button>
      </Content>
    </Container>
  );
}
