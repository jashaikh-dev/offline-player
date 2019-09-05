<template>
  <div class="home">
    <SideBar></SideBar>
    <HelloWorld msg="Offline Player"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SideBar from '@/components/SideBar'
export default {
  name: 'home',
  components: {
    HelloWorld,
    SideBar
  }
}
</script>
