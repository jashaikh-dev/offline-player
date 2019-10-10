<template>
    <div class="sidebar">
      <div>
          <button><i class="fas fa-plus" /></button>
      </div>
      <ul>
         <video-list v-for="(video, index) in videoList" 
            :key="index+video" 
            :video="video">
        </video-list>
      </ul>  
    </div>
</template>

<script>
import VideoList from './VideoList' 
export default {
    name: 'SideBar',
    props:["videoList"],
    components: { VideoList }
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
