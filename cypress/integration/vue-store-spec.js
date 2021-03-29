import { enterMemo, visit } from "../support/utils";

describe("UI to Vuex store", () => {
  beforeEach(() => visit());

  const getStore = () => cy.window().its("app.$store");

  it("has editingId, memos", () => {
    getStore()
      .its("state")
      .should("have.keys", ["editingId", "memos"]);
  });

  it("start is empty", () => {
    getStore()
      .its("state")
      .should("deep.equal", {
        editingId: 0,
        memos: []
      });
  });

  it("stores memos in the store", () => {
    enterMemo("my first memo");
    enterMemo("my first memo");

    getStore().its("state.memos");

    const removeIds = lists => lists.map(memo => Cypress._.omit(memo, memo.id));

    getStore()
      .its("state.memos")
      .then(removeIds);
  });
});
