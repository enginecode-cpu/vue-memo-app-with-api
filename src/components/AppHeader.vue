<template>
  <div class="app-header">
    <h1>메모 애플리케이션</h1>
    <p>
      <strong>{{ getMemoCount }}</strong>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AppHeader",
  computed: {
    ...mapGetters(["getMemoCount"])
  }
};
</script>

<style scoped lang="scss">
.app-header {
  overflow: hidden;
  padding: 52px 0 27px;
  h1 {
    float: left;
    font-size: 24px;
    text-align: center;
  }
  p {
    float: right;
    padding-top: 0.5rem;
    font-size: 18px;
    vertical-align: bottom;
  }
  p strong {
    color: #ff5a00;
  }
}
</style>
