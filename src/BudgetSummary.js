import React, { useContext } from 'react';
import { BudgetContext } from './BudgetContext';

const BudgetSummary = () => {
  const { budget, calculateTotal } = useContext(BudgetContext);

  return (
    <div className="container-fluid">
      {/* Display budget summary */}
    </div>
  );
};

export default BudgetSummary;
