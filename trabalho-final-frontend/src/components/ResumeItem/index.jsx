import "./index.css";

// Insira as props necessárias
export const ResumeItem = ({color, value}) => {
  return (
    <div className="resume-container">
      <div className="title">
        <title>Itens</title>
        <div className="info" style={{ color: color }}>: R${value}</div>
      </div>
    </div>
  )
};

export default ResumeItem;

{
  /*
Crie um componente que tenha uma div pai de className="resume-container".
Dentro dela crie uma div com className="title" e dentro dela o valor de title,
Crie uma div com className="info" style={{ color: color }} e dentro dela: R$ {value}
*/
};


