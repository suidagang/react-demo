import { Outlet } from "react-router-dom";
import styles from "./index.module.less";

const Content = () => {
  return (
    <div className={styles.content}>
      <Outlet />
    </div>
  );
};
export default Content;
