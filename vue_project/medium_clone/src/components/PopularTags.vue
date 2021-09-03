<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">Somethig bad happend</div>
    <div v-if="popularTags" class="sidebar">
      <p>Popular Tags</p>
      <div class="tag-list">
        <router-link class="tag-pill tag-default"
          v-for="popularTag in popularTags"
          :key="popularTag"
          :to="{name: 'tag', params: {slug: popularTag}}"
        >
        {{popularTag}}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/popularTags'
export default {
  name: 'McvPopulatTags',
  computed: {
    ...mapState({
      isLoading: state => state.popularTags.isLoading,
      error: state => state.popularTags.error,
      popularTags: state => state.popularTags.data
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags)
  }
}
</script>
