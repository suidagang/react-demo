import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const Login = () => {
  const navigate = useNavigate();
  // const count = useSelector((state) => state.count);
  // const dispatch = useDispatch();

  const LoginSys = () => {
    localStorage.setItem("isLogin", "true");
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
