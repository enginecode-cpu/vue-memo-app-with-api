import {
  FETCH_MEMOS,
  ADD_MEMO,
  DELETE_MEMO,
  EDIT_MEMO
} from "./mutations-types";
import axios from "axios";

const memoAPICore = axios.create({
  baseURL: "http://localhost:3000/api/todo"
});

export function fetchMemos({ commit }) {
  memoAPICore.get("/").then(res => {
    commit(FETCH_MEMOS, res.data);
  });
}

export function addMemo({ commit }, payload) {
  memoAPICore
    .post("/", payload)
    .then(res => {
      const memoData = JSON.parse(res.config.data);
      commit(ADD_MEMO, memoData);
    })
    .then(() => {
      memoAPICore.get("/").then(res => {
        commit(FETCH_MEMOS, res.data);
      });
    });
}

export function deleteMemo({ commit }, payload) {
  const id = payload;
  memoAPICore.delete(`/${id}`).then(() => {
    commit(DELETE_MEMO, id);
  });
}

export function updateMemo({ commit }, payload) {
  const { id, content } = payload;
  memoAPICore.patch(`/${id}`, { content }).then(() => {
    commit(EDIT_MEMO, payload);
  });
}

export default {
  fetchMemos,
  addMemo,
  deleteMemo,
  updateMemo
};
