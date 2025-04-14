<template>
  <footer class="footer -mx-4 md:mx-0">
    <div class="container mx-auto flex justify-center">
      <a href="https://codeberg.org/axbg" title="codeberg" target="blank">
        <img class="h-10 pb-2" src="/images/codeberg.png" alt="codeberg" />
      </a>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {

}
</script>

<style lang="scss">
.centered-container {
  align-items: center;
}
.footer {
  background-color: $bluise;
}
.powered-by:hover {
  color: $bluise-original;
}
.transitioned {
  transition: all 0.5s ease;
}
.transitioned:hover {
  filter: invert(100%);
}
</style>
