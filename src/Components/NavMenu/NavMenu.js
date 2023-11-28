// import React, { useContext } from "react";
import "./NavMenu.css";
// import { arr } from "../NavMenuArray";
// import { useNavigate } from "react-router-dom";
// import { MyContext } from "../../MyContext";

const darkModeStyle = {
  backgroundColor: "var(--color-lightDark)",
  color: "white",
};
const NavMenu = () => {
  // const navigate = useNavigate();
  // const {
  //   setNewPost,
  //   setIsAllPage,
  //   setIsPopularPage,
  //   setRedditIndex,
  //   setNavMenu,
  // } = useContext(MyContext);
  return (
    <>
      <div
        className="reddit_clone-nav_menu_item"
        style={{ width: "16rem" }}
        // onClick={(e) => {
        //   const val = arr[parseInt(e.target.id) - 1];
        //   setNavMenu(val);
        // }}
      >
      {/* <div className="nav-menu-icons-Feed"> */}
        <p style={{ fontSize: "0.8rem" }}>FEEDS</p>
        <button id="1">
          <div className="nav-menu-icons" /> Home
        </button>
        <button id="2">
          <div className="nav-menu-icons" /> Popular
        </button>
        <button id="3">
          <div className="nav-menu-icons" /> All
        </button>
        <p style={{ fontSize: "0.8rem" }}>OTHER</p>
        <button id="4">
          <div className="nav-menu-icons" /> User Setting
        </button>
        <button id="5">
          <div className="nav-menu-icons" /> Message
        </button>
        <button id="6">
          <div className="nav-menu-icons" /> Create Post
        </button>
        <button id="7">
          <div className="nav-menu-icons" /> Notifications
        </button>
        <button id="8">
          <div className="nav-menu-icons" /> Coins
        </button>
        <button id="9">
          <div className="nav-menu-icons" /> Premium
        </button>
        <button id="10">
          <div className="nav-menu-icons" /> Avatar
        </button>
      </div>
    </>
  );
};

export default NavMenu;
