<template>
  <div class="memo-app">
    <memo-form @addMemo="addMemo" />
    <ul class="memo-list">
      <memo
        v-for="memo in memos"
        :key="memo.id"
        :memo="memo"
        @deleteMemo="deleteMemo"
        @updateMemo="updateMemo"
      />
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import MemoForm from "./MemoForm";
import Memo from "./Memo";

const memoAPICore = axios.create({
  baseURL: "http://localhost:3000/api/todo"
});

export default {
  name: "MemoApp",
  data: () => {
    return {
      memos: []
    };
  },
  components: {
    MemoForm,
    Memo
  },
  created() {
    memoAPICore.get("/").then(res => (this.memos = res.data));
  },
  methods: {
    addMemo(payload) {
      const { title, content } = payload;
      memoAPICore.post("/", payload).then(res => this.memos.push(res.data));
    },
    deleteMemo(id) {
      const targetIndex = this.memos.findIndex(v => v.id === id);
      memoAPICore
        .delete(`/${id}`)
        .then(() => this.memos.splice(targetIndex, 1));
    },
    updateMemo(payload) {
      const { id, content } = payload;
      const targetIndex = this.memos.findIndex(v => v.id === id);
      const targetMemo = this.memos[targetIndex];
      memoAPICore.patch(`/${id}`, { content }).then(() => {
        this.memos.splice(targetIndex, 1, { ...targetMemo, content });
      });
    }
  }
};
</script>

<style scoped lang="scss">
.memo-list {
  padding: 1.25rem;
  margin: 0;
}
</style>
