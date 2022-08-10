const TransActionComponent = ({ transactions }) => {
  return (
    <div>
      {transactions.length &&
        transactions.map((t) => {
          return (
            <div className="transaction" style={{borderRight:t.type==="expense" &&"4px solid red"}} key={t.id}>
              <span>{t.desc}</span>
              <span>${t.amount}</span>
            </div>
          );
        })}
    </div>
  );
};

export default TransActionComponent;
