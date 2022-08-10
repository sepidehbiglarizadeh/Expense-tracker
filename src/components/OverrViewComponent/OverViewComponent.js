import { useState } from "react";
import TransActionForm from "../TransActionForm/TransActionForm";

const OverViewComponent = ({income,expense,addTransaction}) => {
    const [isShow,setIsShow]= useState(false);

  return (
    <>
      <div className="topSection">
        <p>Balance : {income - expense}</p>
        <button onClick={()=>setIsShow((prevState)=> !prevState)}>
            {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TransActionForm addTransaction={addTransaction}/>}
      <div className="resultSection">
        <div className="expenseBox">Expense : <span style={{color:"red"}}>${expense}</span></div>
        <div className="expenseBox">Income : <span>${income}</span></div>
      </div>
    </>
  );
};

export default OverViewComponent;
