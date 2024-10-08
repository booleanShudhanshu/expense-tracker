export function getFormattedDate(date) {
  date = new Date(date);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function getDateMinusDay(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
