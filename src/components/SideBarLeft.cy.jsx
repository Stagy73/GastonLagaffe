import React from "react";
import { mount } from "@cypress/react";
import SlideshowWithAds from "./SideBarLeft";

describe("Slideshow with Ads", () => {
  beforeEach(() => {
    mount(<SlideshowWithAds />); // Mount your component
  });

  it("renders slideshow and ads correctly", () => {
    // Assert the slideshow component exists
    cy.get(".slideshow-container").should("exist");

    // Assert that both slideshow images are displayed
    cy.get(".slideshow-image").should("be.visible");

    // Iterate through each slideshow image and check dimensions
    cy.get(".slideshow-image img").each((image) => {
      cy.wrap(image)
        .should("have.attr", "width", "400px")
        .should("have.attr", "height", "400px");
    });

    // Assert the ad components exist
    // cy.get(".ad-component").should("exist");

    // Assert the expected layout of slideshow and ads
    /*  cy.get(".slideshow-container")
      .should("be.above", ".ad-component")
      .and("be.leftOf", ".ad-component"); */
  });
});
