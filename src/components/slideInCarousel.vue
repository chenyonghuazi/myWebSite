<template>
    <div class="vw-100 float-md-left">
        <div class="col-md-6 float-md-right vh-50 vh-md-100">
            <img class="w-100 AboutmeImg" :src="image" alt="">
        </div>

        <div class="col-md-6 float-md-left my-5">
            <div class="container">
                <div class="vh100Ycenter text-center">
                    <slot></slot>
                    <button v-if="offsetLeft !== 0" class="btn btn-bd-primary d-none d-md-inline-block"
                        @click="handleMoveLeft">
                        {{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? '返回' : 'backward'}}
                    </button>
                    <button class="btn btn-bd-primary d-none d-md-inline-block" @click="handleMoveRight"
                        v-if="showMoveLeftButton">
                        {{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? '继续看' : 'forward'}}

                    </button>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, getCurrentInstance } from 'vue'
import { useStore } from '../store/index'
import carousel_animate from '../assets/js/carousel_animate.js'

type Props = {
    image: string,
    offsetLeft: number,
    showMoveLeftButton: boolean
}
const props = defineProps<Props>()
const store = useStore()
const emit = defineEmits(['updateCarousel'])
const instance = getCurrentInstance()
const lang = instance?.appContext.config.globalProperties.$lang

interface carouselElement extends HTMLElement {
    timer: number;
}

let carousel: carouselElement;
// let showBackwardButton:Ref<number> = ref(0);

function handleMoveRight() {

    if (carousel) {
        const vw100 = carousel.offsetWidth / carousel.children.length
        console.log(vw100)
        if ((carousel.offsetLeft * -1) + vw100 !== carousel.offsetWidth && !store.lock) {
            //console.log(carousel.offsetLeft-vw100)

            store.lockAnimation(true)
            carousel_animate(carousel, carousel.offsetLeft - vw100, () => store.lockAnimation(false))

            // for backward返回 button
            emit('updateCarousel', props.offsetLeft - vw100)

            // for 动态记录目前位移 当浏览器窗口大小变化时，可以更正跑马灯的偏移量 （因为跑马灯的偏移量不是responsive的
            store.updateOffsetIndex(store.offsetIndex + 1)
            store.updateTotalOffset(carousel.offsetLeft - vw100)
        }

    }
}

function handleMoveLeft() {
    if (carousel) {
        const vw100 = carousel.offsetWidth / carousel.children.length
        console.log(vw100)
        if (carousel.offsetLeft !== 0 && !store.lock) {
            //console.log(carousel.offsetLeft+vw100)

            store.lockAnimation(true)
            carousel_animate(carousel, carousel.offsetLeft + vw100, () => store.lockAnimation(false))

            // for backward返回 button
            emit('updateCarousel', props.offsetLeft + vw100)

            // for 动态记录目前位移 当浏览器窗口大小变化时，可以更正跑马灯的偏移量 （因为跑马灯的偏移量不是responsive的
            store.updateOffsetIndex(store.offsetIndex - 1)
            store.updateTotalOffset(carousel.offsetLeft + vw100)
        }

    }
}

onMounted(() => {
    carousel = document.querySelector('.Carousel') as carouselElement
    console.log(props)
})

</script>

<style lang="less" scoped>
@media screen and (min-width:768px) {
    .vh-md-100 {
        height: 100vh;
    }

    .float-md-right {
        float: right;
    }

    .float-md-left {
        float: left;
    }

}

.AboutmeImg {
    object-fit: cover;
    height: 100%;
}

.icon-laoshu-01 {
    font-size: 24px;
}

.btn-bd-primary {
    --bs-btn-font-weight: 600;
    --bs-btn-color: var(--bs-purple);
    --bs-btn-bg: var(--bd-violet);
    --bs-btn-border-color: var(--bd-violet);
    --bs-btn-border-radius: .5rem;
    --bs-btn-hover-color: var(--bs-white);
    --bs-btn-hover-bg: #6528e0;
    --bs-btn-hover-border-color: #6528e0;
    --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
    --bs-btn-active-color: var(--bs-btn-hover-color);
    --bs-btn-active-bg: #5a23c8;
    --bs-btn-active-border-color: #5a23c8;
}
</style>