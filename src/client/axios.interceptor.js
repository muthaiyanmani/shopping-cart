import { getEnv } from "@/utils/env";
import {
  getDataFromLocalStorage,
  setDataToLocalStorage
} from "@/utils/localstorage";
import axios from "axios";
import Router from "next/router";

const Axios = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json" 
  }
});

// Change request data/error here
Axios.interceptors.request.use((config) => {
  const zylker = getDataFromLocalStorage("token");
  const accessToken = zylker?.accessToken;
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${accessToken ? accessToken : ""}`
  };
  return config;
});

// Change response data/error here
Axios.interceptors.response.use(
  (response) => {

    const accessToken = response.data.token;
  
    if (accessToken) {
      const token = getDataFromLocalStorage("token");
      setDataToLocalStorage("token", {...token, accessToken });
    }
    return response;
  }
);

class HttpClient {
  async get(url) {
    return Axios.get(url);
  }

  async post(url, data, options) {
    const response = await Axios.post(url, data, options);
    return response.data;
  }
}

export const CREDENTIALS = {
  SELF_CLIENT_CLIENT_ID: "1000.L0CIEWYGN8ZTS6EB6IKMY9323PN9EQ",
  SELF_CLIENT_CLIENT_SECRET: "ab8e4d46087c863439a65eeb9b28ca8df0e1cbeb9b",
  ADMIN_EMAIL_ADDRESS: "muthaiyan.mb+us@zohotest.com",
  SELF_CLIENT_REFRESH_TOKEN:
    "1000.4b93074126c50300d9a2c1e5e2347fca.a732d97582a22ac063b41fd77ee852a5",
  SELF_CLIENT_ACCESS_TOKEN:
    "1000.262fba4243d73a6f5605733fc4307efe.6d5c02cf779b03bda00827f82064d03f"
};

export const httpClient = Object.freeze(new HttpClient());
