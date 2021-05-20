<template>
  <div class="submit-btn-wrap">
    <StartBtn />
    <ResetBtn />
  </div>
</template>

<script>
import ResetBtn from '../atoms/reset-btn'
import StartBtn from '../atoms/start-btn'

export default {
  name: 'settingBtn',
  components: {
    ResetBtn,
    StartBtn
  }
}
</script>
<style>
.submit-btn-wrap {
  display: flex;
  margin-top: 30px;
  justify-content: center;
}
</style>
