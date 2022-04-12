import { Link } from "react-router-dom";
import React, { useMemo } from "react";
import { Menu } from "antd";

//渲染menu--andt
const renderMenu = (item, path) => {
  // 没有下级路由
  if (!item.children) {
    console.log(item.path, "eee");
    return (
      <Menu.Item key={item.key}>
        <Link to={item.path}>{item.name}</Link>
      </Menu.Item>
    );
  }
  // 有下级路由,递归调用
  return (
    <SubMenu key={item.key} title={item.name}>
      {item.children.map((i) => renderMenu(i, path + item.path))}
    </SubMenu>
  );
};
const { SubMenu } = Menu;
const Siderbar = () => {
  let arr = [
    {
      name: "主页",
      path: "/home",
      key: "home",
      children: [
        {
          path: "/home/subHome",
          name: "主页子页",
          key: "subHome",
        },
      ],
    },
    {
      name: "测试",
      path: "/test",
      key: "test",
      children: [
        {
          name: "测试一",
          path: "/test/test1",
          key: "test1",
          children: [
            {
              name: "测试三",
              path: "/test/test1/test3",
              key: "test3",
            },
            {
              name: "测试四",
              path: "/test/test1/test4",
              key: "test4",
            },
          ],
        },
        {
          name: "测试二",
          path: "/test/test2",
          key: "test2",
        },
      ],
    },
    { name: "详情页", path: "/detail", key: "detail" },
  ];
  const menuComponents = useMemo(
    () => arr.map((m) => renderMenu(m, "")),
    [arr]
  );
  return (
    <Menu mode="inline" theme="dark" className="layout-page-sider-menu text-2">
      {menuComponents}
    </Menu>
  );
};
export default Siderbar;
