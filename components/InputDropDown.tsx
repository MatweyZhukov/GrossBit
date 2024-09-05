"use client";
import React, { FC, memo } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Input } from "@mui/material";
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

  return (
    <Box sx={{ display: "flex" }}>
      <Input
        placeholder={isInputFrom ? "Enter numbers..." : "See convertation..."}
        readOnly={!isInputFrom}
        disabled={!isInputFrom}
        type="number"
        sx={{
          width: "250px",
          maxWidth: "250px",
          fontSize: "20px",
        }}
        value={value}
        onChange={e => setValue(e.target.value)}
      />

      <FormControl>
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
