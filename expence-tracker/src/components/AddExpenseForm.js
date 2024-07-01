import React, { useState } from 'react';

const AddExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      description,
      amount: parseFloat(amount),
      category,
      date: new Date().toLocaleString(),
    };

    onAddExpense(newExpense);

    // Clear the form
    setDescription('');
    setAmount('');
    setCategory('');

  };

  return (
    <div className='container add-expense'>
      <form className="add-expense-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select id="category" value={category} onChange={handleCategoryChange} required>
            <option value="">Select a category</option>
            <option value="stationary">Stationary</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
          </select>
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
