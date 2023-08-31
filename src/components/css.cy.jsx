import React from "react";
import { mount } from "@cypress/react";
import ContainerEmpty from "./Container";

describe("ContainerEmpty Component", () => {
  it("applies correct CSS styles", () => {
    mount(<ContainerEmpty />);
    cy.get(".qr").should("have.css", "text-align", "center");
    cy.get(".qr h1").should("have.font-size", "24px");
  });
});
