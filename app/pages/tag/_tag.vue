<template>
  <section class="blog">
    <div class="py-4 md:py-2 text-center">
      <h1 class="text-xl md:text-xl lg:text-4xl xl:text-4xl">encapsulated</h1>
      <h2 class="text-base md:text-lg lg:text-lg xl:text-lg">
        something about <strong>{{ this.$route.params.tag }}</strong>
      </h2>
    </div>

    <div class="flex flex-wrap md:-mx-4 pb-20">
      <div v-for="(post, index) in posts" :key="index" class="w-full md:w-1/3 my-4 md:px-4">
        <div class="post">
          <nuxt-link :to="`/blog/${post.slug}`">
            <img class="w-full" :src="post.image" />
            <div class="p-6 bg-white">
              <h2 class="text-2xl mb-2">{{ post.title }}</h2>

              <p class="text-base font-light">
                {{ post.excerpt }}
              </p>

              <h6 class="background-color mt-4 font-medium">Read more</h6>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component({
  head(): MetaInfo {
    return {
      title: 'something about software',
      meta: [
        {
          hid: 'encapsulated',
          name: 'encapsulated',
          content: 'something about software',
        },
      ],
    };
  },
})
export default class BlogIndex extends Vue {
  get posts(): Post[] {
    const { tag } = this.$route.params;
    const posts: Post[] = this.$store.state.posts.filter(post => {
      return post.tag === tag;
    });

    if (posts.length === 0) {
      throw new Error('Not Found');
    }

    return [...posts];
  }
}
</script>

<style lang="scss">
.blog {
  .post {
    @apply shadow-md;
    transition: all 0.2s cubic-bezier(0.64, 0, 0.35, 1);
    &:hover {
      @apply shadow-xl;
    }
  }
}
</style>
