<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <el-col id="icon-logo-box" :span="8">
        <svg id="icon-logo" class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon-test"></use>
        </svg>
        <span class="nav-text">组队队</span>
      </el-col>
      <el-col class="nav-text" :span="6">
        <router-link v-if="false" to="/user" tag="div">
          <svg id="icon-avatar" class="icon" aria-hidden="true">
            <use xlink:href="#icon-user"></use>
          </svg>
        </router-link>
        <router-link v-else to="/login" tag="div">
          <span> 登录</span>
        </router-link></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
.container {
  color: var(--bg-balck-color);
  padding: 20px 0 !important;
  background-color: white;
}
#icon-logo-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
#icon-logo {
  font-size: 0.5rem;
  margin-right: 0.1rem;
}
.nav-text {
  font-size: 0.35rem;
}
#icon-avatar {
  font-size: 0.5rem;
}

/* 下拉菜单样式 */
</style>