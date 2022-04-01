import Siderbar from "./siderbar";
import styles from "./index.module.less";
import Header from "./header/index";
import Content from "./content/index";
function LayoutContainer() {
  return (
    <div className={styles.sys_content}>
      <div className={styles.siderbar}>
        <Siderbar />
      </div>
      <div className={styles.sys_right}>
        <Header />
        <Content />
      </div>
    </div>
  );
}
export default LayoutContainer;
