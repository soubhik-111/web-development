import React, { useState } from 'react';

const AddExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount && category) {
      const newExpense = {
        description,
        amount: parseFloat(amount),
        category,
        date: new Date().toLocaleString(),
      };
      onAddExpense(newExpense);
      setDescription('');
      setAmount('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Stationery">Stationery</option>
        <option value="Transport">Transport</option>
      </select>
      <button type="submit" disabled={!description || !amount || !category}>
        Add Expense
      </button>
    </form>
  );
};

export default AddExpenseForm;
