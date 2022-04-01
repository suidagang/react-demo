import styles from "./index.module.less";
import NestedRouter from "../../routerDemo/nestedRouter";

const Content = () => {
  return (
    <div className={styles.content}>
      <NestedRouter />
    </div>
  );
};
export default Content;
