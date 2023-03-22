
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { HeaderComponent } from "../../menu/components/HeaderComponent";
import { SideMenu } from "../../menu/components/SideMenu";
import "../../styles/usersManagement.css"

export const UsersManagement = () => {
  const info = useSelector((state) => state.auth);
  return (
    <Container fluid className="user-management">
      <Row>
        <SideMenu />
        <Col>
          <HeaderComponent />
          <Row className="welcome-message">
            <h2>
              <b>Welcome to Quizter</b>
            </h2>
            <h4>The ultimate quiz manager system</h4>
            <p>
              Bellow you can find your avilables options. Clic on a card to
              access to them.
            </p>
            <p>
              You can also use the side menu to navigate between diferent
              modules.
            </p>
          </Row>
          <Row className="modules-area">
            
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
