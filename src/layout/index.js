import { Layout } from "antd";
import Siderbar from "./siderbar";
import { useState } from "react";
import styles from "./index.module.less";
import Header from "./header/index";
import ContentComponents from "./content/index";
// const { Header, Content } = Layout;
const LayoutContainer = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => {
    setCollapsed(() => {
      let newCollapsed = !collapsed;
      setCollapsed(newCollapsed);
    });
  };
  return (
    <Layout className={styles.layout_page}>
      <Siderbar collapsible collapsed={collapsed} />
      <Layout>
        <Header toggleSidebar={toggleSidebar} />
        <ContentComponents />
      </Layout>
    </Layout>
  );
};
export default LayoutContainer;
