
import React from 'react';

interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
}

interface CryptoCardProps {
  coin: Coin;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ coin }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img 
        src={coin.image} 
        alt={coin.name} 
        className="w-16 h-16 mx-auto mb-2"
      />
      <h3 className="text-lg font-semibold text-center">{coin.name}</h3>
      <p className="text-gray-600">${coin.current_price.toLocaleString()}</p>
      <p className={`text-sm ${
        coin.price_change_percentage_24h >= 0 
          ? 'text-green-500' 
          : 'text-red-500'
      }`}>
        {coin.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>
  );
};

export default CryptoCard;