import { mount, shallowMount } from "@vue/test-utils";
import Memo from "@/components/Memo";

describe("Memo.vue", () => {
  it("수정하지 않는 데이터", () => {
    const memo = { id: 1, title: "test title", content: "test content" };
    const wrapper = shallowMount(Memo, { propsData: { memo } });

    console.log(wrapper.html());

    expect(wrapper.find(".memo-item > strong").text()).toBe("test title");
    expect(wrapper.find(".memo-item > p").text()).toBe("test content");
  });

  it("수정한 데이터", () => {
    const memo = { id: 1, title: "test title", content: "test content" };
    const editingId = 1;
    const wrapper = mount(Memo, { propsData: { memo, editingId } });

    console.log(wrapper.html());

    const input = wrapper.find(".memo-item > p > input");
    input.element.value = "update content";
    input.trigger("keydown", {
      enterKey: true
    });

    console.log(wrapper.html());

    // expect(wrapper.find(".memo-item > strong").text()).toBe("test title");
    // expect(wrapper.find(".memo-item > p").text()).toBe("update content");
  });
});
