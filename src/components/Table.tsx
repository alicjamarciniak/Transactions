import styled from "styled-components";

type TableProps<T> = {
  data: T[];
  columns: { title: string; field: string }[];
};

function Table<T extends Object>({ data, columns }: TableProps<T>) {
  return (
    <TableContainer>
      <Thead>
        {columns.map((column) => (
          <Th>{column.title}</Th>
        ))}
      </Thead>
      <tbody>
        {data.map((row) => (
          <Tr>
            {columns.map(({ field }) => (
              <Td>{row.hasOwnProperty(field) ? row[field] : null}</Td>
            ))}
          </Tr>
        ))}
      </tbody>
    </TableContainer>
  );
}

const TableContainer = styled.table`
  background-color: rgb(220, 223, 227);
  border-radius: 8px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  color: rgb(28, 28, 28);
  font-size: 14px;
  padding: 20px 5px;
`;

const Thead = styled.thead`
  box-shadow: 0 4px 6px -6px #222;
`;

const Th = styled.th`
  padding: 15px 10px;
  text-align: left;
`;

const Tr = styled.tr`
  box-shadow: 0 2px 6px -6px #222;
`;

const Td = styled.td`
  padding: 15px;
  text-align: left;
`;

export default Table;
