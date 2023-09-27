import { useUserInfo } from "./useUserInfo";

const BASE_URL = "http://localhost:5001/";
type URL = "calendar" | "company" | "job_change_site" | "delete";

type Response<T> = {
  data?: T;
  errorMessage?: string;
};

export const useRequestPortfolio = () => {
  const { userToken } = useUserInfo();
  const request = async <T>(
    url: URL,
    option: RequestInit
  ): Promise<Response<T>> => {
    console.log(userToken);
    const newHeaders = option.headers
      ? { ...option.headers, Authorization: userToken }
      : { Authorization: userToken };
    const res = await fetch(BASE_URL + url, {
      ...option,
      headers: newHeaders,
    });
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
