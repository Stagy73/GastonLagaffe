import React from "react";
import { mount } from "@cypress/react";
import ContainerEmpty from "./Container";

describe("ContainerEmpty Component", () => {
  it("clicks the QR code image", () => {
    mount(<ContainerEmpty />);
    cy.get("img").click();
    // Add assertions here for the expected behavior
  });
});
