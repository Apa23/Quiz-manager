import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { menuAdmin, menuStudent } from "../misc/menu-items";
import { NavItem } from "./NavItem";
import "../../styles/sideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.png";

export const SideMenu = () => {
  const info = useSelector((state) => state.auth);
  const itemsMenu = info.role === "administrador" ? menuAdmin : menuStudent;
  const [open, setOpen] = useState(true);

  return (
    <Col xs={open ? 2 : 1} className="side-menu">
      <div className="logo-area">
        <img src={logo} alt="quizter-logo"></img>
      </div>
      <div className="menu-items-area">
        {itemsMenu.map((item, index) => {
          return (
            <NavItem
              key={index}
              icon={item.icon}
              title={item.title}
              url={item.url}
            />
          );
        })}
      </div>
      <div className="footer-menu-area">
        <FontAwesomeIcon
          icon={open?faArrowLeft:faArrowRight}
          className={"collapse-menu"}
          onClick={() => {
            setOpen(!open);
          }}
        />
      </div>
    </Col>
  );
};
