import { jobChangeSiteListState } from "@/stores/jobChangeSite";
import { useRecoilState } from "recoil";

export const useJobChangeSiteList = () => {
  const [jobChangeSiteList, setJobChangeSiteList] = useRecoilState(
    jobChangeSiteListState
  );
  return { jobChangeSiteList, setJobChangeSiteList };
};
