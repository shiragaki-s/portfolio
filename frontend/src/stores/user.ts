import { atom } from "recoil";

export const userTokenState = atom<string>({
  key: "userInfo",
  default: "",
});

export const userNickNameState = atom<string>({
  key: "userNickName",
  default: "",
});
