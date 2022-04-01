import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      公共Layout
      <Outlet />
    </div>
  );
};
export default Layout;
