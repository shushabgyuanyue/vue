<template>
  <div class="container">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in menu" :key="item.id">
        <router-link
          :to="{
            name: 'details',
            params: { cardId: item.id, cardType: item.type }
          }"
          tag="div"
        >
          <img :src="item.src" alt="糟糕糕" />
        </router-link>
      </swiper-slide>
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <cardlist />
  </div>
</template>

<script>
import cardlist from "../components/cardlist";

import Swiper from "swiper";
import "../../node_modules/swiper/dist/css/swiper.min.css";

export default {
  components: {
    cardlist
  },
  props: {},
  data() {
    return {
      menu: [],
      // wiper的配置
      swiperOption: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        speed: 500,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          progressbarOpposite: false, //使进度条分页器与Swiper的direction参数相反
          bulletElement: "li", //设定分页器指示器（小点）的HTML标签。
          clickable: true //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        }
      }
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    this.menu = [
      {
        id: 1,
        type: "activity",
        src: require("../assets/img/a4.gif"),
        info: "如果还有兴趣学习的可以看下原理讲解：",
        member: 12,
        remark: 11
      },
      {
        id: 2,
        type: "activity",
        src: require("../assets/img/a1.gif"),
        info: "如果还有兴趣学习的可以看下原理讲解：",
        member: 12,
        remark: 11
      },
      {
        id: 3,
        type: "team",
        src: require("../assets/img/t2.jpg"),
        info: "如果还有兴趣学习的可以看下原理讲解：",
        member: 12,
        remark: 11
      },
      {
        id: 4,
        type: "project",
        src: require("../assets/img/p1.jpg"),
        info: "如果还有兴趣学习的可以看下原理讲解：",
        member: 12,
        remark: 11
      }
    ];
  }
};
</script>
<style scoped>
.container {
  margin: 0;
  padding: 0;
  font-size: 0.3rem;
}
.swiper-container {
  /* width: 100%; */
  height: 2.5rem;
}
.swiper-container img {
  width: 95%;
  height: 2.5rem;
  border-radius: 10px;
}
</style>
<style>
.swiper-pagination-bullet {
  background: white;
}
.swiper-pagination-bullet-active {
  background: var(--yellow-color) !important;
}
.swiper-pagination-bullet {
  background: white;
  opacity: 1;
  height: 0.12rem;
  width: 0.12rem;
}
.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets {
  width: 20%;
  background: rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  right: 0;
  border-radius: 10px;
}
</style>
