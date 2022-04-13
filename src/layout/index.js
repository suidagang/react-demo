import Siderbar from "./siderbar";
import { useState } from "react";
import styles from "./index.module.less";
import Header from "./header/index";
import Content from "./content/index";
const LayoutContainer = () => {
  const [collapsed, setCollapsed] = useState(false);
  /**
   * !4/12 明天继续
   * todo 侧边栏收缩处理
   * @param {*} is
   */
  const toggleSidebar = () => {
    setCollapsed(() => {
      let newCollapsed = !collapsed;
      setCollapsed(newCollapsed);
    });
  };
  return (
    <div className={styles.sys_content}>
      <div className={styles.siderbar}>
        <Siderbar collapsed={collapsed} />
      </div>
      <div className={styles.sys_right}>
        <Header toggleSidebar={toggleSidebar} />
        <Content />
      </div>
    </div>
  );
};
export default LayoutContainer;
