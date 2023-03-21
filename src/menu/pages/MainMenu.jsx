import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MainMenuItem } from "../components/MainMenuItem";
import { SideMenu } from "../components/SideMenu";
import { menuAdmin, menuStudent } from "../misc/menu-items";
import "../../styles/mainMenu.css";
import { useSelector } from "react-redux";

export const MainMenu = () => {
  const info = useSelector((state) => state.auth);
  const itemsMenu = info.role === "administrador" ? menuAdmin : menuStudent;

  return (
    <Container fluid className="main-menu">
      <Row xs={12}>
        <SideMenu />
        <Col>
          <Row>
            {itemsMenu.map((item, index) => {
              if (item.mainMenu) {
                return (
                  <Col key={index} xs={3}>
                    <MainMenuItem
                      key={item.title}
                      icon={item.icon}
                      title={item.title}
                      url={item.url}
                    />
                  </Col>
                );
              } else {
                return null
              }
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
