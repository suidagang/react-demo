import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const LoginSys = () => {
    navigate("/home", { replace: true });
  };
  return (
    <>
      <div>这是登录页面</div>
      <button onClick={LoginSys}>登录</button>
    </>
  );
};
export default Login;
