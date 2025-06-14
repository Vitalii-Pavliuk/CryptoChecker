import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './CryptoChart.css';
import type { CoinChart } from '../../types/coinTypes';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const periods = {
  '1D': 1,
  '7D': 7,
  '1M': 30,
  '3M': 90,
  '1Y': 365,
};

const CryptoChart: React.FC<{
  data: CoinChart | undefined;
  onPeriodChange: (days: number) => void;
  selectedPeriod: number;
}> = ({ data, onPeriodChange, selectedPeriod }) => {
  const { t } = useTranslation();

  if (!data || !data.prices) {
    return <div className="no-data">{t('coin.noChart')}</div>;
  }

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    if (selectedPeriod === 1) {
      return date.toLocaleTimeString(i18n.language, { hour: '2-digit', minute: '2-digit' });
    }
    if (selectedPeriod === 7) {
      return (
        date.toLocaleDateString(i18n.language, { day: '2-digit', month: '2-digit' }) +
        ' ' +
        date.toLocaleTimeString(i18n.language, { hour: '2-digit', minute: '2-digit' })
      );
    }
    return date.toLocaleDateString(i18n.language);
  };

  const chartData = data.prices.map(([timestamp, price]) => ({
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
            formatter={(value) => [`$${Number(value).toFixed(2)}`, t('coin.currentPrice')]}
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
            onClick={() => onPeriodChange(days)}
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