import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './styles.css';
import NotFound from './NotFound';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(savedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  const editExpense = (index) => {
    const expenseToEdit = expenses[index];
    // Implement the logic to edit the expense
  };
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path="/view-list" element={<ExpenseList xpenses={expenses} onDeleteExpense={deleteExpense} onEditExpense={editExpense} />} />
          <Route path="/add-list" element={<AddExpenseForm onAddExpense={addExpense} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router >
    </>
  );
};


export default App;
