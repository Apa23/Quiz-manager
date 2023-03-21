import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { menuAdmin, menuStudent } from "../misc/menu-items";
import { NavItem } from "./NavItem";
import "../../styles/sideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export const SideMenu = () => {
  const info = useSelector((state) => state.auth);
  const itemsMenu = info.role === "administrador" ? menuAdmin : menuStudent;
  const [open, setOpen] = useState(true);

  return (
    <Col xs={open ? 2 : 1} className="side-menu">
      <FontAwesomeIcon
        icon={faBars}
        className={"burger-menu"}
        onClick={() => {
          setOpen(!open);
        }}
      />
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
    </Col>
  );
};
