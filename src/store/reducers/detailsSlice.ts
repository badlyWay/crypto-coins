import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICoin } from "../../types/coins";

interface IDetailsState {
  isLoading: boolean;
  error: string;
  data: ICoin;
}

const initialState: IDetailsState = {
  isLoading: false,
  error: "",
  data: {
    id: "",
    rank: "",
    symbol: "",
    name: "",
    supply: "",
    maxSupply: "",
    marketCapUsd: "",
    volumeUsd24Hr: "",
    priceUsd: "",
    changePercent24Hr: "",
    vwap24Hr: "",
    explorer: "",
  },
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    getCoinDetailsPending(state) {
      state.isLoading = true;
    },

    getCoinDetailsSuccess(state, { payload }: PayloadAction<ICoin>) {
      state.isLoading = false;
      state.data = payload;
    },

    getCoinDetailsFailure(state, { payload }: PayloadAction<string>) {
      state.isLoading = false;
      state.error = payload;
    },

    resetDetailsState: () => initialState,

  },
});

export const {
  getCoinDetailsPending,
  getCoinDetailsSuccess,
  getCoinDetailsFailure,
  resetDetailsState,
} = detailsSlice.actions;
export default detailsSlice.reducer;
