import { getMemoLists, visit } from "../support/utils";

const memoAPICore = "http://localhost:3000/api/todo";

describe("API Test", () => {
  beforeEach(() => visit());

  const addMemo = (title, content) => {
    cy.request("POST", memoAPICore, { title, content });
  };

  const fetchMemos = () => cy.request("GET", memoAPICore).its("body");

  const deleteMemo = id => cy.request("DELETE", `${memoAPICore}/${id}`);

  it("adds memo", () => {
    addMemo("first memo title", "first memo content");
    addMemo("second memo title", "second memo content");
  });

  it("delete memo", () => {
    deleteMemo(234);
  });
});

describe("initial memos", () => {
  it("mock api setup", () => {
    cy.server();
    cy.route(
      {
        method: "POST",
        url: memoAPICore
      },
      [
        { title: "mock first", content: "mock first" },
        { title: "mock second", content: "mock second" }
      ]
    );

    visit();
    getMemoLists();
  });
});
