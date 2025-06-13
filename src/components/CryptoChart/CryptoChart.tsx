import React from 'react';
import { useParams } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useLazyGetCoinChartQuery } from '../../redux/services/coinGeckoApi';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import './CryptoChart.css';
import { Loader } from '../Loader/Loader';

const periods = {
  '1D': 1,
  '7D': 7,
  '1M': 30,
  '3M': 90,
  '1Y': 365,
};

const defaultDays = 7;

const CryptoChart: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedPeriod, setSelectedPeriod] = React.useState(defaultDays);

  const [trigger, { data: coin, isLoading, isError, error }] = useLazyGetCoinChartQuery();

  React.useEffect(() => {
    if (id) {
      trigger({ id, days: selectedPeriod });
    }
  }, [id, trigger, selectedPeriod]);

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage error={error} />;
  if (!coin || !coin.prices) return <div className="no-data">No Chart available</div>;

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    if (selectedPeriod === 1) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    if (selectedPeriod === 7) {
      return (
        date.toLocaleDateString([], { day: '2-digit', month: '2-digit' }) +
        ' ' +
        date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    }
    return date.toLocaleDateString();
  };

  const chartData = coin.prices.map(([timestamp, price]) => ({
    time: formatTime(timestamp),
    price: price,
  }));

  return (
    <div className="crypto-chart">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="time" minTickGap={20} />
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
            onClick={() => setSelectedPeriod(days)}
            className={`chart-period-button ${selectedPeriod === days ? 'active' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CryptoChart;
