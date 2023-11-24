export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list, date) => {
  let newList = [];
  let [year, month] = date.split("-");

  for (let i in list) {
    if (
      new Date(list[i].date).getFullYear() === parseInt(year) &&
      new Date(list[i].date).getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }

  return newList;
};

export const formatDate = (date) => {
  let year = new Date(date).getFullYear();
  let month = new Date(date).getMonth() + 1;
  let day = new Date(date).getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
};
const addZeroToDate = (n) => (n < 10 ? `0${n}` : `${n}`);

export const formatCurrentMonth = (currentMonth) => {
  let [year, month] = currentMonth.split("-");
  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return `${months[parseInt(month) - 1]} de ${year}`;
};