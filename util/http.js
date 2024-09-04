import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-949f4-default-rtdb.asia-southeast1.firebasedatabase.app";
export async function storeExpense(expenseData) {
  const response = await axios.post(
    `${BACKEND_URL}/expenses.json`,
    expenseData
  );
  return response.data.name;
}

export async function fetchExpense() {
  const response = await axios.get(`${BACKEND_URL}/expenses.json`);
  const expenses = Object.entries(response.data).reduce(
    (prev, [key, value]) => [...prev, { id: key, ...value }],
    []
  );
  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(`${BACKEND_URL}/expenses/${id}.json`, expenseData);
}
export function deleteExpense(id) {
  return axios.delete(`${BACKEND_URL}/expenses/${id}.json`);
}
