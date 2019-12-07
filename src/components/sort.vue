<template>
  <div class="container">
      <el-tag  v-for="(item, index) in tagList" :key="index" class="tag-btn " :type="item.type" 
      v-on:click="select($event,index)" :class="{tagActive:item.isactive}" :effect="item.effect" >{{item.label}}</el-tag>
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      tagList: [
        { type: "", label: "时间",isactive:true,effect:'dark' },
        { type: "success", label: "热度",isactive:false,effect:'plain' },
        { type: "info", label: "评论",isactive:false,effect:'plain' },
        { type: "danger", label: "收藏",isactive:false,effect:'plain' }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    select: function(e,index) {
        for(var i=0;i<this.tagList.length;i++)
        {
            if(i==index)
            {
                this.tagList[i].isactive=true;
                this.tagList[i].effect="dark";
            }else{
                this.tagList[i].isactive=false;
                this.tagList[i].effect="plain";
            }
        } 
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.container {
  font-size: 0.2rem;
  margin: 0;
  padding: 0 1%;
  display: flex;
  flex-wrap: wrap;
}
.tag-btn {
  margin: 0.2rem 0.15rem;
}
.tagActive {
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, .2);
}
</style>
