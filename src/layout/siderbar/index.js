import { Link, useLocation, matchRoutes } from "react-router-dom";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.module.less";
import { Menu, Layout } from "antd";
import routes from "@/router/index";

//渲染menu--andt
const renderMenu = (item, path) => {
  // 没有下级路由
  if (!item.children) {
    return (
      <Menu.Item key={item.path}>
        <Link to={item.path}>{item.name}</Link>
      </Menu.Item>
    );
  }
  // 有下级路由,递归调用
  return (
    <SubMenu key={item.path} title={item.name}>
      {item.children.map((i) => renderMenu(i, path + item.path))}
    </SubMenu>
  );
};
const { SubMenu } = Menu;
const { Sider } = Layout;
const Siderbar = (props) => {
  let sidebarArr = [];
  routes.forEach((item) => {
    if (item.path === "/" && !item.redirect) {
      sidebarArr = item.children;
    }
  });
  const [defaultOpenKeys, setDefaultOpenKeys] = useState([]);
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([]);
  const [isInit, setIsInit] = useState(false);
  const menuComponents = useMemo(
    () => sidebarArr.map((m) => renderMenu(m, "")),
    [sidebarArr]
  );
  const location = useLocation();
  //! 解决刷新左侧菜单栏不高亮
  useEffect(() => {
    const routers = matchRoutes(routes, location);
    const temp = [];
    if (routers) {
      for (let match of routers) {
        temp.push(match.route.path);
      }
    }
    setDefaultOpenKeys(temp);
    setDefaultSelectedKeys(temp);
    setIsInit(true);
  }, [location.pathname]);
  if (!isInit) {
    return null;
  }
  return (
    // <Layout>
    <Sider
      trigger={null}
      collapsible
      collapsed={props.collapsed}
      className={styles.site_layout_background}
    >
      <div className={styles.sys_logo}>LOGO</div>
      <Menu
        mode="inline"
        className="layout-page-sider-menu text-2"
        defaultOpenKeys={defaultOpenKeys}
        defaultSelectedKeys={defaultSelectedKeys}
      >
        {menuComponents}
      </Menu>
    </Sider>
    // </Layout>
  );
};
export default Siderbar;
