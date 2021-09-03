<template>
    <div class="home-page">
        <mcv-banner/>
        <div class="container page">
            <div class="row">
                <div class="col-md-9">
                    <mcv-feed-toggler :tag-name="tagName"/>
                    <mcv-feed  :api-url='apiUrl'></mcv-feed>
                </div>
                <div class="col-md-3">
                    <mcv-popular-tags></mcv-popular-tags>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import McvFeedToggler from '@/components/FeedToggler'
import McvPopularTags from '@/components/PopularTags'
import McvFeed from '@/components/Feed'
import McvBanner from '@/components/Banner'

export default {
    name: 'McvTagFeed',
    components:{
        McvFeed, McvPopularTags,
        McvBanner, McvFeedToggler
    },
    computed:{
        tagNmae(){
            return this.$route.params.slug
        },
        apiUrl(){
            return `/articles?tag=${this.tagName}`
        }
    }
}
</script>