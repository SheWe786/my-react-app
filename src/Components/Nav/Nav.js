import React from "react";
import "./Nav.css";
import { BiLogIn } from "react-icons/bi";
import { FaReddit } from "react-icons/fa";
// import { CiCircleMore, CiCoinInsert } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import {
  // BsArrowUpRightCircle,
  // BsChevronDown,
  BsQrCodeScan,
} from "react-icons/bs";
const style = {
  border: "1px solid var(--color-border)",
  borderRadius: " 3px",
  cursor: "pointer",
};
const Nav = () => {
  return (
    <>
      <div className="reddit_clone-nav_fixed">
        <div className="reddit_clone-nav">
          <div className="reddit_clone-nav_icon">
            <div className="reddit_clone-nav_reddit_name">
              <FaReddit className="reddit_clone-nav_reddit_icon" />

              <p>reddit</p>
            </div>
            <div className="reddit_clone-nav_menu">
              <button className="reddit_clone-nav_menu_btn"> </button>
            </div>
          </div>
          <div className="reddit_clone-nav_input">
            <div className="reddit_clone-nav_input_item">
              <input type="text" placeholder="🔍 Search Reddit" />
            </div>
          </div>
          

          <div className="reddit_clone-nav_login_part">
            <button className="reddit_clone-nav_getapp">
              <BsQrCodeScan /> Get App
            </button>
            <button className="reddit_clone-nav_login">
              <BiLogIn /> Login
            </button>
            <div className="reddit_Clone-nav_before_login">
              <RiContactsLine className="reddit_clone-contact_icon" />
              {/* <BsChevronDown /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
