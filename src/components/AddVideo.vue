<template>
    <div class="add-video-container">
        <text-input 
            type="text"
            placeholder="Enter Video Title"
            name="video-title"
            id="video-title"
            @onTextChange="onTextChange"
        />
        <text-input 
            type="text"
            placeholder="Enter Video Url"
            name="video-url"
            id="video-url"
            @onTextChange="onTextChange"
        />
        <button @click="onVideoAdd"> Add </button>
    </div>
</template>

<script>
    import TextInput from '@/components/common/TextInput'
    export default {
        name: "AddVideo",
        data(){
            return{
                video: {}
            }
        },
        components: { TextInput },
        methods: {
            onTextChange(event){
                const {id, name, value } = event.target
                this.video[name] = value
            },
            onVideoAdd(){
                console.log(this.video)
            }

        }

    }
</script>

<style lang="less" scoped>
    .add-video-container {
      margin-top: 4px     
    }
</style>