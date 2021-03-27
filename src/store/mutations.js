import {
  FETCH_MEMOS,
  ADD_MEMO,
  DELETE_MEMO,
  EDIT_MEMO
} from "./mutations-types";

export default {
  [FETCH_MEMOS](state, payload) {
    state.memos = payload;
  },
  [ADD_MEMO](state, payload) {
    state.memos.push(payload);
  },
  [DELETE_MEMO](state, payload) {
    const targetIndex = state.memos.findIndex(v => v.id === payload);
    state.memos.splice(targetIndex, 1);
  },
  [EDIT_MEMO](state, payload) {
    const { id, content } = payload;
    const targetIndex = state.memos.findIndex(v => v.id === id);
    const targetMemo = state.memos[targetIndex];
    state.memos.splice(targetIndex, 1, { ...targetMemo, content });
  }
};
