<template>
  <div class="home">
    <VideoPlayer :currentVideo="currentVideo"/>
    <SideBar @playVideo="playVideo"/>
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
      selectedVideo: 'https://www.youtube.com/embed/ya1fwxnmlQs'
    }
  },
  components: {
    SideBar,
    VideoPlayer
  },
  computed:{
    currentVideo(){
      return this.selectedVideo
    }
  },
  methods: {
    playVideo(video){
      this.selectedVideo = video['video-url']
    }
  }
}
</script>
