'use client';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { InputsBlock } from './InputsBlock';
import {
  CoinTypes,
  FetchCoinsType,
  ICoinsFromAPI,
  ITransferProps
} from '@/types/types';

const Transfer: FC<ITransferProps> = ({ coins }) => {
  const [coinsArray, setCoinsArray] = useState<ICoinsFromAPI[]>([]);

  const [coinFrom, setCoinFrom] = useState<CoinTypes>('BTC'),
    [coinTo, setCoinTo] = useState<CoinTypes>('USDT');

  const [inputValueFrom, setInputValueFrom] = useState<string>(''),
    [inputValueTo, setInputValueTo] = useState<string>('');

  const currentCoinFrom = coinsArray.find(coin => coin.symbol === coinFrom),
    currentCoinTo = coinsArray.find(coin => coin.symbol === coinTo);

  const fetchCoins = useCallback(
    async (setCoinsArray: FetchCoinsType) => {
      if (coins) {
        const newCoins = coins.filter(item =>
          ['BTC', 'ETH', 'USDT'].includes(item.symbol)
        );

        setCoinsArray(newCoins);
      }
    },
    [coins]
  );

  const switchCoins = useCallback(() => {
    if (coinFrom && coinTo) {
      setCoinFrom(coinTo);
      setCoinTo(coinFrom);
    }
  }, [coinFrom, coinTo]);

  useEffect(() => {
    fetchCoins(setCoinsArray);
  }, [fetchCoins]);

  const condition =
    currentCoinFrom &&
    currentCoinTo &&
    inputValueFrom &&
    inputValueTo &&
    coinFrom &&
    coinTo;

  return (
    <>
      {currentCoinFrom && currentCoinTo ? (
        <>
          <InputsBlock
            coinFrom={coinFrom}
            setCoinFrom={setCoinFrom}
            coinTo={coinTo}
            setCoinTo={setCoinTo}
            coinsArray={coinsArray}
            inputValueFrom={inputValueFrom}
            setInputValueFrom={setInputValueFrom}
            inputValueTo={inputValueTo}
            setInputValueTo={setInputValueTo}
            switchCoins={switchCoins}
            currentCoinFrom={currentCoinFrom}
            currentCoinTo={currentCoinTo}
          />

          <p>
            {condition
              ? `${Number(inputValueFrom).toLocaleString('ru-RU', {
                  maximumFractionDigits: 2
                })} ${currentCoinFrom.name} = ${Number(
                  inputValueTo
                ).toLocaleString('ru-RU', { maximumFractionDigits: 2 })} ${
                  currentCoinTo?.name
                }`
              : '<Quantity> <Coin> = <Quantity> <Coin>'}
          </p>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export { Transfer };
