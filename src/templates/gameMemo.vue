<template>
  <div class="memo-section">
    <PageTitle v-bind:pageTitle="this.pageTitle" />
    <h2>Essentdfasfaial Links</h2>
  </div>
</template>

<script>
import PageTitle from '../atoms/page-title'

export default {
  name: 'gameMemo',
  components: {
    PageTitle
  },
  data () {
    return {
      pageTitle: 'gameMemo'
    }
  }
}
</script>
<style scoped>
.memo-section {
  padding: 10px 20px 20px;
  width: fit-content;
  height: fit-content;
  background-color:rgba(255,255,255,0.9);
  background-blend-mode:lighten;
  border: 1px solid #333;
  color: #333;
  box-sizing: border-box;
}
</style>
