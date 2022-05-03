import React, { useEffect } from "react";
import useLocation from "../HOC/location";

const Email = ({ ...props }) => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const script = document.createElement("script");
      const scriptText = document.createTextNode((window.location.href = "mailto:" + props.search.email));
      script.appendChild(scriptText);
      document.head.appendChild(script);
    }
  }, [props.search.email]);
  return <p>Loading...</p>;
};

export default useLocation(Email);
