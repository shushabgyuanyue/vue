<template>
  <div class="container">
    <div class="card-ul">
      <div
        class="card-box"
        v-for="item in dataType == 'team'? teamList:(dataType == 'project' ? projectList : (dataType == 'activity'? activityList: cardList))"
        :key="item.id"
      >
        <router-link
          tag="div"
          :to="{
            name: 'details',
            params: { cardId: item.id, cardType: item.type }
          }"
        >
          <div class="img-box" @click="clickImg">
            <img :src="item.src" class="image" />
            <div class="img-mask"></div>
            <div class="card-bottom-box">
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-chengyuan"></use>
                </svg>
                <span>{{ item.member }}</span>
              </div>
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-pinglun"></use>
                </svg>
                <span>{{ item.remark }}</span>
              </div>
            </div>
          </div>
        </router-link>
        <span class="text-info">{{ item.info }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  components: {},
  props: ["dataType"],
  data() {
    return {
      cardList: [],
      activityList: [],
      projectList: [],
      teamList: []
    };
  },
  watch: {},
  computed: {
    ...mapState(['cardlist'])
  },
  methods: {
    clickImg: function(e) {
      console.log("yes");
    },
  },
  created() {},
  mounted() {
    var mycardlist= [...this.cardlist]
    for (var i = 0; i < mycardlist.length; i++) {
      this.cardList.push(mycardlist[i]);
      if (mycardlist[i].type == "project") {
        this.projectList.push(mycardlist[i]);
      } else {
        if (mycardlist[i].type == "activity") {
          this.activityList.push(mycardlist[i]);
        } else {
          this.teamList.push(mycardlist[i]);
        }
      }
    }   
  }
};
</script>
<style scoped>
.container {
  margin: 0;
  padding: 0;
}
.card-ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card-box {
  margin-top: 0.3rem;
  width: 46%;
}
.img-box {
  position: relative;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #ebeef5;
}

.image {
  width: 100%;
  border-radius: 10px;
  height: 2rem;
  display: block;
}
.img-mask {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
  top: 0;
  left: 0;
}
.card-bottom-box {
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 100%;
  bottom: 0.1rem;
  z-index: 2;
}
.card-bottom-box div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-bottom-box svg {
  font-size: 0.5rem;
}
.card-bottom-box span {
  font-size: 0.3rem;
  color: white;
}

.text-info {
  font-size: 0.25rem;
  line-height: 0.4rem;
  text-align: left;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>