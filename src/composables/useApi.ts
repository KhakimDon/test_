import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  CreateAxiosDefaults,
} from "axios";
import { ref } from "vue";
// import { generateFingerprint } from "../utils";

// use this if you need authorization
// import { useAuthStore } from "~/modules/auth/store";

export const useApi = (apiUrl?: string) => {
  const baseURL = apiUrl || (import.meta.env.VITE_APP_API_URL as string);
  const loading = ref(false);

  // use this if you need authorization
  // const authStore = useAuthStore();

  function $service(options?: CreateAxiosDefaults): AxiosInstance {
    const getHeaders = () => ({
      ...options?.headers,
      "Device-Name": "X-Device-Name",
      "Device-Type": "Android",
      Authorization:  "Bearer " + "",
      "Device-Id": "X-Device-Id",
      "Account-Id": 412,
    });

    const instance = axios.create({
      baseURL,
      ...options,
      headers: getHeaders(),
    });
    instance.interceptors.response.use(
      null,
      async function (error: AxiosError) {
        if (
          error.response.status === 401 &&
          error.config.url !== "/TokenRefresh/"
        ) {
          try {
            // await authStore.refreshToken();
            return axios.request({
              ...error.config,
              headers: getHeaders(),
            });
          } catch (err) {
            // authStore.logout();
            return Promise.reject(error);
          }
        } else {
          return Promise.reject(error);
        }
      }
    );
    return instance;
  }

  function $get<T = never>(
    endpoint: string,
    options?: CreateAxiosDefaults
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      loading.value = true;
      $service(options)
        .get(endpoint)
        .then((response: T | any) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        })
        .finally(() => {
          loading.value = false;
        });
    });
  }

  function $post<T = never, D = Record<string, any> | FormData>(
    endpoint: string,
    data?: D,
    options?: AxiosRequestConfig,
    axiosOptions?: CreateAxiosDefaults
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      $service(axiosOptions)
        .post(endpoint, data, options)
        .then((response: T | any) => {
          resolve(response.data);
        })
        .catch((error) => reject(error.response))
        .finally(() => {
          loading.value = false;
        });
    });
  }

  function $put<T = never, D = Record<string, any> | FormData>(
    endpoint: string,
    data?: D,
    options?: AxiosRequestConfig,
    axiosOptions?: CreateAxiosDefaults
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      $service(axiosOptions)
        .put(endpoint, data, options)
        .then((response: T | any) => {
          resolve(response.data);
        })
        .catch((error) => reject(error.response))
        .finally(() => {
          loading.value = false;
        });
    });
  }

  function $patch<T = never, D = Record<string, any> | FormData>(
    endpoint: string,
    data?: D,
    options?: AxiosRequestConfig,
    axiosOptions?: CreateAxiosDefaults
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      $service(axiosOptions)
        .patch(endpoint, data, options)
        .then((response: T | any) => {
          resolve(response.data);
        })
        .catch((error) => reject(error.response))
        .finally(() => {
          loading.value = false;
        });
    });
  }

  function $delete<T = never>(
    endpoint: string,
    options?: AxiosRequestConfig,
    axiosOptions?: CreateAxiosDefaults
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      $service(axiosOptions)
        .delete(endpoint, options)
        .then((response: T | any) => {
          resolve(response.data);
        })
        .catch((error) => reject(error.response))
        .finally(() => {
          loading.value = false;
        });
    });
  }

  return {
    loading,
    baseURL,
    $get,
    $post,
    $put,
    $patch,
    $delete,
  };
};
