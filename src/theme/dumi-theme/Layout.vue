<script lang="ts" setup>
import { useData } from 'vitepress'
import DTNav from './components/Nav.vue'
const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.layout !== false">
    <DTNav />
  </div>
  <Content v-else />
</template>
