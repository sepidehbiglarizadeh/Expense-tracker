import { useState } from "react";
import OverViewComponent from "../OverrViewComponent/OverViewComponent";
import TransActionComponent from "../TransActionComponent/TransActionComponent";


const ExpenseApp = () => {
    const [expense,setExpense]=useState(0);
    const [income,setIncome]=useState(0);
    const [transactions,setTransactions]=useState([]);

    const addTransaction= (formValues)=>{
        setTransactions([...transactions,{...formValues,id: Date.now}]);
        console.log(transactions);
    }

  return <section className="container">
    <OverViewComponent income={income} expense={expense} addTransaction={addTransaction}/>
    <TransActionComponent transactions={transactions}/>
  </section>;
};

export default ExpenseApp;
