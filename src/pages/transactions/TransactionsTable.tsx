import { Transaction } from "../../hooks/useTransactions";
import { Table, Card, Pagination } from "../../components";
import styled from "styled-components";
import device from "../../device";
import axios from "axios";
// import usePagination from "../../hooks/usePagination";

// export const PaginationContext = React.createContext({
//   currentPageContent: [],
//   setCurrentPageContent: () => {},
// });

const NUMBER_OF_ITEMS = 10;

type TransactionsTableProps = {
  transactions: Transaction[];
  currency: string;
};

const TransactionsTable = ({
  transactions,
  currency,
}: TransactionsTableProps) => {
  const columns = [
    {
      title: "Id",
      field: "id",
    },
    {
      title: `Amount (${currency})`,
      field: "amount",
    },
    {
      title: "Beneficiary",
      field: "beneficiary",
    },
    {
      title: "Account",
      field: "account",
    },
    {
      title: "Date",
      field: "date",
    },
    {
      title: "Description",
      field: "description",
    },
  ];

  // TODO: Unfortunately I couldn't fix the pagination in time
  // const [currentRecords, setCurrentRecords] = useState<Transaction[]>([]);

  const onDelete = (index: number) => {
    axios.delete(`http://localhost:3000/transactions/${index - 1}`);
  };

  // TODO: Add rerendering after delete

  return (
    <Component>
      <StyledCard>
        <Title>Transactions List</Title>
        <Table columns={columns} data={transactions} onDelete={onDelete} />
        <StyledPagination
          array={transactions}
          pageLimit={NUMBER_OF_ITEMS}
          // setRecordsCallback={setCurrentRecords}
        />
      </StyledCard>
    </Component>
  );
};

const Component = styled.div`
  justify-content: center;
  margin: 0 10px;
`;

const StyledCard = styled(Card)`
  max-height: 60vh;
`;

const Title = styled.h4`
  font-family: Roboto-Bold;
  font-size: 16px;
  margin: 0;
  padding: 0 10px;
  text-align: left;

  @media ${device.laptop} {
    font-size: 20px;
    padding: 0 20px;
  }
`;

const StyledPagination = styled(Pagination)`
  margin-top: 10px;
`;

export default TransactionsTable;
