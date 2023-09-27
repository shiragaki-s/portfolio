import { useRecoilState } from "recoil";
import { userNickNameState, userTokenState } from "../stores/user";

export const useUserInfo = () => {
  const [userToken, setUserToken] = useRecoilState(userTokenState);
  const [userNickName, setUserNickName] = useRecoilState(userNickNameState);
  return { userToken, setUserToken, userNickName, setUserNickName };
};
