import { Outlet } from "react-router-dom";
import "./Home.less";
function Home() {
  return (
    <div className="homePage">
      我是主页啊
      <Outlet />
    </div>
  );
}

export default Home;
