import React from 'react';
import { BudgetProvider } from './BudgetContext';
import BudgetForm from './BudgetForm';
import ExpenseList from './ExpenseList';
import BudgetSummary from './BudgetSummary';
import './BudgetForm.css';



function App() {
  return (
    <BudgetProvider>
      <div>
        <h1 style={{textAlign:"center"}}>📝My Budget Planner</h1>
      </div>
      <BudgetSummary />
      <ExpenseList />
      <BudgetForm />
    </BudgetProvider>
  );
}

export default App;
