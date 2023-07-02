import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div className="navBar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/Best"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Best Value
      </NavLink>
      <NavLink
        to="/myNFTs"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        My NFTs
      </NavLink>
      <NavLink
        to="/NFTForm"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        NFT Form
      </NavLink>
    </div>
  );
}
    

export default NavBar;