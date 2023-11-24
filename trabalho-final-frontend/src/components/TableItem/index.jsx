import { formatDate } from "../../helpers/dateFilter";
import { categories } from "../../data/categories";
import "./index.css";

// Insira a prop necessária.
export const TableItem = ({item}) => {
  // Insira nos elementos td a className="tableColumn"
  return (
    <tr>
      <td className="tableColumn">{formatDate(item.date)}</td>
      <td className="tableColumn">
        <div
          className="category"
          style={{ color: categories[item.category].color }}
        >
          {categories[item.category].title}
        </div>
      </td>
      <td className="tableColumn">{item.title}</td>
      <td className="tableColumn">
        <div
          className="value"
          style={{
            color: categories[item.category].expense ? "red" : "green",
          }}
        >
         ( ﾉ ﾟｰﾟ)ﾉ R$ {item.value}
        </div>
      </td>
    </tr>
  );
};

export default TableItem; 
