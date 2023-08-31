import React from "react";
import { mount } from "@cypress/react";
import Footer from "./Footer"; // Replace with the actual import path

describe("Footer Component", () => {
  beforeEach(() => {
    mount(<Footer />); // Mount your component
  });

  it("displays the copyright text", () => {
    cy.get(".footer").should("exist");
    cy.contains("Outlaw Corporate").should("exist");
  });

  it("applies correct CSS styles", () => {
    cy.get(".footer").should("have.css", "background-color", "rgb(51, 51, 51)");
    cy.get(".footer").should("have.css", "color", "rgb(255, 255, 255)");
    cy.get(".footer").should("have.css", "text-align", "center");
    cy.get(".footer").should("have.css", "padding", "20px");
  });
});
