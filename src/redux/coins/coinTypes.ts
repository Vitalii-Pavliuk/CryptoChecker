export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
}

export interface CoinDetails {
  id: string;
  symbol: string;
  name: string;
  image: {
    small: string;
    thumb: string;
    large: string;
  };
  market_data: {
    current_price: { [key: string]: number };
    market_cap: { [key: string]: number };
    total_volume: { [key: string]: number };
    price_change_percentage_24h: number;
  };
  description: { [key: string]: string };
  links: {
    homepage: string[];
  };
}


export type CoinChart = {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
  last_updated: string;
};