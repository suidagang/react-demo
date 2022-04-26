import { useNavigate, useLocation, matchRoutes } from "react-router-dom";
import { Breadcrumb, Button } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import { routes } from "@/router/index";

import styles from "./index.module.less";
const Header = (props) => {
  const navigate = useNavigate();
  const LogoutSys = () => {
    localStorage.setItem("isLogin", "false");
    navigate("/login", { replace: true });
  };
  const clearLogin = () => {
    localStorage.setItem("isLogin", "false");
  };
  const location = useLocation();
  const routersNew = matchRoutes(routes, location);
  let breadCrumbArr = [];
  routersNew.forEach((item) => {
    if (item.route.name) {
      let obj = {
        name: item.route.name,
        path: item.route.path,
      };
      breadCrumbArr.push(obj);
    }
  });
  return (
    <div className={styles.header}>
      <MenuFoldOutlined
        className={styles.toggle}
        onClick={props.toggleSidebar}
      />
      <Breadcrumb className={styles.breadcrumb}>
        {breadCrumbArr.map((item, index) => {
          return (
            <Breadcrumb.Item key={item.path}>
              <a href={item.path}>{item.name}</a>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
      <Button type="primary" onClick={clearLogin}>
        清除登录信息
      </Button>
      <Button type="primary" onClick={LogoutSys} className={styles.logout}>
        退出
      </Button>
    </div>
  );
};
export default Header;
