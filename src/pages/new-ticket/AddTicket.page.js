import React, { useEffect, useState } from "react";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { PagesBreadcrumb } from "../../components/breadcrumb/PagesBreadcrumb.comp";
import { Container, Row, Col } from "react-bootstrap";

const initialFormData = {
  subject: "",
  issueDate: "",
  detail: "",
};

export const AddTicket = () => {
  const [formData, setFormData] = useState(initialFormData);
  // const [formDataError, setFormDataError] = useEffect(initialFormError);
  useEffect(() => {}, [formData]);

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // setFormDataError(initialFormData);

    // const isSubjectValid = await shortText(formData.subject);
    // setFormDataError({
    //   ...initialFormError,
    //   subject: !isSubjectValid,
    // });
    console.log("form submit request received", formData);
  };
  return (
    <Container>
      <Row>
        <Col>
          <PagesBreadcrumb pages="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            formData={formData}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};
