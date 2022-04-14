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
  let arr = [
    {
      name: "主页",
      path: "/home",
      children: [
        {
          path: "/home/subHome",
          name: "主页子页",
        },
      ],
    },
    {
      name: "测试",
      path: "/test",
      children: [
        {
          name: "测试一",
          path: "/test/test1",
          children: [
            {
              name: "测试三",
              path: "/test/test1/test3",
            },
            {
              name: "测试四",
              path: "/test/test1/test4",
            },
          ],
        },
        {
          name: "测试二",
          path: "/test/test2",
        },
      ],
    },
    { name: "详情页", path: "/detail" },
  ];
  const [defaultOpenKeys, setDefaultOpenKeys] = useState([]);
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([]);
  const [isInit, setIsInit] = useState(false);
  const menuComponents = useMemo(
    () => arr.map((m) => renderMenu(m, "")),
    [arr]
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
