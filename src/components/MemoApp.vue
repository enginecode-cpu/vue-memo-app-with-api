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
        :editingId="editingId"
        @setEditingId="SET_EDITING_ID"
        @resetEditingId="RESET_EDITING_ID"
      />
    </ul>
  </div>
</template>

<script>
import MemoForm from "./MemoForm";
import Memo from "./Memo";
import { mapState, mapActions, mapMutations } from "vuex";
import { SET_EDITING_ID, RESET_EDITING_ID } from "../store/mutations-types";

export default {
  name: "MemoApp",
  components: {
    MemoForm,
    Memo
  },
  computed: {
    ...mapState(["memos"]),
    ...mapState(["editingId"])
  },
  created() {
    this.fetchMemos();
  },
  methods: {
    ...mapActions(["fetchMemos", "addMemo", "deleteMemo", "updateMemo"]),
    ...mapMutations([SET_EDITING_ID, RESET_EDITING_ID])
  }
};
</script>

<style scoped lang="scss">
.memo-list {
  padding: 1.25rem;
  margin: 0;
}
</style>
