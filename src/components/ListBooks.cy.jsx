import React from "react";
import { mount } from "@cypress/react";
import ListBooks from "./ListBooks";

describe("ListBooks Component", () => {
  it("renders table rows with download buttons", () => {
    cy.mount(<ListBooks />);

    cy.get("tr")
      .eq(0)
      .within(() => {
        cy.contains("Gaston 00 Gaffes et Gadgets");
        cy.contains("Download File").click();
      });
  });
});
