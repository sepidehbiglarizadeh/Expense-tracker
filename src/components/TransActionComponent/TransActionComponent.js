import { useEffect, useState } from "react";

const TransActionComponent = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTnx, setFilteredTnx] = useState(transactions);

  const filteredTransactions = (search) => {
    if (!search || search==="") {
      setFilteredTnx(transactions);
      return;
    }
    const filtered = transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filtered);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filteredTransactions(e.target.value);
  };

  useEffect(()=>{
    filteredTransactions(searchItem);
  },[transactions])

  if(!transactions.length) return <h3>Add some transactions</h3>

  return (
    <div>
      <input type="text" value={searchItem} onChange={changeHandler} placeholder="Search for transaction..." className="search"/>
      {filteredTnx.length ?
        filteredTnx.map((t) => {
          return (
            <div
              className="transaction"
              style={{ borderRight: t.type === "expense" && "4px solid red" }}
              key={t.id}
            >
              <span>{t.desc}</span>
              <span>${t.amount}</span>
            </div>
          );
        }) : "No item matchs !"}
    </div>
  );
};

export default TransActionComponent;
