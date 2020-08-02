<template>
  <h1>hello</h1>
  <router-link to="/">1111</router-link>
    <router-link to="/2">2222</router-link>
  <hr/>
  <router-view />
  <h1>{{value}}</h1>
</template>

<script lang="ts">

export default {
  name: 'App',
  setup(){
    const value = '000'
    return {value}
  }
 
}
</script>
