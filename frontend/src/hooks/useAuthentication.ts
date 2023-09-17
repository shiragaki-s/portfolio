import { Auth } from "aws-amplify";

type SignUpParameters = {
  username: string;
  password: string;
  email: string;
  nickname: string;
};
export const useAuthentication = () => {
  async function signUp({
    username,
    password,
    email,
    nickname,
  }: SignUpParameters) {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
          nickname,
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  }
  return { signUp };
};
