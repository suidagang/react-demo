import { useNavigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

import styles from "./index.module.less";
function Header() {
  const navigate = useNavigate();

  const LogoutSys = () => {
    navigate("/login", { replace: true });
  };
  return (
    <div className={styles.header}>
      <HomeOutlined />
      <button onClick={LogoutSys}>退出</button>
    </div>
  );
}
export default Header;
