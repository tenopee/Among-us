<template>
  <div class="wrapper">
    <CommonHeader />
    <main>
      <router-view />
    </main>
    <CommonFooter />
  </div>
</template>

<script>
import CommonHeader from '../organisms/common-header'
import CommonFooter from '../organisms/common-footer'

export default {
  name: 'index',
  components: {
    CommonHeader,
    CommonFooter
  }
}
</script>

<style>
@font-face {
  font-family: 'WebFont';
  src: url('/static/amongus vector.ttf');
}
* {
  margin: 0;
  padding: 0;
}
html {
  overflow-y: scroll;
}
html,
body {
  height: 100%;
}
body {
  background: url('/static/bg-img.png') center / cover no-repeat;
  background-color:rgba(255,255,255,0.2);
  background-blend-mode:lighten;
}
main {
  display: flex;
  height: 100%;
  padding: 63px 0 56px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: Helvetica Neue,Segoe UI,Hiragino Kaku Gothic ProN,Hiragino Sans,ヒラギノ角ゴ ProN W3,Arial,メイリオ,Meiryo,sans-serif;
  line-height: 1.8;
  font-size: 14px;
  box-sizing: border-box;
}
ul {
  list-style-type: none;
}
a {
  display: block;
  color: #333;
  text-decoration: none;
}
table {
  border-collapse: collapse;
}
.among-us-font {
  font-family: WebFont;
  letter-spacing: 1px;
}
</style>
