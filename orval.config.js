module.exports = {
  "petstore-file": {
    output: {
      client: "react-query",
      schemas: "src/model",
      target: "src/QueryStore.ts",
      prettier: true,
      override: {
        mutator: {
          path: "./src/custom-axios-instance.ts",
          name: "useCustomInstance",
        },
      },
    },
    input: "./SWAG.json",
  },
};
