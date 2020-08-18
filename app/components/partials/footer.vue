<template>
  <footer class="footer -mx-4 md:mx-0">
    <div class="container mx-auto flex justify-center">
      <div
        class="container centered-container text-white text-2xl xl:text-3xl w-2/3 lg:w-1/3 flex justify-between"
      >
        <a
          class="hover:text-red-700"
          href="mailto:bisagalexstefan@gmail.com"
          title="Gmail"
          target="blank"
        >
          <fa :icon="faGoogle" />
        </a>
        <a
          class="hover:text-blue-900"
          href="https://www.facebook.com/bisagalex/"
          title="Facebook"
          target="blank"
        >
          <fa :icon="faFacebook" />
        </a>
        <a class="transitioned" href="https://shadowed.photo" title="shadowed" target="blank">
          <img src="/images/shadowed.png" alt="shadowed" />
        </a>
        <a class="hover:text-black" href="https://github.com/axbg" title="Github" target="blank">
          <fa :icon="faGithub" />
        </a>
        <a
          class="hover:text-blue-900"
          href="https://www.linkedin.com/in/alexbisag/"
          title="LinkedIn"
          target="blank"
        >
          <fa :icon="faLinkedin" />
        </a>
      </div>
    </div>
    <div class="text-white text-center pb-1 pt-3 xl:pt-5">
      <a class="text-xs powered-by" href="https://github.com/Gomah/bluise" target="blank">
        Powered by Bluise
      </a>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  faFacebook,
  faGoogle,
  faLinkedin,
  faGithub,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';

@Component
export default class Footer extends Vue {
  get faFacebook(): IconDefinition {
    return faFacebook;
  }

  get faGoogle(): IconDefinition {
    return faGoogle;
  }

  get faLinkedin(): IconDefinition {
    return faLinkedin;
  }

  get faGithub(): IconDefinition {
    return faGithub;
  }
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
