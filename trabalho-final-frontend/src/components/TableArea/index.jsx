import { TableItem } from "../TableItem";
import "./index.css";

export const TableArea = ({ list }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="tableHeadColumn" style={{ width: 100 }}>
            Data
          </th>
          <th className="tableHeadColumn" style={{ width: 130 }}>
            Categoria
          </th>
          <th className="tableHeadColumn" style={{ width: 140 }}>
            Título
          </th>
          <th className="tableHeadColumn" style={{ width: 150 }}>
            Valor
          </th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
        <TableItem key={index} item={item} />
        ))}
      </tbody>
    </table>
  );
};