type TableProps<T> = {
  data: T[];
  columns: { title: string; field: string }[];
};

function Table<T extends Object>({ data, columns }: TableProps<T>) {
  return (
    <div>
      <table>
        <thead>
          {columns.map((column) => (
            <th>{column.title}</th>
          ))}
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              {columns.map(({ field }) => (
                <td>{row.hasOwnProperty(field) ? row[field] : null}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
