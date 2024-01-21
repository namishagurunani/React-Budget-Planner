import React, { createContext, useState } from 'react';

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState(2000);
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const removeExpense = (expenseName) => {
    setExpenses(expenses.filter((expense) => expense.name !== expenseName));
  };

  const calculateTotal = () => {
    return expenses.reduce((total, expense) => total + expense.cost, 0);
  };

  return (
    <BudgetContext.Provider value={{ budget, setBudget, expenses, addExpense, removeExpense, calculateTotal }}>
      {children}
    </BudgetContext.Provider>
  );
};
