import Siderbar from "./siderbar";
import "./index.less";
function LayoutContainer() {
  return (
    <div className="sys-content">
      <div className="siderbar">
        <Siderbar />
      </div>
      <div className="sys-right">
        <div className="header"></div>
        <div className="content"></div>
      </div>
    </div>
  );
}
export default LayoutContainer;
