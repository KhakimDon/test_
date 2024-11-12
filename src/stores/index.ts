import { defineStore } from "pinia";
import { useApi } from "@/composables/useApi";

import type { IResponse, IStock, IStockPagination } from "@/types/common";
import {
  Account,
  Portfolio,
  TopUpList,
  WithdrawalList,
} from "../modules/Main/types";
import { isBoolean } from "v-calendar/dist/types/src/utils/helpers";
import { createLogger } from "vite";

interface IStore {
  stocks?: IResponse<IStock>;
  accountList?: Account[];
  accountDetail?: Portfolio; // sorry for mismatch name for now
  loading: true;
  TopUpList: TopUpList[];
  withdrawalList: WithdrawalList[];
}

const api = useApi();

export const useMainStore = defineStore("mainStore", {
  state: (): IStore => ({
    accountList: [],
    accountDetail: undefined,
    TopUpList: [],
    withdrawalList: [],
    loading: true,
  }),

  getters: {},
  actions: {
    fetchStocks(pagination: IStockPagination): Promise<IResponse<IStock>> {
      return new Promise((resolve, reject) => {
        api
          .$get("stock/StockList", { params: pagination })
          .then((response: IResponse<IStock>) => resolve(response))
          .catch((error) => reject(error));
      });
    },
    fetchAccountList() {
      this.loading = true;
      console.log(this.accountList)
      return new Promise<Account[] | undefined>((resolve, reject) => {
        api
          .$get<IResponse<Account>>("stock/AccountList")
          .then((response) => {
            this.accountList = response?.results;
            resolve(this.accountList);
          })
          .catch((error) => reject(error));
      }).finally(() => {
        this.loading = false;
      });
    },
    fetchAccountDetail(id?: number) {
      if (!id) return;

      return new Promise<Portfolio | undefined>((resolve, reject) => {
        api
          .$get<Portfolio>("/stock/Account/" + id + "/")
          .then((response) => {
            this.accountDetail = response;
            resolve(this.accountDetail);
          })
          .catch((error) => reject(error));
      });
    },
    fetchTransactions() {
      this.loading = true;
      return new Promise<TopUpList[] | undefined>((resolve, reject) => {
        api
          .$get<TopUpList>("app/TopUpList")
          .then((response) => {
            this.TopUpList = response?.results;
            resolve(this.TopUpList);
          })
          .catch((error) => reject(error));
      }).finally(() => {
        this.loading = false;
      });
    },
    fetchWithdrawalList() {
      this.loading = true;
      return new Promise<WithdrawalList[] | undefined>((resolve, reject) => {
        api
          .$get("app/WithdrawalTransactionList")
          .then((response) => {
            // console.log(this.withdrawalList);
            this.withdrawalList = response?.results;
            console.log(this.withdrawalList);
            resolve(this.withdrawalList);
          })
          .catch((error) => reject(error));
      }).finally(() => {
        this.loading = false;
      });
    },
  },
});
