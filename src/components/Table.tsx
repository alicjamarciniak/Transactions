import styled from "styled-components";
import device from "../device";

type TableProps<T> = {
  data: T[];
  columns: { title: string; field: string }[];
};

function Table<T extends Object>({ data, columns }: TableProps<T>) {
  return (
    <Component>
      <StyledTable>
        <Thead>
          <tr>
            {columns.map((column, index) => (
              <Th key={`th-${index}`}>{column.title}</Th>
            ))}
          </tr>
        </Thead>
        <tbody>
          {data.map((row, index) => (
            <Tr key={`tr-${index}`}>
              {columns.map(({ field }, index) => (
                <Td key={`td-${index}`}>
                  {row.hasOwnProperty(field) ? row[field] : null}
                </Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </StyledTable>
    </Component>
  );
}
const Component = styled.div`
  overflow-x: auto;
  overflow-x: auto;
  max-height: 50vh;

  @media ${device.laptop} {
    overflow-y: visible;
    max-height: none;
  }
`;

const StyledTable = styled.table`
  background-color: rgb(220, 223, 227);
  border-radius: 8px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  color: rgb(28, 28, 28);
  font-size: 12px;
  padding: 10px 5px;

  @media ${device.laptop} {
    font-size: 14px;
    padding: 20px 5px;
  }
`;

const Thead = styled.thead`
  box-shadow: 0 4px 6px -6px #222;
`;

const Th = styled.th`
  padding: 10px 5px;
  text-align: left;

  @media ${device.laptop} {
    padding: 15px 10px;
  }
`;

const Tr = styled.tr`
  box-shadow: 0 2px 6px -6px #222;
`;

const Td = styled.td`
  padding: 10px;
  text-align: left;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${device.laptop} {
    max-width: none;
    padding: 15px;
  }
`;

export default Table;
