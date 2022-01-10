import "./ResultsList.scss";
import { useState } from "react";

import { useHistory } from "react-router";

export default function ResultsList(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="">
     
    </div>
  );
}
