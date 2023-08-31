import React from "react";
import { mount } from "@cypress/react";
import ListBooks, { bookData } from "./ListBooks";

describe("ListBooks Component", () => {
  it("renders book rows and triggers file download", () => {
    cy.intercept("**/*.cbr").as("download");

    cy.mount(<ListBooks />);

    // Check each book row
    cy.get("tbody tr").each((row, index) => {
      const book = bookData[index];
      cy.wrap(row).within(() => {
        cy.contains(book.title);
        cy.get("button").contains("Download File").click(); // Click the download button
      });

      // Wait for the download to complete
      cy.wait("@download", { timeout: 30000 }).then((interception) => {
        expect(interception.response.statusCode).to.equal(200);

        // Assert that the correct file is downloaded
        const expectedFileName = book.fileLink.slice(
          book.fileLink.lastIndexOf("/") + 1
        );
        cy.readFile(`./cypress/downloads/${expectedFileName}`).should("exist");
      });
    });
  });
});
