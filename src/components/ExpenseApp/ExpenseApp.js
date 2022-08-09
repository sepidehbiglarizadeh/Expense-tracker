import { useEffect, useState } from "react";
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

    useEffect(()=>{
        let exp=0;
        let inc=0;
        transactions.forEach((t)=>{
            t.type ==="expense" ?(exp= exp + parseFloat(t.amount)) : (inc= inc + parseFloat(t.amount));
        });
        setExpense(exp);
        setIncome(inc);
    },[transactions])

  return <section className="container">
    <OverViewComponent income={income} expense={expense} addTransaction={addTransaction}/>
    <TransActionComponent transactions={transactions}/>
  </section>;
};

export default ExpenseApp;
