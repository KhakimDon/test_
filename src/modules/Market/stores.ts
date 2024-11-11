import { ref } from "vue";
import { defineStore } from "pinia";

import { useApi } from "@/composables/useApi";
import { useHandleError } from "@/composables/useHandleError.ts";

import type { IOffering } from "./types";
import type { IPagination, IResponse, IStockPagination } from "@/types/common";

export const useMarketStore = defineStore("marketStore", () => {
  const api = useApi();
  const { handleError } = useHandleError();
  const loading = ref(false);
  const buyLoading = ref(false);

  const offeringSingle = ref<IOffering>({} as IOffering);

  const fetchOfferings = (
    pagination: IStockPagination
  ): Promise<IResponse<IOffering>> => {
    return new Promise((resolve, reject) => {
      api
        .$get("ipo/IpoList", {
          params: pagination,
        })
        .then((response: IResponse<IOffering>) => resolve(response))
        .catch((error: unknown) => {
          reject(error);
          handleError(error);
        });
    });
  };

  const fetchOfferingSingle = async (id: string) => {
    loading.value = true;
    try {
      offeringSingle.value = await api.$get("ipo/IpoDetail/" + id);
    } catch (error) {
      handleError(error);
    } finally {
      loading.value = false;
    }
  };

  const fetchOfferingOrders = (pagination: IPagination, ipo: number) => {
    return new Promise((resolve, reject) => {
      api
        .$get("ipo/MyIpoOrdersList", {
          params: { ...pagination, ipo },
        })
        .then((response: IResponse<IOffering>) => resolve(response))
        .catch((error: unknown) => {
          reject(error);
          handleError(error);
        });
    });
  };

  const cancelOfferingOrder = async (id: string | number) => {
    try {
      return await api.$post(`ipo/IpoPurchaseCancel/${id}/`, {
        order_id: id,
      });
    } catch (error) {
      handleError(error);
    }
  };

  const buyOfferingOrder = async (data: { ipo: number; count: number }) => {
    buyLoading.value = true;
    try {
      return await api.$post(`ipo/IpoPurchaseWithInput/`, data);
    } catch (error) {
      handleError(error);
    } finally {
      buyLoading.value = false;
    }
  };

  return {
    loading,
    offeringSingle,
    buyLoading,
    fetchOfferings,
    fetchOfferingSingle,
    fetchOfferingOrders,
    cancelOfferingOrder,
    buyOfferingOrder,
  };
});
