<template>
  <div id="app">
    <mcv-top-bar>

    </mcv-top-bar>
    <router-view></router-view>
  </div>
</template>

<script>

import McvTopBar from '@/components/TopBar'
import {actionTypes} from '@/store/modules/auth'
export default {
  name:'McvApp',
  components:{
    McvTopBar
  },
  mounted(){
    this.$store.dispatch(actionTypes.getCurrentUser)
  }

}
</script>