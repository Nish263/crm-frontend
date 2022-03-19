import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PagesBreadcrumb } from "../../components/breadcrumb/PagesBreadcrumb.comp";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { TicketTable } from "../../components/ticket-table/TicketTable.com";
import tickets from "../../assests/Data/dummy-tickets.json";

export const TicketList = () => {
  const [str, setStr] = useState("");
  const [dispTicket, setDispTicket] = useState([]);

  useEffect(() => {}, [str, dispTicket]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (sttr) => {
    const displayTickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );

    setDispTicket(displayTickets);
  };
  return (
    <Container>
      <Row>
        <Col>
          <PagesBreadcrumb pages="Ticket List" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="info"> Add New Ticket </Button>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={dispTicket} />
        </Col>
      </Row>
    </Container>
  );
};
