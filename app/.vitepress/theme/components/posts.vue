<template>
  <div class="posts">
    <CardPost v-for="post in computedPosts" :key="post.url" :post="post" />
  </div>
</template>

<script lang="ts" setup>
import { computedPosts } from '../store';
import { useRoute } from 'vitepress/dist/client/app/router';
import CardPost from './card-post.vue';

const route = useRoute();
route.path.replace('/index.html', '/');
</script>

<style lang="less" scoped>
.card-post {
  position: relative;

  .prose {
    max-width: 100% !important;
  }

  &__link {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: ' ';
    z-index: 1;
  }

  &__content {
    background-color: white;
    z-index: 1;
  }

  &__effect {
    z-index: -1;
    content: ' ';
    height: 30px;
    width: 100%;
    position: absolute;
    background-color: var(--c-logo);
    transition: 0.2s;
    opacity: 0;
    top: 30px;
  }

  &:hover {
    .card-post__effect {
      top: -5px;
      opacity: 1;
      transform: rotate(0.25deg);
    }
  }
}
</style>
