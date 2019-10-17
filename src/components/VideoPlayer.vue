<template>
    <div>
        <iframe
            class="video-player"
            height="650"
            width="1050" 
            src="https://www.youtube.com/embed/ya1fwxnmlQs">
        </iframe>
    </div>
</template>

<script>
    export default {
        name: 'VideoPlayeer'
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