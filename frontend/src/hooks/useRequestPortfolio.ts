import { ApiResponse } from "@/types";

const BASE_URL = "http://localhost:5001/";
type URL = "calendar" | "company" | "job_change_site";

type Response<T> = {
  data?: T;
  errorMessage?: string;
};

export const useRequestPortfolio = () => {
  const request = async <T>(
    url: URL,
    option: RequestInit
  ): Promise<Response<T>> => {
    const res = await fetch(BASE_URL + url, option);
    if (!res.ok) {
      return {
        errorMessage: res.statusText,
      };
    }
    const data = await res.json();
    return {
      data: data as T,
    };
  };

  return { request };
};
