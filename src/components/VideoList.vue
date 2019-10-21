<template>
    <li @click="playThisVideo(video)">
       <p>{{ video['video-title'] }}</p> 
    </li>
</template>

<script>
    export default {
        name: 'VideoList',
        props: ['video'],
        methods:{
            playThisVideo(clickedVideoUrl){
                this.$emit('playSelectedVideo', clickedVideoUrl)
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>