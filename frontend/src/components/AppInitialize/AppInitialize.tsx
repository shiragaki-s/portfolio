import { useEffect } from "react";
import { useUserInfo } from "../../hooks/useUserInfo";
// import { handlers } from "@/mocks/handlers";
// import { rest, setupWorker } from "msw";
// import { setupServer } from "msw/node";
type Props = {
  nickName: string;
  token: string;
};

export const AppInitialize = ({ nickName, token }: Props) => {
  const { setUserToken, setUserNickName } = useUserInfo();
  useEffect(() => {
    setUserToken(token);
    setUserNickName(nickName);
  }, []);

  return null;
};
