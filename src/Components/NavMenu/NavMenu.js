// import React, { useContext } from "react";
import "./NavMenu.css";
import { AiFillHome, AiOutlineMessage, AiOutlinePlus } from "react-icons/ai";
import { BsArrowUpRightCircle, BsFileBarGraph, BsShield } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiCoinInsert } from "react-icons/ci";
import { IoShirtOutline } from "react-icons/io5";
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
        {" "}
          <AiFillHome div className="nav-menu-icons" /> Home
        </button>
        <button id="2">
          <BsArrowUpRightCircle div className="nav-menu-icons" /> Popular
        </button>
        <button style={{ borderBottom: "1px solid black" }} id="3">
          <BsFileBarGraph div  className="nav-menu-icons" /> All
        </button>
        <p style={{ fontSize: "0.8rem" }}>OTHER</p>
        <button id="4">
          <RiUserSettingsLine div className="nav-menu-icons" /> User Setting
        </button>
        <button id="5">
          <AiOutlineMessage div className="nav-menu-icons" /> Message
        </button>
        <button id="6">
          <AiOutlinePlus div className="nav-menu-icons" /> Create Post
        </button>
        <button id="7">
          <IoIosNotificationsOutline div className="nav-menu-icons" /> Notifications
        </button>
        <button id="8">
          <CiCoinInsert div className="nav-menu-icons" /> Coins
        </button>
        <button id="9">
          <BsShield div className="nav-menu-icons" /> Premium
        </button>
        <button id="10">
          <IoShirtOutline div className="nav-menu-icons" /> Avatar
        </button>
      </div>
    </>
  );
};

export default NavMenu;
