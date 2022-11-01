<template>
    <!-- 首页的第一个部分 -->
    <section
        class="dark-mode vh-100 text-light bg-repeat-0 bg-position-center bg-size-cover overflow-hidden headSection">

        <div class="container vh-100">
            <div class="d-md-flex flex-nowrap vh-100">
                <div class="col-xl-4 col-lg-5 col-md-6 text-start">
                    <div class="column-left vh100Ycenter vh100YCenterUndermd text-md-left" style="text-align:center">
                        <img class="avatar mt-3" src="/images/avatar_2.jpg" alt="">
                        <h3 class="display-2">
                            {{ data }}
                        </h3>
                        <h4 class="display-6">
                            {{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? '的小破站' : 'personal website'}}
                        </h4>
                        <h5 class="display-7">
                            {{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? '网页，小程序' : ''}}
                        </h5>


                    </div>

                </div>
                <div class="d-none d-md-block d-flex flex-nowrap flex-shrink-0">
                    <img class="colImg" src="/images/col2_1.png" alt="">
                    <img class="colImg" src="/images/col1_2_1.png" alt="">
                    <img class="colImg" src="/images/col2_1.png" alt="">


                </div>
            </div>
        </div>
    </section>

    <!-- 首页的第二个部分 -->

    <section class="d-none d-md-block bg-light vh-100 py-5" style="min-height: 500px;" id="secondSection">
        <div class="container vh100Ycenter">
            <div class="row flex-wrap g-5">
                <transition-group enter-active-class="animate__animated animate__bounce">

                    <div class="col-md-6 col-lg-4 col-xl-3" v-for="(item, index) in secondImgList" :key="index">
                        <img class="flexImg" :src="item" alt="">
                    </div>

                </transition-group>
            </div>
        </div>
    </section>

    <!-- 首页的第三个部分 -->
    <section class="bg-dark vh-100 py-5">
        <div class="container h-100">
            <div class="d-md-flex vh100Ycenter my-auto vh100YCenterUndermd">
                <div class="w-100 w-md-50 my-auto text-light">
                    <h3 class="display-3 text-warning">
                        Responsive web
                    </h3>
                    <h4 class="display-4">
                        {{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? '响应式网页' : ''}}
                    </h4>
                </div>
                <div class="w-100 w-md-50">
                    <img class="w-100" src="/images/section3.gif" alt="">

                </div>
            </div>
        </div>
    </section>

    <!-- 最后一个部分 第四个部分 -->
    <section class="bg-light py-5" style="font-family: 'Noto Sans'">
        <div class="container">
            <div class="card h-300 overflow-hidden section4">
                <div class="card-img-overlay p-4 pb-3 align-items-center">
                    <h3 class="display-3 toBottom mb-4 ms-5 text-light">
                        {{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? '业务' : 'Web Demo'}}
                    </h3>
                </div>
            </div>

            <div class="d-md-flex g-4 mt-5">
                <div class="card card-overlay-bottom w-100 w-md-50 mt-3">
                    <img class="card-img" src="/images/section4_1.jpg" alt="">
                    <div class="card-img-overlay p-4 pb-3 align-items-center">
                        <a href="https://dashboard1-demo.vercel.app/">
                            <h4 class="display-6 toBottom mb-4 ms-5 text-light mask">
                                {{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? '小程序,个人/产品网站和部署' : 'Demo1'}}
                            </h4>
                        </a>


                    </div>
                </div>
                <div class="card card-overlay-bottom w-100 w-md-50 mt-3">
                    <img class="card-img" src="/images/section4_2.jpg" alt="">
                    <div class="card-img-overlay p-4 pb-3 align-items-center">
                        <a href="https://picture-show-web1-demo.vercel.app/">
                            <h4 class="display-6 toBottom mb-4 ms-5 text-light mask">
                                {{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? '网站设计作业辅导' : 'Demo2'}}
                            </h4>
                        </a>

                    </div>
                </div>
            </div>
        </div>

    </section>

</template>

<script setup lang="ts">
import { ref, Ref, getCurrentInstance } from 'vue'
import 'animate.css'
import sectionSection from './Home'
const data = ref('Edwin')

const scrollTop: Ref<number> = ref(0)
const secondImgList: Ref<string[]> = ref([])

const instance = getCurrentInstance()
const lang = instance?.appContext.config.globalProperties.$lang

sectionSection(scrollTop, secondImgList)
</script>

<style lang="less" scoped>
.headSection {
    background-image: url('/images/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .column-left {
        // transform: translateY(calc(50vh - 50%));

        .avatar {
            width: 30%;
            border-radius: 50%;
        }
    }

    .colImg {
        width: 386px;
        height: auto;
        border-radius: 20px;
        vertical-align: top;

        &:nth-child(2) {
            width: 586px;
        }
    }
}

.flexImg {
    width: 70%;
    height: 200px;
    object-fit: cover;
}

.section4 {
    background-image: url('/images/section4.jpg');
    background-position: center;
    background-size: cover;

    vertical-align: bottom;
}
</style>