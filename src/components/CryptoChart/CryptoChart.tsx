import React from 'react';
import { useParams } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useLazyGetCoinChartQuery } from '../../redux/services/coinGeckoApi';
import './CryptoChart.css';

const CryptoChart: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const periods = {
  '1D': 1,
  '7D': 7,
  '1M': 30,
  '3M': 90,
  '1Y': 365,
};

  const defaultDays = 7;

  const [trigger, { data: coin, isLoading, isError, error }] = useLazyGetCoinChartQuery();

  React.useEffect(() => {
    if (id) {
      trigger({ id, days: defaultDays });
    }
  }, [id, trigger]);

  if (isLoading) return <div className="loading">Loading coin Chart...</div>;
  if (isError) return <div className="error">Error: {String(error)}</div>;
  if (!coin || !coin.prices) return <div className="no-data">No Chart available</div>;

  const chartData = coin.prices.map(([timestamp, price]) => ({
    time: new Date(timestamp).toLocaleDateString(),
    price: price,
  }));

  return (
    <div className="crypto-chart">
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <XAxis dataKey="time" />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip 
          formatter={(value) => [`$${Number(value).toFixed(2)}`, 'Price']}
          labelStyle={{ color: '#333', fontWeight: 'bold' }}
        />
        <Line 
          type="monotone" 
          dataKey="price" 
          stroke="red" 
          strokeWidth={2} 
          dot={false}
          activeDot={{ r: 6, strokeWidth: 0 }}
        />
      </LineChart>
    </ResponsiveContainer>
    <div className="chart-controls">
        {Object.entries(periods).map(([label, days]) => (
          <button
            key={days}
            onClick={() => id && trigger({ id, days })}
            className="chart-period-button"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CryptoChart;