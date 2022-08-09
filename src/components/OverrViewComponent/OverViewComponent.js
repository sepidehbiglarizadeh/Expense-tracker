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
        <p>Expense : {expense}</p>
        <p>Income : {income}</p>
      </div>
    </>
  );
};

export default OverViewComponent;
