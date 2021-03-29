import {
  getMemoLists,
  getNewMemoContentInput,
  getNewMemoForm,
  getNewMemoTitleInput
} from "../utils";

const addClick = () =>
  getNewMemoForm()
    .get("button[type=submit]")
    .click();

export const enterMemo = (
  titleText = "example title memo",
  contentText = "example content memo"
) => {
  console.log("entering title", titleText);
  console.log("entering content", contentText);

  getNewMemoTitleInput().type(`${titleText}`);
  getNewMemoContentInput().type(`${contentText}`);

  console.log(`typed ${titleText} ${contentText}`);

  addClick();

  const lastItem = ".memo-app .memo-list li:last";

  cy.get(lastItem).should("contain", titleText);
  cy.get(lastItem).should("contain", contentText);
};

export const removeMemo = () =>
  getMemoLists()
    .get("li:first > button[type=button]")
    .click();
