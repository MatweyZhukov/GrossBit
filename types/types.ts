//Global
import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type CurrencyCategory = "Currency" | "Stablecoin" | "Chain";
type CurrencyName = "Bitcoin" | "Ethereum" | "Tether";
type CurrencySlug = "bitcoin" | "ethereum" | "tether";

type InputValueType = Dispatch<SetStateAction<string>>;

export type FetchCoinsType = Dispatch<SetStateAction<ICoinsFromAPI[]>>;
export type SetCoinType = Dispatch<SetStateAction<CoinTypes>>;
export type CoinTypes = "BTC" | "ETH" | "USDT" | "";
export type ToastStatusType = "success" | "error" | "warning";
export type ChangeInputValueArg = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export interface ICurrencyPrice {
  USD: {
    high24h: 43505.00524572065;
    low24h: 42220.62292847407;
    marketCap: 837125627776.8292;
    percentChange3m: 50.7186;
    percentChange6m: 42.7127;
    percentChange7d: -6.28;
    percentChange24h: -0.2514;
    percentChange30d: 3.3828;
    price: 42708.95281919076;
    volume24h: 10574816395;
  };
}

export interface ICoinsFromAPI {
  category: CurrencyCategory;
  circulatingSupply: number;
  id: number;
  lastUpdated: Date;
  maxSupply: number;
  name: CurrencyName;
  rank: number;
  slug: CurrencySlug;
  symbol: CoinTypes;
  values: ICurrencyPrice;
}

export interface IDataFromCoinAPI {
  data: ICoinsFromAPI[];
}

export interface IInputDropDownProps {
  coin: CoinTypes;
  otherCoin: CoinTypes;
  setCoin: SetCoinType;
  value: string;
  setValue: InputValueType;
  coinsArray: ICoinsFromAPI[];
  isInputFrom: boolean;
  handleChange: (
    event: SelectChangeEvent,
    setCoin: SetCoinType,
    otherCoin: CoinTypes
  ) => void;
}

export interface IInputsBlockProps {
  coinsArray: IInputDropDownProps["coinsArray"];
  coinFrom: CoinTypes;
  setCoinFrom: SetCoinType;
  coinTo: CoinTypes;
  setCoinTo: SetCoinType;
  inputValueFrom: string;
  setInputValueFrom: InputValueType;
  inputValueTo: string;
  setInputValueTo: InputValueType;
  switchCoins: () => void;
  currentCoinFrom: ICoinsFromAPI;
  currentCoinTo: ICoinsFromAPI;
}

export interface ITransferProps {
  coins: ICoinsFromAPI[];
}
