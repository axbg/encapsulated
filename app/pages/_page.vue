<template>
  <section class="page" :class="page.slug">
    <div class="mx-auto max-w-lg text-center break-all">
      <h1 class="text-3xl lg:text-3xl xl:text-4xl">
        {{ page.title }}
      </h1>
    </div>

    <div
      v-html="$md.render(page.content)"
      class="post__content markdown pb-6 pt-4 md:pb-24 w-12/12 lg:w-1/2 mx-auto text-lg"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component({
  // Called to know which transition to apply
  transition(to, from) {
    if (!from) {
      return 'slide-left';
    }

    return 'slide-right';
  },

  async asyncData({ params, payload }): Promise<{ page: Page }> {
    if (payload) {
      return { page: payload };
    }

    try {
      const page = require(`@/content/pages/${params.page}.json`);

      return {
        page,
      };
    } catch (e) {
      throw new Error('Not found');
    }
  },

  head(): MetaInfo {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.seoDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.page.seoMetaImage,
        },
      ],
    };
  },
})
export default class PageTemplate extends Vue {
  page!: Page;
}
</script>
