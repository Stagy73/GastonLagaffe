import React from "react";
import { mount } from "@cypress/react";
import ListBooks, { bookData } from "./ListBooks";

describe("ListBooks Component", () => {
  it("renders book rows", () => {
    cy.mount(<ListBooks />);

    // Check each book row
    cy.get("tbody tr").each((row, index) => {
      const book = bookData[index];
      cy.wrap(row).within(() => {
        cy.contains(book.title);
        cy.get("button").contains("Download File");
      });
    });
  });

  it("triggers file download", () => {
    cy.intercept("**/*.cbr").as("download");

    cy.mount(<ListBooks />);

    // Check each book row
    cy.get("tbody tr").each((row, index) => {
      const book = bookData[index];
      cy.wrap(row).within(() => {
        cy.contains(book.title);
        cy.get("button").contains("Download File").click();

        // Wait for the download to start
        // cy.wait("@download");

        // Extract the expected file name
        const expectedFileName = book.fileLink.slice(
          book.fileLink.lastIndexOf("/") + 1
        );

        // Construct the path where the file should exist
        const filePath = `cypress/downloads/${expectedFileName}`;

        // Check if the file exists
        cy.task("isExistFile", filePath).should("be.true");
      });
    });
  });
});
