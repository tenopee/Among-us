<template>
  <header class="header">
    <p class="title among-us-font">
      <span>@</span>
      <span>memo</span>
    </p>
    <router-link to="/" tag="p" class="setting-btn" v-if="$route.name === 'gameMemo'" />
  </header>
</template>

<script>
export default {
  name: 'commonHeader'
}
</script>

<style>
.header {
  position: absolute;
  top: 0;
  display: flex;
  padding: 0 20px;
  width: 100%;
  background: #000;
  justify-content: space-between;
  box-sizing: border-box;
}
.title {
  position: relative;
  font-size: 24px;
  color: #fff;
}
.title > span:nth-child(2) {
  position: absolute;
  top: -8px;
  left: 90px;
  font-size: 30px;
}
.setting-btn {
  width: 32px;
  height: 43px;
  background: url("/static/icn-setting.png") center / 32px no-repeat;
  cursor: pointer;
}
</style>
