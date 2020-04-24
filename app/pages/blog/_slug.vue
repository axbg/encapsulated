<template>
  <article class="post" :class="post.slug">
    <div class="mx-auto max-w-lg text-center break-all">
      <h1 class="text-3xl lg:text-3xl xl:text-4xl cursor-pointer" @click="scrollTop">
        {{ post.title }}
      </h1>
      <div>
        <h3 class="text-xs md:text-base">
          <nuxt-link :to="`/tag/${post.tag}`">{{ post.tag }}</nuxt-link> • {{ post.publishedAt }}
        </h3>
      </div>
    </div>

    <div
      v-html="$md.render(post.content)"
      class="post__content markdown pb-6 pt-12 md:pb-24 w-12/12 lg:w-1/2 mx-auto text-lg"
    />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component({
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
          content: this.post.seoDescription,
        },
        {
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
