import { ApiResponse } from "@/types";

const BASE_URL = "http://localhost:5001/";
type URL = "calendar" | "company" | "job_change_site";

export const useRequestPortfolio = () => {
  const request = async <T>(
    method: "GET" | "POST",
    url: URL
  ): Promise<ApiResponse<T>> => {
    const res = await fetch(BASE_URL + url, { method });
    if (!res.ok) {
      return {
        errorMessage: res.statusText,
      };
    }
    const data = await res.json();
    return {
      errorMessage: res.statusText,
      data: data as T,
    };
  };

  return { request };
};
