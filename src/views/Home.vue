<template>
  <div class="home">
    <SideBar :video-list="videoList"></SideBar>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SideBar from '@/components/SideBar'
export default {

  name: 'Home',
  data(){
    return{
      videoList: [`https://www.youtube.com/embed/ya1fwxnmlQs`,`https://www.youtube.com/embed/FOtdgiw2Emo`]
    }
  },
  components: {
    HelloWorld,
    SideBar
  }
}
</script>
