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

export async function fetchMemos({ commit }) {
  const response = await memoAPICore.get("/");
  commit(FETCH_MEMOS, response.data);
}

export async function addMemo({ commit, dispatch }, payload) {
  const response = await memoAPICore.post("/", payload);
  const memoData = JSON.parse(response.config.data);
  commit(ADD_MEMO, memoData);
  await dispatch("fetchMemos");
}

export async function deleteMemo({ commit }, payload) {
  const id = payload;
  await memoAPICore.delete(`/${id}`);
  await commit(DELETE_MEMO, id);
}

export async function updateMemo({ commit }, payload) {
  const { id, content } = payload;
  await memoAPICore.patch(`/${id}`, { content });
  await commit(EDIT_MEMO, payload);
}

export default {
  fetchMemos,
  addMemo,
  deleteMemo,
  updateMemo
};
