

<template>
  <header class=" navbar navbar-expand-lg bg-dark navbar-dark shadow-sm fixed-top" v-show="scrollTop != 0">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        {{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? 'Edwin的小破站' : 'My Home'}}
      </router-link>
      <!-- <a href="#" class="navbar-brand">Edwin的小破站</a> -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarMenu"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" @click.prevent="manualCollapse = true"></span>
      </button>

      <div class="collapse navbar-collapse" id="navBarMenu" :class="[manualCollapse ? 'show' : '']">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item text-dark">
            <div class="nav-link" @click="goAboutme">About me</div>
          </li>


        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const instance = getCurrentInstance()
const lang = instance?.appContext.config.globalProperties.$lang
const scrollTop: Ref<number> = ref(0)
const manualCollapse = ref(false)

onMounted(() => {
  window.addEventListener('scroll', updateScrollTop)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollTop)
})

function updateScrollTop() {
  scrollTop.value = document.documentElement.scrollTop ||
    document.body.scrollTop
}


function goAboutme() {
  // const navbarCollapse = document.querySelector('#navBarMenu') as HTMLElement
  // navbarCollapse.style.display = 'none'

  router.push({
    name: 'aboutme'
  })
  if (!manualCollapse.value) {
    manualCollapse.value = true
    setTimeout(() => {
      manualCollapse.value = false
    }, 300)

  }
  setTimeout(() => {
    manualCollapse.value = false
  }, 100)


}



</script>

<style scoped lang="less">
.bg-light {
  background-color: rgba(255, 255, 255, 1) !important;
}
</style>
