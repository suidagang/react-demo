import React, { useEffect } from "react";
import { useLocation } from "react-router";

const Compnent = () => {
  const location = useLocation();

  useEffect(() => {
    // ...
  }, [location]);
};
//! URL一发生变化，将返回新的 location ，一般可以用来监听 location.search
