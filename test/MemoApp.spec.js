import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import MemoApp from "@/components/MemoApp";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("MemoApp.vue", () => {
  const testMemos = [
    { id: 1, title: "test title1", content: "test content1" },
    { id: 2, title: "test title2", content: "test content2" },
    { id: 3, title: "test title3", content: "test content3" },
    { id: 4, title: "test title4", content: "test content4" },
    { id: 5, title: "test title5", content: "test content5" }
  ];

  let states = [];
  let actions;
  let store;

  beforeEach(() => {
    states = testMemos;
    actions = {
      actions: jest.fn()
    };
    store = new Vuex.Store({
      states,
      actions
    });
  });

  it("render states", () => {
    expect(states).toStrictEqual([
      { id: 1, title: "test title1", content: "test content1" },
      { id: 2, title: "test title2", content: "test content2" },
      { id: 3, title: "test title3", content: "test content3" },
      { id: 4, title: "test title4", content: "test content4" },
      { id: 5, title: "test title5", content: "test content5" }
    ]);
  });

  it("states.length is 5", () => {
    expect(states.length).toBe(5);
  });
});
