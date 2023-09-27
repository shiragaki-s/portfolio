import { Dayjs } from "dayjs";
import { UseAuthenticator } from "@aws-amplify/ui-react-core";

export type Schedule = {
  id: number;
  title: string;
  date: Dayjs;
  time: Dayjs;
  company: Company;
  jobChangeSite: JobChangeSite;
  desiredLevel: number;
  remarks?: string;
};

export type NewSchedule = {
  id: number;
  title: string;
  date: Dayjs | string;
  time: Dayjs | string;
  company: Company;
  jobChangeSite: JobChangeSite;
  desiredLevel: number;
  remarks?: string;
};

export type Company = {
  id: number;
  name: string;
  url: string;
  interestFeatures: string;
};
export type JobChangeSite = {
  id: number;
  name: string;
  url: string;
};

export type ApiResponse<T> = {
  errorMessage: string;
  data?: T;
};

export type SignOut = UseAuthenticator["signOut"];

export type User = UseAuthenticator["user"];
