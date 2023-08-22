"use client";

import { createSwaggerSpec } from "next-swagger-doc";
import "swagger-ui-react/swagger-ui.css";
import SwaggerUI from "swagger-ui-react";
const Docs = () => {
  return (
    <div>
      <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
    </div>
  );
};
export default Docs;
