<template>
    <div>
        <iframe
            class="video-player"
            height="650"
            width="1050" 
            :src="currentVideo">
        </iframe>
    </div>
</template>

<script>
    export default {
        name: 'VideoPlayeer',
        props:["currentVideo"]
    }
</script>

<style lang="less" scoped>
.video-player {
    border: none;
    outline: none;
    margin-left: 32px;
    margin-top: 32px;
}
</style>