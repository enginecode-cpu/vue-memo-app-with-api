import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import AppHeader from "@/components/AppHeader";
import { experiments } from "webpack";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("AppHeader.vue", () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      getMemoCount: () => 2
    };
    store = new Vuex.Store({
      getters
    });
  });

  it("render getters value", () => {
    const wrapper = shallowMount(AppHeader, { store, localVue });
    const strong = wrapper.find("strong");
    expect(strong.text()).toBe(getters.getMemoCount().toString());
  });
});
