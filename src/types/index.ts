export type BaseResponseType = {
    status: string;
    message: string;
}

export type CoinData = {
    id: string;
    symbol: string;
    name: string;
    rank: number;
    price_usd: number;
    price_btc: number;
    percent_change_24h: number;
};

export type Auth = {
    email: string;
    status: boolean;
};

export type TickerById = {
    id: number;
};

export interface CoinsResponseType extends BaseResponseType {
    data: Array<CoinData>;
}

export interface CoinResponseType extends BaseResponseType {
    data: CoinData;
}
