<template>
  <div class="home">
    <VideoPlayer/>
    <SideBar :video-list="videoList"></SideBar>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar'
import VideoPlayer from '@/components/VideoPlayer'
export default {

  name: 'Home',
  data(){
    return{
      videoList: [`https://www.youtube.com/embed/ya1fwxnmlQs`,`https://www.youtube.com/embed/FOtdgiw2Emo`]
    }
  },
  components: {
    SideBar,
    VideoPlayer
  }
}
</script>
