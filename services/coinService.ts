//Global
import axios from "axios";

//Types
import { IDataFromCoinAPI } from "@/types/types";

export const getDataFromAPI = async () => {
  const _apiKey = process.env.NEXT_PUBLIC_CRYPTO_API_KEY,
    _apiBaseUrl = process.env.NEXT_PUBLIC_CRYPTO_BASE_URL;

  try {
    const response = await axios.get<IDataFromCoinAPI>(
      `${_apiBaseUrl}?api_key=${_apiKey}`
    );

    return response.data.data;
  } catch (e) {
    console.log("Something went wrong!", e);
  }
};
