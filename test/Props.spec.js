import { shallowMount } from "@vue/test-utils";
import Memo from "@/components/Memo";

describe("Memo.vue", () => {
  it("수정하지 않는 데이터", () => {
    const memo = { id: 1, title: "test title", content: "test content" };
    const wrapper = shallowMount(Memo, { propsData: { memo } });

    console.log(wrapper.html());

    expect(wrapper.find(".memo-item > strong").text()).toBe("test title");
    expect(wrapper.find(".memo-item > p").text()).toBe("test content");
  });
});
