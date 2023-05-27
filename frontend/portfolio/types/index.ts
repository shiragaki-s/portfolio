import { Dayjs } from "dayjs";

export type Schedule = {
    id: string;
    title: string;
    date: Dayjs;
    time: string;
    company: Company;
    jobChangeSite: JobChangeSite;
    desiredLevel: number;
    remarks?: string;
};
  

type Company = {
    name:string;
    url: string;
    interestFeatures: string;
}
type JobChangeSite = {
    name:string;
    url:string;
}