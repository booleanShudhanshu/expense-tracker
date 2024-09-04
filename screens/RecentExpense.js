import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDay } from "../util/date";
import { fetchExpense } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverLay from "../components/UI/ErrorOverLay";

const RecentExpense = () => {
  const expensesCtx = useContext(ExpensesContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function getExpense() {
      try {
        const expenses = await fetchExpense();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError("Could not fetch Expense");
      }
      setLoading(false);
    }
    getExpense();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDay(today, 7);
    const expenseDate = new Date(expense.date);
    return expenseDate > date7DaysAgo && expenseDate <= today;
  });

  if (error && !loading) {
    return <ErrorOverLay message={error} />;
  }
  return loading ? (
    <LoadingOverlay />
  ) : (
    <ExpensesOutput
      fallbackText={"No expenses registered for last 7 day"}
      expenses={recentExpenses}
      expensesPeriod={"Last 7 days"}
    />
  );
};

export default RecentExpense;

const styles = StyleSheet.create({});
