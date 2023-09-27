import { useEffect } from "react";
import { useInitialize } from "./AppInitialize.hooks";
import { useUserInfo } from "../../hooks/useUserInfo";
// import { handlers } from "@/mocks/handlers";
// import { rest, setupWorker } from "msw";
// import { setupServer } from "msw/node";
type Props = {
  nickName: string;
  token: string;
};

export const AppInitialize = ({ nickName, token }: Props) => {
  const { setUserToken, userToken, setUserNickName } = useUserInfo();
  const { loadDateFromDB } = useInitialize();
  useEffect(() => {
    setUserToken(token);
    setUserNickName(nickName);
    // バックエンドから初期データの取得を行う
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    userToken && loadDateFromDB();
  }, [userToken]);

  return null;
};
