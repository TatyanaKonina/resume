<template>
  <div id="app">
    <mcv-top-bar>

    </mcv-top-bar>
    <router-view></router-view>
  </div>
</template>

<script>

import McvTopBar from '@/components/TopBar'
export default {
  name:'McvApp',
  components:{
    McvTopBar
  },

}
</script>