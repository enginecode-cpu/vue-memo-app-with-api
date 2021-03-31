import { shallowMount } from "@vue/test-utils";
import Memo from "@/components/Memo";

describe("Computed Test", () => {
  it("Memo.vue Computed Test return false", () => {
    const memo = {
      id: 1,
      title: "computed test title",
      content: "computed test content",
    };
    const wrapper = shallowMount(Memo, { propsData: { memo } });
    expect(wrapper.vm.isEditing).toBe(false);
  });

  it("Memo.vue Computed Test return true", () => {
    const memo = {
      id: 1,
      title: "computed test title",
      content: "computed test content",
    };
    const editingId = 1;
    const wrapper = shallowMount(Memo, { propsData: { memo, editingId } });
    expect(wrapper.vm.isEditing).toBe(true);
  });
});
