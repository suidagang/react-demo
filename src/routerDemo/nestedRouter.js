import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import Layout from "./Layout/index";
import Home from "./home/Home";
import Detail from "./detail/Detail";
import SubHome from "./subHome/index";
const nestedRouter = () => {
  return (
    <BrowserRouter>
      {/* <Home /> */}
      <Link to="/home">
        <button>to: /Home</button>
      </Link>
      <Link to="/home/subHome">
        <button>to: /subHome</button>
      </Link>
      <Link to="/detail">
        <button>to: /Detail</button>
      </Link>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}>
            <Route path="subHome" element={<SubHome />}></Route>
          </Route>
          <Route path="detail" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default nestedRouter;
