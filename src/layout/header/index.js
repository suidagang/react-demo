import { useNavigate } from "react-router-dom";
import { Breadcrumb } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";

import styles from "./index.module.less";
const Header = (props) => {
  const navigate = useNavigate();
  const LogoutSys = () => {
    navigate("/login", { replace: true });
  };
  console.log(window.location.href);
  return (
    <div className={styles.header}>
      <MenuFoldOutlined
        className={styles.toggle}
        onClick={props.toggleSidebar}
      />
      <Breadcrumb className={styles.breadcrumb}>
        <Breadcrumb.Item>
          <a href="">主页</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">测试</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <button onClick={LogoutSys} className={styles.logout}>
        退出
      </button>
    </div>
  );
};
export default Header;
