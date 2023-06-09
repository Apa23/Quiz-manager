import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MainMenuItem } from "../components/MainMenuItem";
import { SideMenu } from "../components/SideMenu";
import { menuAdmin, menuStudent } from "../misc/menu-items";
import "../../styles/mainMenu.css";
import { useSelector } from "react-redux";
import { HeaderComponent } from "../components/HeaderComponent";

export const MainMenu = () => {
  const info = useSelector((state) => state.auth);
  const itemsMenu = info.role === "administrador" ? menuAdmin : menuStudent;

  return (
    <Container fluid className="main-menu">
      <Row>
        <SideMenu />
        <Col>
          <HeaderComponent />
          <Row className="welcome-message">
            <h2><b>Welcome to Quizter</b></h2>
            <h4>The ultimate quiz manager system</h4>
            <p>Bellow you can find your avilables options. Clic on a card to access to them.</p>
            <p>You can also use the side menu to navigate between diferent modules.</p>
          </Row>
          <Row className="modules-area">
            {itemsMenu.map((item, index) => {
              if (item.mainMenu) {
                return (
                  <Col key={index} xs={3} className="offset-1">
                    <MainMenuItem
                      key={item.title}
                      icon={item.icon}
                      title={item.title}
                      url={item.url}
                      functions = {item.functions}
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
