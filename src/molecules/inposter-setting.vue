<template>
  <li>
    <SectionTitle v-bind:sectionTitle="this.sectionTitle" />
    <div class="input-imposter-wrap">
      <p class="first-imposter-icn"></p>
      <input type="checkbox" id="imposter2" value="2" class="input-imposter" v-model="numberImposter" />
      <label class="label-imposter" for="imposter2"></label>
      <input type="checkbox" id="imposter3" value="3" class="input-imposter" v-model="numberImposter" />
      <label class="label-imposter" for="imposter3"></label>
      <p>{{numberImposter}}</p>
    </div>
  </li>
</template>

<script>
import SectionTitle from '../atoms/section-title'

export default {
  name: 'imposterSetting',
  components: {
    SectionTitle
  },
  data () {
    return {
      sectionTitle: 'Imposter',
      numberImposter: ["1"]
    }
  },
  methods: {
    countImposter () {
      this.$store.dispatch('countImposter', this.numberImposter)
    }
  }
}
</script>
<style>
.input-imposter-wrap {
  display: flex;
}
.first-imposter-icn {

}
.input-imposter {
  display: none;
}
.label-imposter,
.first-imposter-icn {
  position: relative;
  width: 32px;
  height: 34px;
  margin-left: 10px;
  background: url("/static/red.png") center / 24px no-repeat;
}
.first-imposter-icn {
  margin-left: 15px;
}
.label-imposter {
  opacity: .2;
  cursor: pointer;
}
.label-imposter::before {
  display: block;
  position: absolute;
  top: 9px;
  left: 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  content: "";
}
.input-imposter:checked + .label-imposter {
  opacity: 1;
}
</style>
