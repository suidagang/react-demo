import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import styles from "./index.module.less";
const { Content } = Layout;

const ContentComponents = () => {
  return (
    <Content className={styles.content}>
      <Outlet />
    </Content>
  );
};
export default ContentComponents;
