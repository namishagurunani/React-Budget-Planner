import React, { useContext } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BudgetContext } from './BudgetContext';

const ExpenseList = () => {
  const { expenses, deleteExpense } = useContext(BudgetContext);

  return (
    <div className="container">
      {/* Display expenses list */}
    </div>
  );
};

export default ExpenseList;
