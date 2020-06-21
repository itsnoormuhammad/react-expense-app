import React from 'react';
import Header from './components/Header';
import Balance from "./components/Balance";
import IncomeExpence from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import './App.css';
import {GlobalProvider} from './context/GlobalContext';
function App() {
    return (
        <GlobalProvider>
        <Header />
        <div className="container">
        <Balance />
        <IncomeExpence/>
        <TransactionList/>
        <AddTransaction />
        </div>
        </GlobalProvider>
);
}

export default App;