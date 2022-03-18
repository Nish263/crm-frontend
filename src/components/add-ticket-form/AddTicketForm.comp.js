import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./addticket-form.style.css";

export const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  formData,
  // formDataError,
}) => {
  console.log(formData);
  return (
    <div className=" mt-3 add-new-ticket bg-light">
      <h2 className=" mt-4 text-center text-info"> Add New Ticket</h2>
      <div className=" mt-4 inside-form">
        <Form autoComplete="off" onSubmit={handleOnSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>
              Subject
            </Form.Label>
            <Col>
              <Form.Control
                name="subject"
                value={formData.subject}
                onChange={handleOnChange}
                placeholder="subject"
                required
              />
              {/* <Form.Text className="text-danger">
                {formDataError.subject && "Subject is required"}
              </Form.Text> */}
            </Col>
          </Form.Group>
          {/* <br /> */}
          <Form.Group as={Row}>
            <Form.Label column sm={3}>
              Issue Found
            </Form.Label>
            <Col className="mt-3 " sm={9}>
              <Form.Control
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleOnChange}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Form.Label> Password</Form.Label>
            <Form.Control
              as="textarea"
              name="detail"
              value={formData.detail}
              rows="5"
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <br />
          <Button className="bg-info" type="submit" variat="info" block>
            Login
          </Button>
        </Form>
      </div>
      <br />

      <hr />
    </div>
  );
};

AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  // formDataError: PropTypes.object.isRequired,
};
