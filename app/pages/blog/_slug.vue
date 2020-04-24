<template>
  <article class="post" :class="post.slug">
    <div class="text-center mx-auto">
      <h1 class="text-lg md:text-xl lg:text-4xl xl:text-4xl">
        {{ post.title }}
      </h1>
      <div>
        <h3 class="text-xs md:text-sm italic">{{ post.tag }} / {{ post.publishedAt }}</h3>
      </div>
    </div>

    <div
      v-html="$md.render(post.content)"
      class="post__content markdown pb-6 pt-20 md:pt-25 md:pb-24 w-11/12 lg:w-8/12 mx-auto"
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
