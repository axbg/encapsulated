<template>
  <section class="blog">
    <div class="py-4 md:py-2 text-center">
      <h1 class="text-xl md:text-xl lg:text-4xl xl:text-4xl">encapsulated</h1>
      <h2 class="text-base md:text-lg lg:text-lg xl:text-lg background-color">
        something about software
      </h2>
    </div>

    <div class="flex flex-wrap md:-mx-4 pb-20">
      <div v-for="(post, index) in posts" :key="index" class="w-full md:w-1/3 my-4 md:px-4">
        <div class="post md:h-full">
          <nuxt-link :to="`/blog/${post.slug}`">
            <div class="p-6 bg-white md:h-full">
              <h2 class="text-2xl mb-2">{{ post.title }}</h2>
              <h3 class="pb-2 text-center background-color">{{ post.tag }}</h3>
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
    return [...this.$store.state.posts];
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
.tag {
  color: $bluise;
}
</style>
