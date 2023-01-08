<script lang="ts" setup>

</script>

<template>
  <div class="dt-header">
    <div class="dt-header-content">
      <section class="dt-header-content__left">
        左边
      </section>
      <section class="dt-header-content__right">
        右边
      </section>
    </div>
  </div>
</template>

<style scoped>
.dt-header{
  height: var(--dt-s-header-height);
  width: 100%;
  background: #208a41;
  position: relative;
  z-index: 10;
}
.dt-header-content{
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 24px;
  max-width: var(--dt-s-content-width);
  height: var(--dt-s-header-height);
  box-sizing: border-box;
}
.dt-header-content__left{
  width: var(--dt-s-sidebar-width);
}
.dt-header-content__right{
  flex: 1;
  display: flex;
  justify-content: space-between;
}
</style>
