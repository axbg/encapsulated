<template>
  <header class="flex items-center py-4 md:py-8">
    <div class="header__logo">
      <nuxt-link to="/">
        <img
          class="enc-logo"
          :src="logo"
          @mouseover="hoverLogo(true)"
          @mouseleave="hoverLogo(false)"
          alt="encapsulated-logo"
          title="encapsulated"
        />
      </nuxt-link>
    </div>

    <nav class="nav ml-auto">
      <ul class="flex flex-row items-center sm:mt-4 sm:pt-4 md:mt-0 md:pt-0 md:mr-4 lg:mr-8">
        <li
          v-for="(page, index) in pages"
          :key="index"
          class="block font-medium px-4 py-1 md:p-2 lg:px-4"
        >
          <nuxt-link :to="`/${page.slug}`">{{ page.title }}</nuxt-link>
        </li>
        <li class="block font-medium px-4 py-1 md:p-2 lg:px-4">
          <a href="/feed.xml" target="_blank">rss feed</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import settings from '@/content/settings/general.json';

@Component
export default class Header extends Vue {
  get pages(): Page[] {
    return this.$store.state.pages;
  }

  hoverLogo(hovered: boolean): void {
    this.logo = hovered ? settings.hoveredLogo : settings.logo;
  }

  logo = settings.logo;
}
</script>

<style lang="scss">
.nav {
  ul li > a {
    &.nuxt-link-active {
      color: $bluise;
      @apply font-bold;
    }
  }
}
</style>
