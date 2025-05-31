
import React from 'react';
import { Link } from 'react-router-dom';

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

interface CryptoListProps {
  coin: Coin;
}

const CryptoCard: React.FC<CryptoListProps> = ({ coin }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
        <ul>
            <li>
      <img 
        src={coin.image} 
        alt={coin.name} 
        className="w-16 h-16 mx-auto mb-2"
      />
      </li>

      <li><h3 className="text-lg font-semibold text-center">{coin.name}</h3></li>
      <li><p className="text-gray-600">${coin.current_price.toLocaleString()}</p></li>
     <li> <p className={`text-sm ${
        coin.price_change_percentage_24h >= 0 
          ? 'text-green-500' 
          : 'text-red-500'
      }`}>
        {coin.price_change_percentage_24h.toFixed(2)}%
      </p></li>
        <li><Link to={`/CoinList/${coin.id}`}>Більше інформації</Link></li>
      </ul>
    </div>
  );
};

export default CryptoCard;