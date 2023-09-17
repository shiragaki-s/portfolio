import { useAuthentication } from "../hooks/useAuthentication";
export default function Login() {
  const { signUp } = useAuthentication();
  return (
    <>
      <button
        onClick={() =>
          signUp({
            username: "shirashou9355@gmail.com",
            password: "password5",
            email: "shirashou9355@gmail.com",
            nickname: "shohei",
          })
        }
      >
        ログイン
      </button>
    </>
  );
}
