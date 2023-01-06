<script lang="ts" setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
console.log(frontmatter)
</script>

<template>
  <div v-if="frontmatter.layout !== false">
    这里是布局
  </div>
  <Content v-else />
</template>
