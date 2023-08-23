"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { docsData } from "./swagger";

const Docs = () => {
  return (
    <div>
      <SwaggerUI spec={docsData} />
    </div>
  );
};
export default Docs;
