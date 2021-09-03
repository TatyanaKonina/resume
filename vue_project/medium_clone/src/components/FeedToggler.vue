<template>
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active">
      <li class="nav-item" v-if="isLoggedIn">
        <router-link class="nav-link" :to="{name: 'yourFeed'}" :class="{active: routeName === 'yourFeed'}"
          >Your feed
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :class="{active: routeName === 'globalFeed'}" class="nav-link" :to="{name: 'globalFeed'}"
          >Global feed
        </router-link>
      </li>
      <li class="nav-item" v-if="tagName" :class="{active: routeName === 'tag'}">
        <router-link class="nav-link" :to="{name: 'tag'}">
            <i class="ion-pound"></i>
          {{ tagName }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {gettersTypes} from '@/store/modules/auth'
export default {
  name: 'McvTagToggler',
  props: {
    tagName: {
      type: String,
      required: false
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: gettersTypes.isLoggedIn
    }),
    routeName(){
        return this.$route.name
    }
  },
  
}
</script>
