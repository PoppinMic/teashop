import React from "react";
import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";

const Toolbar: React.SFC<any> = () => (
  <div className="toolbar">
    <span>
      <FaUser />
    </span>
    <span>
      <FaSearch />
    </span>
    <span>
      <FaShoppingCart />
    </span>
  </div>
);

export default Toolbar;
