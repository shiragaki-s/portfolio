import { companyListState } from "../stores/company";
import { useRecoilState } from "recoil";

export const useCompanyList = () => {
  const [companyList, setCompanyList] = useRecoilState(companyListState);
  return { companyList, setCompanyList };
};
