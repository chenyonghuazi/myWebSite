
<template>
  <NavBar/>
  <router-view />


</template>

<script setup lang="ts">

import NavBar from './components/NavBar.vue'
// lang = window.navigator.language 
// console.log(lang)
</script>

<style>

* {
  margin: 0;
  padding: 0;
}
@media screen and (min-width:768px) {
  .vh100Ycenter {
      transform: translateY(calc(50vh - 50%));
  }
  .text-md-left{
    text-align: left !important;
  }
}
.vh100YCenterUndermd{
  transform: translateY(calc(50vh - 50%));
}
.vw-100{
  width: 100vw;
}
.h-300{
  height: 300px !important;
}
.g-4{
  gap:2rem;
}
.toBottom{
  position: absolute;
  bottom: 0;
  left: 0;
}
.mask{
  background-color: rgba(0,0,0,.6);
}
.float-right{
  float:right;
}
.float-left{
  float:left;
}
.nav-link:hover{
  cursor: pointer;
}
</style>
