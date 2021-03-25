<template>
  <li class="memo-item">
    <strong>{{ memo.title }}</strong>
    <p @dblclick="handleDblClick">
      <template v-if="!isEditing">{{ memo.content }}</template>
      <input
        v-else
        type="text"
        ref="content"
        :value="memo.content"
        @blur="handleBlur"
        @keydown.enter="updateMemo"
      />
    </p>
    <button type="button" @click="deleteMemo">
      <i class="fas fa-times"></i>
    </button>
  </li>
</template>

<script>
export default {
  name: "Memo",
  data: () => {
    return {
      isEditing: false
    };
  },
  props: {
    memo: {
      type: Object
    }
  },
  methods: {
    deleteMemo() {
      const id = this.memo.id;
      this.$emit("deleteMemo", id);
    },
    updateMemo(e) {
      const id = this.memo.id;
      const content = e.target.value.trim();
      if (content.length <= 0) {
        return false;
      }
      this.$emit("updateMemo", { id, content });
      this.isEditing = false;
    },
    handleDblClick() {
      this.isEditing = true;
      this.$nextTick(() => {
        this.$refs.content.focus();
      });
    },
    handleBlur() {
      this.isEditing = false;
    }
  }
};
</script>

<style scoped lang="scss">
.memo-item {
  overflow: hidden;
  position: relative;
  margin-bottom: 1.25rem;
  padding: 1.5rem;
  box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  list-style: none;

  button {
    background: none;
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 20px;
    color: #e5e5e5;
    border: 0;

    strong {
      display: block;
      margin-bottom: 0.75rem;
      font-size: 18px;
      font-weight: 400;
      word-break: break-all;
    }
    
    p {
      margin: 0;
      font-size: 14px;
      line-height: 22px;
      color: #666;
    }
  }
}
</style>
