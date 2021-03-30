import getters from "../src/store/getters";

const memos = [
  { title: "getter test title1", content: "getter test content1" },
  { title: "getter test title2", content: "getter test content2" },
  { title: "getter test title3", content: "getter test content3" },
  { title: "getter test title4", content: "getter test content4" }
];

const state = { memos };

describe("getter가 잘 작동이 되는가?", () => {
  it("임의의 데이터 5개를 추가해보자", () => {
    const actual = getters.getMemoCount(state);

    expect(actual).toBe(4);
  });
});
