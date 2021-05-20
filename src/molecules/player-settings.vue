<template>
  <li>
    <div class="select-player-number-wrap">
      <SectionTitle v-bind:sectionTitle="this.sectionTitle" />
      <p class="add-btn"></p>
      <p class="add-btn-note">add member</p>
    </div>
    <ul class="member-wrap">
      <li class="red">
        <select class="select-color">
          <option v-for="availableColor in availableColors" v-bind:key=availableColor.color v-bind:value="availableColor.color">{{availableColor.color}}</option>
        </select>
        <input type="textarea" class="input-name" maxlength="10" placeholder="player1" />
      </li>
      <li class="yellow">
        <select class="select-color">
          <option>4人</option>
        </select>
        <input type="textarea" class="input-name" maxlength="10" placeholder="player2" />
      </li>
      <li class="blue">
        <select class="select-color">
          <option>4人</option>
        </select>
        <input type="textarea" class="input-name" maxlength="10" placeholder="player3" />
      </li>
      <li class="orange">
        <select class="select-color">
          <option>4人</option>
        </select>
        <input type="textarea" class="input-name" maxlength="10" placeholder="player4" />
      </li>
    </ul>
  </li>
</template>

<script>
// import { mapGetters } from 'vuex'
import SectionTitle from '../atoms/section-title'

export default {
  name: 'playerSettings',
  components: {
    SectionTitle
  },
  data () {
    return {
      sectionTitle: 'Players',
      playersNumber: 4,
      crewColors: [
        { color: 'red', available: true },
        { color: 'yellow', available: true },
        { color: 'blue', available: true },
        { color: 'orange', available: true },
        { color: 'brown', available: false },
        { color: 'pink', available: false },
        { color: 'purple', available: false },
        { color: 'cyan', available: false },
        { color: 'green', available: false },
        { color: 'lime', available: false },
        { color: 'white', available: false },
        { color: 'black', available: false }
      ]
    }
  },
  computed: {
    availableColors () {
      return this.crewColors.filter(item => item.available === false)
    }
  }
}
</script>
<style>
.select-player-number-wrap {
  display: flex;
  align-items: center;
}
.add-btn {
  position: relative;
  width: 25px;
  height: 25px;
  margin-left: 15px;
  background: #fff;
  border: 1px solid #666;
  border-radius: 50%;
  cursor: pointer;
}
.add-btn::before,
.add-btn::after {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background: #666;
  border-radius: 10px;
  content: "";
}
.add-btn:hover {
  border: 1px solid #c51111;
}
.add-btn:hover:before,
.add-btn:hover::after {
  background: #c51111;
}
.add-btn::before {
  width: 3px;
  height: 17px;
}
.add-btn::after {
  width: 17px;
  height: 3px;
}
.add-btn-note {
  position: relative;
  display: none;
  margin-left: 14px;
  padding: 4px 6px;
  background: #ccc;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 10px;
  line-height: 1;
  color: #4e4e4e;
}
.add-btn-note::before {
  position: absolute;
  top: 50%;
  left: -18px;
  margin-top: -6px;
  border: 6px solid transparent;
  border-right: 14px solid #ccc;
  content: "";
}
.add-btn:hover > .add-btn-note {
  display: block;
}
.member-wrap {
  display: flex;
  width: 449px;
  border-left: 1px solid #333;
  flex-wrap: wrap;
}
.member-wrap > li {
  position: relative;
  width: 112px;
  padding: 78px 4px 10px;
  border-top: 1px solid #333;
  border-right: 1px solid #333;
  border-bottom: 1px solid #333;
  box-sizing: border-box;
}
.member-wrap > li:nth-child(7),
.member-wrap > li:nth-child(8),
.member-wrap > li:nth-child(9),
.member-wrap > li:nth-child(10),
.member-wrap > li:nth-child(11),
.member-wrap > li:nth-child(12) {
  border-top: none;
}
.select-color {
  width: 60px;
  height: 24px;
  font-size: 12px;
  cursor: pointer;
}
.input-name {
  width: 100%;
  margin-top: 5px;
  font-size: 12px;
  box-sizing: border-box;
}
.input-name::placeholder {
  color: #ccc;
}
.member-wrap .red {
  background: #fff url("/static/red.png") center 16px / 36px no-repeat;
}
.member-wrap .yellow {
  background: #fff url("/static/yellow.png") center 16px / 36px no-repeat;
}
.member-wrap .blue {
  background: #fff url("/static/blue.png") center 16px / 36px no-repeat;
}
.member-wrap .orange {
  background: #fff url("/static/orange.png") center 16px / 36px no-repeat;
}
.member-wrap .brown {
  background: #fff url("/static/brown.png") center 16px / 36px no-repeat;
}
.member-wrap .syan {
  background: #fff url("/static/syan.png") center 16px / 36px no-repeat;
}
.member-wrap .green {
  background: #fff url("/static/green.png") center 16px / 36px no-repeat;
}
.member-wrap .lime {
  background: #fff url("/static/lime.png") center 16px / 36px no-repeat;
}
.member-wrap .pink {
  background: #fff url("/static/pink.png") center 16px / 36px no-repeat;
}
.member-wrap .purple {
  background: #fff url("/static/purple.png") center 16px / 36px no-repeat;
}
.member-wrap .white {
  background: #fff url("/static/white.png") center 16px / 36px no-repeat;
}
</style>
