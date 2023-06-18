import { companyListState } from "@/stores/company";
import { jobChangeSiteListState } from "@/stores/jobChangeSite";
import { scheduleListState } from "@/stores/schedule";
import { useRecoilState } from "recoil";

export const useCompanyList = () => {
  const [companyList, setCompanyList] = useRecoilState(companyListState);
  return { companyList, setCompanyList };
};

export const useJobChangeSiteList = () => {
  const [jobChangeSiteList, setJobChangeSiteList] = useRecoilState(
    jobChangeSiteListState
  );
  return { jobChangeSiteList, setJobChangeSiteList };
};
