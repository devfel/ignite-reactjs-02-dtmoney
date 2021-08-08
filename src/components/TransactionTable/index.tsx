import { Container } from "./styles";

export function TransactionTable() {
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
          <tr>
            <td>Website Development</td>
            <td className="deposit">1000.00</td>
            <td>Job</td>
            <td>13/01/2020</td>
          </tr>
          <tr>
            <td>Water</td>
            <td className="withdraw">- 100.00</td>
            <td>Bill</td>
            <td>15/01/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
