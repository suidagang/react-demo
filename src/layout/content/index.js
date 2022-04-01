import styles from "./index.module.less";
import BaseRouter from "../../routerDemo/baseRouter";

const Content = () => {
  return (
    <div className={styles.content}>
      <BaseRouter />
    </div>
  );
};
export default Content;
