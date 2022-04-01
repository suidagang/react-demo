import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./home/Home";
import Detail from "./detail/Detail";
const BaseRouter = () => {
  return (
    <BrowserRouter>
      <Link to="/Home">
        <button>to: /Home</button>
      </Link>
      <Link to="/Detail">
        <button>to: /Detail</button>
      </Link>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default BaseRouter;
