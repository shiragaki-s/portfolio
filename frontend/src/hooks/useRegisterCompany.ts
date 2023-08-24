import { Company } from "../types";
import { useCompanyList } from "./useCompanyList";

export const useRegisterCompany = () => {
  const { setCompanyList } = useCompanyList();
  const executeRegisterCompanyRequest = async (
    company: Company,
    newCompanyId?: number
  ) => {
    if (company.id !== -1 || newCompanyId == null) return;
    setCompanyList((currentCompanyList) => [
      ...currentCompanyList,
      { ...company, id: newCompanyId },
    ]);
  };
  return { executeRegisterCompanyRequest };
};
