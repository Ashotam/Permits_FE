import { useMemo } from "react";
import { useTable,Column } from "react-table";
interface TableProps<T extends Record<string, unknown>> {
mockData: T[];
  columns: Column<T>[];
}
const Table = <T extends Record<string, unknown>>({
  mockData,
  columns
}: TableProps<T>)  => {
  const data = useMemo(() => [...mockData], [mockData]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns, // useTable hook takes in memoized columns and data to be displayed
    data,
  });   

  return (  
    <>
      {/* apply the table props */}
      <table {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row, i) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </>
  );
};

export default Table;