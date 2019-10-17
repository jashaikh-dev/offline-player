<template>
  <div class="home">
    <VideoPlayer/>
    <SideBar @addVideo="addVideo" :video-list="videos"></SideBar>
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
  },
  computed:{
    videos(){
      return this.videoList 
    }
  },
  methods:{
    addVideo(video){
      console.log('home: ', video)
      this.videoList.push(video['video-url'])
    }
  }
}
</script>
