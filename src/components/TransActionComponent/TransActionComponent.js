const TransActionComponent = ({ transactions }) => {
  return (
    <div>
      {transactions.map((t) => {
        return <div key={t.id}>{t.desc}</div>;
      })}
    </div>
  );
};

export default TransActionComponent;
