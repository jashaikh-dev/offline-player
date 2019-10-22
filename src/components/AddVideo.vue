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
        <button class="add-button" @click="onVideoAdd"> Add </button>
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
                let whatToSave = value
                if(name=="video-url"){
                    const videoId = value.split('=')[1]
                    whatToSave = `https://www.youtube.com/embed/${videoId}`
                }
                this.video[name] = whatToSave
            },
            onVideoAdd(){
                this.$emit('addVideo', this.video)
                this.video = {}
                console.log(this.video)
                //console.log(this.video)
            }
        }
    }
</script>

<style lang="less" scoped>
    .add-video-container {
      margin-top: 4px; 
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;   
    }
    .add-button {
        height: 45px;
        width: 80%;
        font-size: 20px;
        border: none;
        border-radius: 2px;
        background: rgba(0,210,90,.6);
        color: #fff;
    }
</style>