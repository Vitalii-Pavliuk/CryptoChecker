import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCoinDetailsQuery, useGetCoinChartQuery } from '../redux/services/coinGeckoApi';
import { Loader } from '../components/Loader/Loader';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import CryptoChart from '../components/CryptoChart/CryptoChart';
import CryptoDetails from '../components/CryptoDetails/CryptoDetails';
import { useTranslation } from 'react-i18next';

const CryptoDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [selectedPeriod, setSelectedPeriod] = React.useState(7);

  const {
    data: chartData,
    isLoading: isChartLoading,
    isError: isChartError,
    error: chartError,
  } = useGetCoinChartQuery({ id: id ?? '', days: selectedPeriod }, { skip: !id });

  const {
    data: coin,
    isLoading: isDetailsLoading,
    isError: isDetailsError,
    error: detailsError,
  } = useGetCoinDetailsQuery(id ?? '', { skip: !id });

  if (isChartLoading || isDetailsLoading) return <Loader />;
  if (isChartError) return <ErrorMessage error={chartError} />;
  if (isDetailsError) return <ErrorMessage error={detailsError} />;
  if (!coin || !chartData) return <div className="no-data">{t('common.noData')}</div>;

  return (
    <>
      <CryptoChart
        data={chartData}
        selectedPeriod={selectedPeriod}
        onPeriodChange={setSelectedPeriod}
      />
      <CryptoDetails coin={coin} />
    </>
  );
};

export default CryptoDetailsPage;
