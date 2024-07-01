import React from 'react';

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
  const totalExpense = expenses && expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="expense-list">
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses && expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>{expense.date}</td>
              <td>
                <button onClick={() => onEditExpense(index)}>Edit</button>
                <button onClick={() => onDeleteExpense(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{totalExpense}</td>
            <td colSpan="3"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
