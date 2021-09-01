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
      <!-- <mcv-pagination :total="total" :limit="limit" :current-page="currentPage" :url="url">

      </mcv-pagination  > -->
    </div>
    <mcv-pagination :total="total" :limit="limit" :current-page="currentPage" :url="url">

    </mcv-pagination  >
  </div>
</template>

<script>
import McvPagination from '@/components/Pagination'
import {actionTypes} from '@/store/modules/feed'
import {mapState} from 'vuex'
export default {
  name: 'McvFeed',
  components:{
    McvPagination
  },
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  data (){
    return {
      total: 500,
      limit: 10,
      currentPage: 5,
      url : '/tags/dragons'
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
