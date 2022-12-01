import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { WalletType } from "../../types";

const initialState: WalletType = {
  balance: 0,
  income: [],
  outcome: [],
};
const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    addIncome(state, action: PayloadAction<number>) {
      state.income.push(action.payload);
    },
    addOutcome(state, action: PayloadAction<number>) {
      state.outcome.push(action.payload);
    },
    updateBalance(state) {
      const totalIncome: any = state.income.reduce((total, value) => {
        return total + value;
      }, 0);
      const totalOutcome: any = state.outcome.reduce((total, value) => {
        return total + value;
      }, 0);
      const balance = totalIncome - totalOutcome;
      state.balance = balance;
    },
    sumTotal(state) {
      console.log(state);
    },
    // addContact(state, action: PayloadAction<ContactType>) {
    //   const index = state.items.findIndex(
    //     (item) => item.phone === action.payload.phone
    //   );

    //   if (index === -1) {
    //     state.items.push(action.payload);
    //     state.status = "success";
    //     return state;
    //   }

    //   state.status = "error";
    //   return state;
    // },
    // deleteContact(state, action: PayloadAction<ContactType>) {
    //   const index = state.items.findIndex(
    //     (item) =>
    //       item.name === action.payload.name &&
    //       item.phone === action.payload.phone
    //   );

    //   if (index >= 0) {
    //     state.items.splice(index, 1);
    //     state.status = "success";
    //   }

    //   state.status = "error";
    //   return state;
    // },
    // clearStatusContacts(state) {
    //   state.status = "";
    //   return state;
    // },
    clear() {
      return initialState;
    },
  },
});

export const { addIncome, addOutcome, updateBalance, clear, sumTotal } =
  walletSlice.actions;
export default walletSlice.reducer;
