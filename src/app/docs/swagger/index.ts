import { components } from "./components";
import { info } from "./info";
import { recordPathsDoc } from "./record.doc";
import { servers } from "./servers";
import { tags } from "./tags";

export const docsData = {
  openapi: "3.0.3",
  info,
  servers,
  tags,
  components,
  paths: {
    "/record": recordPathsDoc,
  },
};
