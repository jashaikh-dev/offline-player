<template>
    <div class="sidebar">
      <p>sidebar</p>  
    </div>
</template>

<script>
export default {
    name: 'SideBar'
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
        color: #fff;
    }
</style>
