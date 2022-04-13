import { useNavigate } from "react-router-dom";
import { MenuFoldOutlined } from "@ant-design/icons";

import styles from "./index.module.less";
const Header = (props) => {
  const navigate = useNavigate();
  const LogoutSys = () => {
    navigate("/login", { replace: true });
  };
  return (
    <div className={styles.header}>
      <MenuFoldOutlined
        className={styles.toggle}
        onClick={props.toggleSidebar}
      />
      <button onClick={LogoutSys}>退出</button>
    </div>
  );
};
export default Header;
