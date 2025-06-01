import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchCoinChart } from '../../redux/coins/coinChartSlice';
import { useParams } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const CryptoChart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { coin, status, error } = useAppSelector((state) => state.coinChart);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      dispatch(fetchCoinChart(id));
    }
  }, [dispatch, id]);

  if (status === 'loading') return <div className="loading">Loading coin Chart...</div>;
  if (status === 'failed') return <div className="error">Error: {error}</div>;
  if (!coin || !coin.prices) return <div className="no-data">No Chart available</div>;

  const chartData = coin.prices.map(([timestamp, price]) => ({
    time: new Date(timestamp).toLocaleDateString(),
    price: price,
  }));

  return (
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
          stroke="#8884d8" 
          strokeWidth={2} 
          dot={false}
          activeDot={{ r: 6, strokeWidth: 0 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CryptoChart;