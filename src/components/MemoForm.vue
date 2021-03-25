<template>
  <div class="memo-form">
    <form @submit.prevent="addMemo">
      <fieldset>
        <div>
          <input
            class="memo-form__title-form"
            v-model="title"
            type="text"
            placeholder="메모의 제목을 입력해주세요"
          />
          <textarea
            class="memo-form__content-form"
            v-model="content"
            placeholder="메모의 내용을 입력해주세요"
          />
          <button type="reset" @click="resetFields">
            <i class="fas fa-sync-alt"></i>
          </button>
        </div>
        <button type="submit">등록하기</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: "MemoForm",
  data: () => {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    resetFields() {
      this.title = "";
      this.content = "";
    },
    addMemo() {
      const { title, content } = this;
      const isEmpty = title.length <= 0 || content.length <= 0;
      if (isEmpty) {
        return false;
      }
      this.$emit("addMemo", { title, content });
      this.resetFields();
    }
  }
};
</script>

<style scoped lang="scss">
.memo-form {
  margin-bottom: 1.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid #eeeeee;

  form fieldset {
    div {
      position: relative;
      padding: 1.5rem;
      margin-bottom: 1.25rem;
      box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.2);
      background-color: #ffffff;

      .memo-form__title-form {
        width: 100%;
        margin-bottom: 0.75rem;
        font-size: 18px;
        line-height: 26px;
      }

      .memo-form__content-form {
        width: 100%;
        height: 66px;
        font-size: 14px;
        line-height: 22px;
        vertical-align: top;
      }
    }

    button[type="reset"] {
      position: absolute;
      right: 20px;
      bottom: 20px;
      font-size: 16px;
      background: none;
    }

    button[type="submit"] {
      float: right;
      width: 96px;
      padding: 0.75rem 0;
      border-radius: 4px;
      background-color: #ff5a00;
      color: #ffffff;
      font-size: 16px;
    }
  }

  input:focus {
    outline: none;
  }
}
</style>
