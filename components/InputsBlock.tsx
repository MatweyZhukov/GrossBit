"use client";
import React, { useEffect, FC, useCallback, memo, useMemo } from "react";
import { TbArrowsLeftRight } from "react-icons/tb";
import { InputDropDown } from "./InputDropDown";
import { CoinTypes, IInputsBlockProps, SetCoinType } from "@/types/types";
import { SelectChangeEvent } from "@mui/material";

const InputsBlock: FC<IInputsBlockProps> = memo(props => {
  const {
    coinsArray,
    coinFrom,
    coinTo,
    setCoinFrom,
    setCoinTo,
    inputValueFrom,
    inputValueTo,
    setInputValueFrom,
    setInputValueTo,
    switchCoins,
    currentCoinFrom,
    currentCoinTo,
  } = props && props;

  const calculateAndSetInputValue = useCallback(() => {
    if (currentCoinFrom && currentCoinTo) {
      const valueFrom = +inputValueFrom * +currentCoinFrom.values.USD.price;
      const valueTo = +currentCoinTo.values.USD.price;

      if (inputValueFrom) {
        const resultValue = String(valueFrom / valueTo);

        setInputValueTo(resultValue);
      } else {
        setInputValueTo("");
      }
    }
  }, [currentCoinFrom, currentCoinTo, inputValueFrom, setInputValueTo]);

  const handleChange = useCallback(
    (event: SelectChangeEvent, setCoin: SetCoinType, otherCoin: CoinTypes) => {
      const selectedCoin = event.target.value as CoinTypes;

      if (selectedCoin !== otherCoin) {
        setCoin(selectedCoin);
      } else {
        switchCoins();
      }
    },
    [switchCoins]
  );

  useEffect(() => {
    calculateAndSetInputValue();
  }, [calculateAndSetInputValue]);

  const memoizedInputValueFrom = useMemo(
      () => inputValueFrom,
      [inputValueFrom]
    );
    
  const memoizedInputValueTo = useMemo(() => inputValueTo, [inputValueTo]);

  return (
    <>
      <h1>Transfer App</h1>

      <section style={{width: '200px'}}>
        <InputDropDown
          coin={coinFrom}
          otherCoin={coinTo}
          setCoin={setCoinFrom}
          coinsArray={coinsArray}
          value={memoizedInputValueFrom}
          setValue={setInputValueFrom}
          isInputFrom={true}
          handleChange={handleChange}
        />

        <TbArrowsLeftRight
          onClick={switchCoins}
          style={{ cursor: "pointer" }}
        />

        <InputDropDown
          coin={coinTo}
          otherCoin={coinFrom}
          setCoin={setCoinTo}
          coinsArray={coinsArray}
          value={memoizedInputValueTo}
          setValue={setInputValueTo}
          isInputFrom={false}
          handleChange={handleChange}
        />
      </section>
    </>
  );
});

InputsBlock.displayName = "InputsBlock";

export { InputsBlock };
