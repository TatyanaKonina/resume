<template>
  <div class="">
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">Something bad happend</div>
    <div v-if="feed">
      <div
        class="article-preview"
        v-for="(article, index) in feed.articles"
        :key="index"
      >
        <div class="article-meta">
          <router-link
            :to="{name: 'userProfile', params: {slug: article.author.username}}"
          >
            <img :src="article.author.image" alt="user img" />
          </router-link>
          <div class="info">
            <router-link
              class="author"
              :to="{
                name: 'userProfile',
                params: {slug: article.author.username}
              }"
            >
              {{ article.author.username }}
            </router-link>
            <span class="date"> {{ article.createdAt }}</span>
          </div>
          <div class="pull-xs-right">
              add to fav
          </div>
        </div>
        <router-link class="preview-link" :to="{name: 'article', params: {slug: article.slug}}">
            <h1>{{article.title}}</h1>
            <p>{{article.description}}</p>
            <span>Read more...</span>
            tag list
        </router-link>
      </div>
      pagination
    </div>
  </div>
</template>

<script>
import {actionTypes} from '@/store/modules/feed'
import {mapState} from 'vuex'
export default {
  name: 'McvFeed',
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.$store.dispatch(actionTypes.getFeed, {apiUrl: this.apiUrl})
  },
  computed: {
    ...mapState({
      isLoading: state => state.feed.isLoading,
      feed: state => state.feed.data,
      error: state => state.feed.error
    })
  }
}
</script>
