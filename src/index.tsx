import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance Project",
          type: "deposit",
          category: "Job",
          amount: 3000,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Rent",
          type: "withdraw",
          category: "Bill",
          amount: 1000,
          createdAt: new Date("2021-02-14 19:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      // Return the list of all objects
      return this.schema.all("transaction");

      // // Example of one object returned
      // return [
      //   {
      //     id: 1,
      //     title: "Transaction Test 1",
      //     type: "deposit",
      //     category: "Job",
      //     createdAt: new Date(),
      //   },
      // ];
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      // Date inseted in the code in TransactionContext despite not the best practice.
      // data.createdAt = new Date();

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
