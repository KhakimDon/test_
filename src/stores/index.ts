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
    stories: [],
    isStoryShow: true,
    loading: {
      accountList: true,
      accountDetail: true,
      stories: true,
      general: false,
    },
  }),

  getters: {},
  actions: {
    async fetchAccountList() {
      if (this.accountList.length > 0) {
        this.loading.accountList = false;
        return this.accountList;
      }
      this.loading.accountList = true;
      try {
        console.log('gdfdw')
        const response = await api.$get<IResponse<Account>>("stock/AccountList");
        this.accountList = response?.results || [];
        localStorage.setItem("eventAccountId", JSON.stringify(this.accountList[0]?.id));
        await this.fetchAccountDetail(this.accountList[0]?.id);
      } catch (error) {
        console.error("Error fetching account list:", error);
      } finally {
        this.loading.accountList = false;
      }
    },

    async fetchAccountDetail(id?: number) {
      if (!id) return;

      this.loading.accountDetail = true;
      try {
        this.accountDetail = await api.$get<Portfolio>(`/stock/Account/${id}/`);
      } catch (error) {
        console.error("Error fetching account detail:", error);
      } finally {
        this.loading.accountDetail = false;
      }
    },

    async fetchStories() {
      if (this.stories.length > 0) {
        this.loading.stories = false;
        return;
      }

      this.loading.stories = true;
      try {
        const res = await api.$get<IResponse<Story>>("/StoryNewsList/");
        this.stories = res?.results || [];
        this.isStoryShow = this.stories.length > 0;
      } catch (error) {
        this.isStoryShow = false;
        console.error("Error fetching stories:", error);
      } finally {
        this.loading.stories = false;
      }
    },
    fetchStocks(pagination: IStockPagination): Promise<IResponse<IStock>> {
      return new Promise((resolve, reject) => {
        api
          .$get("stock/StockList", { params: pagination })
          .then((response: IResponse<IStock>) => resolve(response))
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
            resolve(this.withdrawalList);
          })
          .catch((error) => reject(error));
      }).finally(() => {
        this.loading = false;
      });
    },
  },
});




















