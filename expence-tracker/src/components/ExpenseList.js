import React, { useState } from 'react';

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
  const [filterCategory, setFilterCategory] = useState('');

  const handleDelete = (index) => {
    onDeleteExpense(index);
  };

  const handleEdit = (expense, index) => {
    onEditExpense(expense, index);
  };

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const filteredExpenses = expenses && filterCategory
    ? expenses.filter(expense => expense.category === filterCategory)
    : expenses;

  const totalAmount = filteredExpenses && filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className='container' style={{paddingTop: "1rem"}}>
      <div className="expense-list">
        <div className="filter-container">
          <label htmlFor="category-filter">Filter by Category:</label>
          <select id="category-filter" value={filterCategory} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="stationary">Stationary</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
          </select>
        </div>
        <div>
          {filteredExpenses && filteredExpenses.map((expense, index) => (
            <li key={index} className="expense-item">
              <div className="expense-details">
                <span>{expense.description}</span>
                <span>${expense.amount && expense.amount.toFixed(2)}</span>
                <span>{expense.category}</span>
                <span>{expense.date}</span>
              </div>
              <div className="expense-actions">
                <button onClick={() => handleEdit(expense, index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </li>
          ))}
        </div>
        <div className="total-amount">
          Total: ${totalAmount && totalAmount.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
