import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ spotiy }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotiy={spotiy} />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
