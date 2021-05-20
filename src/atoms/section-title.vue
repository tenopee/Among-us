<template>
  <p class="among-us-font">{{sectionTitle}}</p>
</template>

<script>
export default {
  name: 'sectionTitle',
  props: ['sectionTitle']
}
</script>

<style>
.page-title {
  width: fit-content;
  height: 64px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 40px;
  border-bottom: 2px dashed #4e4e4e;
}
</style>
