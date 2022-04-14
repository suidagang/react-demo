import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Redirect = ({ to }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to, { replace: true });
  }, [to]);
};
export default Redirect;
