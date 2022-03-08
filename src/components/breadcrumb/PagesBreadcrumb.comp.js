import React from "react";
import { Breadcrumb } from "react-bootstrap";

export const PagesBreadcrumb = ({ pages }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

      <Breadcrumb.Item active>{pages}</Breadcrumb.Item>
    </Breadcrumb>
  );
};
