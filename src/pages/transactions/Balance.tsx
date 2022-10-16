import styled from "styled-components";
import { Card } from "../../components";
import device from "../../device";
import useTransactions from "../../hooks/useTransactions";

const Balance = () => {
  const { transactions, currency } = useTransactions();
  const balance = transactions
    .reduce((accumulator, transaction) => accumulator + transaction.amount, 0)
    .toFixed(2);

  return (
    <Component>
      <Card>
        <h4>
          Your current balance:{" "}
          <Amount>
            {balance} {currency}
          </Amount>
        </h4>
      </Card>
    </Component>
  );
};

const Component = styled.div`
  margin-top: 10px;

  @media ${device.laptop} {
    margin: 0 5px 10px 0;
  }
`;

const Amount = styled.span`
  font-family: Roboto-Bold;
  font-weight: 1000;
  font-size: 20px;
  margin-left: 10px;
`;

export default Balance;
