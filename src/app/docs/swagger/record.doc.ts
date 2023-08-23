export const recordPathsDoc = {
  get: {
    tags: ["record"],
    description: "Get a todo",
    operationId: "getTodo",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          $ref: "#/components/schemas/record",
        },
        required: true,
        description: "A single todo id",
      },
    ],
    responses: {
      200: {
        description: "Todo is obtained",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/record",
            },
          },
        },
      },
      404: {
        description: "Todo is not found",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/record",
            },
          },
        },
      },
    },
  },
};
