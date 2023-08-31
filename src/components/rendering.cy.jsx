import React from "react";
import { mount } from "@cypress/react";
import ContainerEmpty from "./Container";

describe("ContainerEmpty Component", () => {
  it("renders without errors", () => {
    mount(<ContainerEmpty />);
    cy.get(".qr").should("exist");
  });

  it("displays the tip message", () => {
    mount(<ContainerEmpty />);
    cy.contains("Feel free to tip !").should("exist");
  });

  it("displays the QR code image", () => {
    mount(<ContainerEmpty />);
    cy.get("img").should("have.attr", "src", "./qrcode.png");
  });
});
