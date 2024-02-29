"use client";

//GLobal
import React, { FC, memo } from "react";

//MUI
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Input } from "@mui/material";

//Types
import { IInputDropDownProps } from "@/types/types";

const InputDropDown: FC<IInputDropDownProps> = memo(props => {
  const {
    value,
    coin,
    otherCoin,
    setCoin,
    coinsArray,
    isInputFrom,
    setValue,
    handleChange,
  } = props && props;

  const inputSX = {
    width: "250px",
    fontSize: "20px",
    padding: "0 15px",
  };

  const inputPlaceholder = isInputFrom
    ? "Enter numbers..."
    : "See convertation...";

  return (
    <Box sx={{ display: "flex" }}>
      <Input
        placeholder={inputPlaceholder}
        readOnly={!isInputFrom}
        disabled={!isInputFrom}
        type="number"
        sx={inputSX}
        value={value}
        onChange={e => setValue(e.target.value)}
      />

      <FormControl sx={{ width: "100px" }}>
        <InputLabel id="demo-simple-select-label">Coin</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Coin"
          value={coin}
          onChange={e => handleChange(e, setCoin, otherCoin)}
        >
          {coinsArray &&
            coinsArray.map((coin, index) => (
              <MenuItem key={index} value={coin.symbol}>
                {coin.symbol}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
});

InputDropDown.displayName = "InputDropDown";

export { InputDropDown };
