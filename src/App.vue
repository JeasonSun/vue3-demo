<template>
  <div class="vue3-typescript-demo">
    <div class="navs-container">
      <ul>
        <li><router-link to="/?delay=6000">Home</router-link></li>
        <li><router-link to="/foo">Foo</router-link></li>
        <li><router-link to="/bar">Bar</router-link></li>
        <li><router-link to="/guard/delay">guard delay</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class App extends Vue { }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
