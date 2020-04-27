<template>
  <article class="post" :class="post.slug">
    <div class="mx-auto max-w-lg text-center break-all">
      <h1 class="text-3xl lg:text-3xl xl:text-4xl">
        {{ post.title }}
      </h1>
      <div>
        <h3 class="text-sm md:text-base">
          <nuxt-link class="background-color" :to="`/tag/${post.tag}`">{{ post.tag }}</nuxt-link> •
          {{ post.publishedAt }}
        </h3>
      </div>
    </div>

    <div
      v-html="$md.render(post.content)"
      class="post__content markdown pt-12 w-12/12 lg:w-1/2 mx-auto text-lg"
    />
    <back-to-top scroll-distance="150" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MetaInfo } from 'vue-meta';
import BackToTop from '@/components/partials/back-to-top.vue';

@Component({
  components: {
    BackToTop,
  },
  async asyncData({ params, payload }): Promise<{ post: Post }> {
    if (payload) {
      return { post: payload };
    }

    try {
      const post = require(`@/content/blog/${params.slug}.json`);

      return {
        post,
      };
    } catch (e) {
      throw new Error('Not found');
    }
  },

  head(): MetaInfo {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.post.title} | encapsulated`,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.post.seoDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.post.seoMetaImage,
        },
      ],
    };
  },
})
export default class BlogPost extends Vue {
  post!: Post;
}
</script>
