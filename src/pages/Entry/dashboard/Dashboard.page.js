import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { TicketTable } from "../../../components/ticket-table/TicketTable.com";
import tickets from "../../../assests/Data/dummy-tickets.json";
import { PagesBreadcrumb } from "../../../components/breadcrumb/PagesBreadcrumb.comp";
export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PagesBreadcrumb pages="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ fontSize: "2rem", padding: "10px 30px" }}
          >
            Add New Ticket{" "}
          </Button>
        </Col>
      </Row>

      <Row>
        <Col className="text-center mt-2 mb-2">
          <div>Total ticket:50</div>
          <div> Pending tickets:5</div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-2 mb-2">Recently Added Tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
