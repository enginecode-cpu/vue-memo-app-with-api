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
import MemoForm from "./MemoForm";
import Memo from "./Memo";
import { mapState, mapActions } from "vuex";

export default {
  name: "MemoApp",
  components: {
    MemoForm,
    Memo
  },
  computed: {
    ...mapState(["memos"])
  },
  created() {
    this.fetchMemos();
  },
  methods: {
    ...mapActions(["fetchMemos", "addMemo", "deleteMemo", "updateMemo"])
  }
};
</script>

<style scoped lang="scss">
.memo-list {
  padding: 1.25rem;
  margin: 0;
}
</style>
