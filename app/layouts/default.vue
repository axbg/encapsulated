<template>
  <main :class="[$route.name]" class="h-overflow-hidden main px-4 md:px-0">
    <div class="container mx-auto">
      <site-header />
      <nuxt class="nuxt" />
    </div>
    <svg class="divider -mx-4 sm:mx-0 m-bottom" max-height="100px" width="100%" viewBox="0 0 10 1">
      <polygon stroke="none" stroke-width="0" fill="#2C7A7B" points="0,1 0,1 10,1 1,0" />
    </svg>
    <site-footer />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SiteHeader from '@/components/partials/header.vue';
import SiteFooter from '@/components/partials/footer.vue';

@Component({
  components: {
    SiteHeader,
    SiteFooter,
  },
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss">
.divider {
  position: relative;
  min-width: 100vw;
  margin-top: auto;
}
.nuxt {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.h-overflow-hidden {
  overflow-x: hidden;
}
.m-bottom {
  margin-bottom: -1px;
}
</style>
