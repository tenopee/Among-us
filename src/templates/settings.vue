<template>
  <div class="settings-section">
    <PageTitle v-bind:pageTitle="this.pageTitle" />
    <ul class="settings-wrap">
      <InposterSetting />
      <PlayerSettings />
    </ul>
    <SettingBtns />
  </div>
</template>

<script>
import InposterSetting from '../molecules/inposter-setting'
import PageTitle from '../atoms/page-title'
import PlayerSettings from '../molecules/player-settings'
import SettingBtns from '../molecules/setting-btns'

export default {
  name: 'settings',
  components: {
    InposterSetting,
    PageTitle,
    PlayerSettings,
    SettingBtns
  },
  data () {
    return {
      pageTitle: 'settings'
    }
  }
}
</script>
<style>
.settings-section {
  padding: 10px 20px 20px;
  width: fit-content;
  height: fit-content;
  background-color:rgba(255,255,255,0.9);
  background-blend-mode:lighten;
  border: 1px solid #333;
  color: #333;
  box-sizing: border-box;
}
.settings-wrap {
  margin-top: 24px;
}
.settings-wrap > li:first-child {
  display: flex;
  align-items: center;
}
.settings-wrap > li .among-us-font {
  font-size: 32px;
  font-weight: bold;
}
.settings-wrap > li:first-child > .among-us-font {
  color: #c51111;
}
</style>
