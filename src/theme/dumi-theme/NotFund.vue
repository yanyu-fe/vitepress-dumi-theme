<script setup lang="ts">
import { useData } from 'vitepress'
const { site } = useData()
</script>

<template>
  <div className="dt-not-found">
    <h1>PAGE NOT FOUND</h1>
    <a class="link" :href="site.base" aria-label="go to home">
      Take me home
    </a>
  </div>
</template>

<style scoped>
.dt-not-found {
  display: flex;
  flex-direction: column;
  height: 65vh;
  align-items: center;
  justify-content: center;
}
.dt-not-found > h1 {
  position: relative;
  margin: 24px 0;
  color: var(--dt-c-border-light);
  font-size: 78px;
  font-weight: 700;
  text-shadow: -1px -1px 0 var(--dt-c-border);
}
.dt-not-found > a {
  color: var(--dt-c-primary);
}
.dt-not-found > a:not(:hover) {
  text-decoration: none;
}
</style>
