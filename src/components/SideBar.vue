<template>
    <div class="sidebar">
      <div>
          <add-video @addVideo="addVideo"></add-video>
      </div>
      <ul>
         <video-list v-for="(video, index) in videos" 
            :key="index+video" 
            :video="video"
            @playSelectedVideo="playSelectedVideo"
            >
        </video-list>
      </ul>  
    </div>
</template>

<script>
import VideoList from './VideoList' 
import AddVideo from './AddVideo'
export default {

    name: 'SideBar',
    data(){
        return{
            videoList: [
                {'video-title':'ORM', 'video-url': `https://www.youtube.com/embed/ya1fwxnmlQs`},
            {'video-title':"Firebase",'video-url': `https://www.youtube.com/embed/FOtdgiw2Emo`}]
        }
    },
    components: { VideoList, AddVideo },
    computed:{
        videos(){
            return this.videoList 
        }
    },
    methods:{
        addVideo(video){
            console.log('home: ', video)
            this.videoList.push(video)
        },
        playSelectedVideo(selectedVideo){
            this.$emit('playVideo', selectedVideo)
        }
    }

}
</script>

<style scoped lang="less">
    .sidebar{
        width: 300px;
        height: 100vh;
        position: absolute;
        right: 0;
        top: 0;
        background: rgba(46, 167, 9, 0.9);
        background-image: url('./../assets/side-bar-image5.jpeg');
        background-position: center;
        background-attachment: stretch;

        color: #fff;
    }
</style>
