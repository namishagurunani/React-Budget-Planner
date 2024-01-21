import React, { useContext, useRef, useState, useEffect } from 'react';
import { BudgetContext } from './BudgetContext';

const BudgetForm = () => {
  const { budget, addExpense, removeExpense, expenses } = useContext(BudgetContext);
  const nameRef = useRef();
  const costRef = useRef();
  const [remainingBudget, setRemainingBudget] = useState(budget);
  const [spentSoFar, setSpentSoFar] = useState(0);

  useEffect(() => {
    // Calculate total spent whenever expenses change
    const totalSpent = expenses.reduce((total, expense) => total + expense.cost, 0);
    setRemainingBudget(budget - totalSpent);
    setSpentSoFar(totalSpent);
  }, [budget, expenses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseName = nameRef.current.value;
    const expenseCost = parseFloat(costRef.current.value);

    if (!expenseName || isNaN(expenseCost)) {
      alert('Please enter valid expense details.');
      return;
    }

    // Add the expense
    addExpense({ name: expenseName, cost: expenseCost });

    // Clear the input fields
    nameRef.current.value = '';
    costRef.current.value = '';
  };

  const handleRemove = (expenseName) => {
    // Remove the expense
    removeExpense(expenseName);
  };

  return (
    <div className="main_container">
      <div className="container2">
        <h4> Budget: Rs.2000</h4>
        <h4>Remaining Budget: Rs.{remainingBudget}</h4>
        <h4>Spent So Far:{spentSoFar}</h4>
      </div>
      <h3>Expenses</h3>
      {expenses.length === 0 ? (
        <p className="text-success">No expenses added yet.</p>
      ) : (
        <ul style={{ listStyle: "none" }}>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.name}: Rs.{expense.cost}
              <button className="remove-button" onClick={() => handleRemove(expense.name)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h2>Add Expenses</h2>
      <form className="container" onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <div style={{ width: '48%' }}>
            <label>Name</label>
            <input type="text" className="form-control" ref={nameRef} />
          </div>
          <div style={{ width: '48%' }}>
            <label className="form-label">Cost</label>
            <input type="number" className="form-control" ref={costRef} />
          </div>
        </div>
        <button type="submit" className="button">
          Save
        </button>
      </form>
    </div>
  );
};

export default BudgetForm;
