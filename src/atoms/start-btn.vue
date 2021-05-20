<template>
  <div class="start-btn among-us-font">
      <router-link to="/gameMemo">start</router-link>
  </div>
</template>

<script>
export default {
  name: 'startBtn'
}
</script>

<style>
.start-btn {
  height: 54px;
  margin-left: 20px;
  border: 1px solid #666;
  border-radius: 4px;
  font-size: 30px;
  font-weight: bold;
}
.start-btn > a {
  height: 100%;
  padding: 0 20px;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.start-btn:hover {
  border: 1px solid #c51111;
  color: #c51111;
}
</style>
