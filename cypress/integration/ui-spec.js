import { visit, getMemoLists, enterMemo } from "../support/utils";
import { removeMemo } from "../support/actions";

describe("My First Test using cypress", () => {
  context("iphone-x", () => {
    beforeEach(() => {
      visit();
      cy.viewport("iphone-x");
    });

    it("loads memo app", () => {
      cy.get(".memo-app").should("be.visible");
    });

    it("reset my memos", () => {
      getMemoLists().should("have.length", 0);
    });

    it("add memo test", () => {
      enterMemo();
    });

    it("remove memo test", () => {
      removeMemo();
    });
  });
});
