import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MainMenuItem } from "../components/MainMenuItem";
import { SideMenu } from "../components/SideMenu";
import { itemsMenu } from "../misc/menu-items";
import '../../styles/mainMenu.css'

export const MainMenu = () => {
  return (
    <Container fluid className="main-menu">
      <Row xs={12}>
        <SideMenu />
        <Col>
          <Row>
            {itemsMenu.map((item, index) => {
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
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
