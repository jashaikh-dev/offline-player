
<template>
    <div class="text-input-container">
        <input 
            class="text-input" 
            :type="type" 
            :placeholder="placeholder"
            :name="name"
            :id="id"
            @input="onInput"
        />
    </div>
</template>

<script>
    export default {
        name: 'TextInput',
        props: ["type", "placeholder", "name", "id", "onTextChange"],
        methods: {
            onInput(event){
                this.$emit('onTextChange', event)
            }
        }
    }
</script>

<style lang="less" scoped>
.text-input-container {
    height: 50px;
    padding: 2px;
    width: 80%;
    & > .text-input {
        width: 80%;
        height: 40px;
        border: none;
        border-radius: 2px;
        padding: 2px;
        padding-left: 5px;

    }
}
</style>