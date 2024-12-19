const data = [
    { pair: 'USD/INR', name: 'US Dollar to Indian Rupee', price: 85, open: 84.5, high: 85.5, low: 84.2, close: 84.8, change: 0.3, changePercent: 0.35 },
    { pair: 'EUR/INR', name: 'Euro to Indian Rupee', price: 90, open: 89.5, high: 91, low: 89, close: 90.2, change: 0.7, changePercent: 0.78 },
];

export default function CurrenciesTable() {
    return (
        <table>
            <caption>Currency Exchange Rates</caption>
            <thead>
                <tr>
                    <th>Pair</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Open</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Close</th>
                    <th>Change</th>
                    <th>Change %</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.pair}</td>
                        <td>{row.name}</td>
                        <td>{row.price}</td>
                        <td>{row.open}</td>
                        <td>{row.high}</td>
                        <td>{row.low}</td>
                        <td>{row.close}</td>
                        <td>{row.change}</td>
                        <td>{row.changePercent}%</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

