export const visit = () => cy.visit("/");

export const getMemoApp = () => cy.get(".memo-app");

export const getMemoLists = () =>
  getMemoApp()
    .find(".memo-list")
    .find("li");

export const newId = () =>
  Math.random()
    .toString()
    .substr(2, 10);

export const stubMathRandom = () => {
  let counter = 101;

  cy.stub(Math, "random").callsFake(() => counter++);
  cy.window().then(win => {
    cy.stub(win.Math, "random").callsFake(() => counter++);
  });
};

export const makeMemo = (text = "memo") => {
  const id = newId();
  const title = `${text} title ${id}`;
  const content = `${text} content ${id}`;

  return {
    id: parseInt(id),
    title,
    content
  };
};

export const getNewMemoForm = () => getMemoApp().find(".memo-form");

export const getNewMemoTitleInput = () =>
  getNewMemoForm().find(".memo-form__title-form");

export const getNewMemoContentInput = () =>
  getNewMemoForm().find(".memo-form__content-form");

export const addClick = () =>
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
