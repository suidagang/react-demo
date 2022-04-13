import "@/assets/css/reset.less";
import "@/assets/css/App.less";
import { useRoutes } from "react-router-dom";
import routes from "./router/index";

function App() {
  const element = useRoutes(routes);
  return <div className="App">{element}</div>;
}
export default App;
