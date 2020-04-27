<template>
  <div
    class="mx-auto text-center back-to-top pb-4 cursor-pointer"
    :class="{ hidden: isHidden }"
    @click="backToTop"
  >
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="chevron-up"
      class="svg-inline--fa fa-chevron-up fa-w-14 chevron"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
      ></path>
    </svg>
    <p class="scroll-top-text">Top</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  methods: {
    handleScroll(): void {
      if (window.scrollY > this.scrollDistance) {
        this.isHidden = false;
      } else {
        this.isHidden = true;
      }
    },
    backToTop(): void {
      window.scrollTo(0, 0);
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
})
export default class BackToTop extends Vue {
  isHidden = true;

  @Prop({ default: 150 })
  scrollDistance: number;
}
</script>

<style lang="scss">
.hidden {
  display: none;
}
.back-to-top {
  position: fixed;
  top: 35%;
  right: 18%;
  z-index: 1;
  font-size: 30px;
  color: white;
  user-select: none;
}
.back-to-top:hover {
  color: $bluise;
}
.chevron {
  color: $bluise;
}
.scroll-top-text {
  font-size: 16px;
}

@media screen and (max-width: 1100px) {
  .back-to-top {
    display: block;
    position: static;
    margin: 0 auto;
    text-align: center;
  }
  .hidden {
    display: block;
  }
  .back-to-top {
    color: $bluise;
  }
}
</style>
