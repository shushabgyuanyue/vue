<template>
  <div class="container">
    <div class="nav-box">
      <navbar />
      <el-menu
        :default-active="activeIndex"
        @select="handleSelect"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item class="menu-item" index="1">
          <router-link :to="{ name: 'recommend', query: { index: 1 }}" tag="div"
            >推荐</router-link
          ></el-menu-item
        >
        <el-menu-item class="menu-item" index="2">
          <router-link :to="{ name: 'project', query: { index: 2 }}" tag="div">项目</router-link></el-menu-item
        >
        <el-menu-item class="menu-item" index="3">
          <router-link :to="{ name: 'activity', query: { index: 3 }}" tag="div">活动</router-link></el-menu-item
        >
        <el-menu-item class="menu-item" index="4">
          <router-link :to="{ name: 'team', query: { index: 4 }}" tag="div">团队</router-link></el-menu-item
        >
        <el-menu-item id="search-box">
          <router-link to="/search" tag="div">
            <el-input id="search-icon" placeholder="搜索"></el-input>
          </router-link>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content-box">
      <router-view></router-view>
    </div>
    <div class="page-bottom small-font">
      <router-link to="/about">组队队</router-link>
      <span>沪ICP备13002172号-3</span>
      <p>信息网络传播视听节目许可证：0910417</p>
    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar";

export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key) {
        this.activeIndex = key;
      }
    }
  },
  components: {
    navbar
  },
  mounted() {
    this.handleSelect(this.$route.query.index)
  }
};
</script>
<style>
</style>

<style scoped>
.container {
  /* padding:130px 0 0 0; */
}
.nav-box {
  top: 0;
  position: fixed;
  z-index: 1050;
  background-color: white;
  width: 100%;
}
.menu-item {
  padding: 0;
  width: 15%;
  font-size: 0.2rem;
}
.itemActive {
  background: black;
}
#search-box {
  width: 40%;
  display: flex;
  align-items: center;
}

.content-box {
  margin-top: 130px;
  padding: 0 1%;
}
.page-bottom {
  margin: 1rem 0 0.2rem 0;
  line-height: 0.7rem;
}
.page-bottom a {
  color: var(--bule-color);
}

/* 自定义字体 */
.small-font {
  font-size: 0.3rem;
  color: var(--black-color);
}
</style>