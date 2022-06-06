import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="nav">
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/get">get</Link>
      </li>
      <li>
        <Link to="/post">Post</Link>
      </li>
    </div>
  );
}
