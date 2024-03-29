<template>
  <div class="">
    <mcv-loading v-if="isLoading" />
    <mcv-error-message v-if="error" />
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
        <router-link
          class="preview-link"
          :to="{name: 'article', params: {slug: article.slug}}"
        >
          <h1>{{ article.title }}</h1>
          <p>{{ article.description }}</p>
          <span>Read more...</span>
          tag list
        </router-link>
      </div>
      <mcv-pagination
        :total="feed.articlesCount"
        :limit="limit"
        :current-page="currentPage"
        :url="baseUrl"
      >
      </mcv-pagination>
    </div>
  </div>
</template>

<script>
import McvErrorMessage from '@/components/ErrorMessage'
import McvLoading from '@/components/Loading'
import {stringify, parseUrl} from 'query-string'
import {limit} from '@/helpers/vars'
import McvPagination from '@/components/Pagination'
import {actionTypes} from '@/store/modules/feed'
import {mapState} from 'vuex'
export default {
  name: 'McvFeed',
  components: {
    McvPagination,
    McvLoading,
    McvErrorMessage
  },
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      limit,
      url: '/'
    }
  },
  mounted() {
    this.fetchFeed()
  },
  watch: {
    currentPage() {
      this.fetchFeed()
    }
  },
  methods: {
    fetchFeed() {
      const parsedUrl = parseUrl(this.apiUrl)
      const strigifiedParams = stringify({
        limit,
        offset: this.offest,
        ...parsedUrl.query
      })
      const apiUrlWithParams = `${parsedUrl.url}?${strigifiedParams}`
      console.log(apiUrlWithParams)
      this.$store.dispatch(actionTypes.getFeed, {apiUrl: apiUrlWithParams})
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.feed.isLoading,
      feed: state => state.feed.data,
      error: state => state.feed.error
    }),
    currentPage() {
      return Number(this.$route.query.page || '1')
    },
    baseUrl() {
      return this.$route.path
    },
    offest() {
      return this.currentPage * limit - limit
    }
  }
}
</script>
