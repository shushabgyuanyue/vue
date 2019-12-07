<template>
  <div class="container">
        <sort/>
    <cardlist :dataType='type'/>
  </div>
</template>

<script>
import sort from '../components/sort'
import cardlist from '../components/cardlist'
export default { 
  components:{
      sort,
    cardlist,
  },
  props:{},
  data(){
    return {
      type:'activity',
    }
  },
  watch:{},
  computed:{
  },
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
.container{}
</style>