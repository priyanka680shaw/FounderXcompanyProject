import currencyStyle from "./currencieStyle.module.css";



const CurrenciesTable = () => {

  const mainContainer = {
    width: "100%",
    boxShadow: "0px 0px 10px 2px gray",
  };
  const data = [
    { name: 'USD/INR', bid: 76.25, ask: 76.25, high: 76.25, low: 76.25, chg: '-0.31%', chgPercent: '-0.31%', time: '01:02:44', positive: false },
    { name: 'EUR/INR', bid: 76.25, ask: 76.25, high: 76.25, low: 76.25, chg: '-0.31%', chgPercent: '-0.31%', time: '01:02:44', positive: false },
    { name: 'EUR/USD', bid: 76.25, ask: 76.25, high: 76.25, low: 76.25, chg: '-0.31%', chgPercent: '-0.31%', time: '01:02:44', positive: false },
    { name: 'GBP/USD', bid: 76.25, ask: 76.25, high: 76.25, low: 76.25, chg: '-0.31%', chgPercent: '-0.31%', time: '01:02:44', positive: false },
    { name: 'XAU/USD', bid: 76.25, ask: 76.25, high: 76.25, low: 76.25, chg: '+0.31%', chgPercent: '+0.31%', time: '01:02:44', positive: true },
  ];

  return (
    <div className={currencyStyle .tableContainer}>
      <h2 className={currencyStyle .header}>Currencies</h2>
      <table className={currencyStyle .table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Bid</th>
            <th>Ask</th>
            <th>High</th>
            <th>Low</th>
            <th>Chg</th>
            <th>Chg%</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.bid}</td>
              <td>{row.ask}</td>
              <td>{row.high}</td>
              <td>{row.low}</td>
              <td className={row.positive ? currencyStyle .positive : currencyStyle .negative}>{row.chg}</td>
              <td className={row.positive ? currencyStyle .positive : currencyStyle .negative}>{row.chgPercent}</td>
              <td>
                {row.time} <span className={currencyStyle .icon}>⏱️</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrenciesTable;
