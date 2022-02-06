import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { showSidebar, hideSidebar } from './redux/appSlice';

const hamburgerButtonStyle = {
  position: "fixed",
  right: 0,
  color: "#9b4dca",
  fontSize: "4rem",
  margin: "2rem",
  cursor: "pointer",
};

const HamburgerButton = () => {
  const isSidebarOpen = useSelector((state) => state.app.isSidebarOpen);
  const dispatch = useDispatch();

  return isSidebarOpen ? (
    <FontAwesomeIcon
      onClick={() => dispatch(hideSidebar())}
      style={hamburgerButtonStyle}
      icon={faTimesCircle}
    />
  ) : (
    <FontAwesomeIcon
      onClick={() => dispatch(showSidebar())}
      style={hamburgerButtonStyle}
      icon={faBars}
    />
  );
};

export default HamburgerButton;
