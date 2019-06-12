import React from "react";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class SidebarContent extends React.Component {
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col xs={12}>
              <Image
                className="sidebar-img"
                src="https://www.debt.org/wp-content/uploads/2012/09/Sales-Tax-Small-Business.gif"
                roundedCircle
              />
            </Col>
          </Row>
        </Container>
        <Nav className="flex-column">
          <NavLink to="/fill" className="route-nav" activeClassName="selected-route-nav">
            Fill Form
          </NavLink>
          <NavLink to="/add" className="route-nav" activeClassName="selected-route-nav">
            Add Form Type
          </NavLink>
          <NavLink to="/activity" className="route-nav" activeClassName="selected-route-nav">
            Activities
          </NavLink>
          <NavLink to="/settings" className="route-nav" activeClassName="selected-route-nav">
            Settings
          </NavLink>
        </Nav>
      </>
    );
  }
}

export default SidebarContent;
