import { useState } from "react";
import TransActionComponent from "../TransActionComponent/TransActionComponent";


const ExpenseApp = () => {
    const [expense,setExpense]=useState(0);
    const [income,setIncome]=useState(0);
    const [transactions,setTransactions]=useState([]);

  return <section className="container">
    <div className="topSection">
        <p>Balance : {income-expense}</p>
        <button>Add</button>
    </div>
    <div className="resultSection">
        <p>Expense : {expense}</p>
        <p>Income : {income}</p>
    </div>
    <TransActionComponent transactions={transactions}/>
  </section>;
};

export default ExpenseApp;
