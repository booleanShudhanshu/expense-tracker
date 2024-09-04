import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = ({}) => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      fallbackText={"No registered expenses found!!"}
      expenses={expensesCtx.expenses}
      expensesPeriod={"Total"}
    />
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
