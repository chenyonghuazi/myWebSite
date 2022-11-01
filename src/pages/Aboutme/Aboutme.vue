<template>


    <section class="vh-md-100 vw-100 overflow-hidden position-relative">
        <div class="goHomePage position-absolute d-none d-md-block">
            <router-link to="/" class="icon-homepage">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-homepage_fill"></use>
                </svg>
            </router-link>
        </div>
        <div class="Carousel">

            <slide image="/images/aboutme_17.PNG" :offsetLeft="carouselOffsetLeft" @updateCarousel="updateOffsetLeft" :showMoveLeftButton="true">
                <template #default>
                    <div>
                        <p>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-laoshu-01"></use>
                            </svg>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-laoshu-01"></use>
                            </svg>
                            <span>
                                {{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? '履历不多，简单写几句吧：' : 'Background:'}}
                            </span>
                        </p>

                        <p>
                            
                            {{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? '20届毕业生，社畜3年多。' : '2020 undergraduate in University of Toronto.'}}
                        </p>

                        <p>
                            
                            {{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? '大学主修数学和计算机。' : 'Science honor bachelor in Math and computer science.'}}
                        </p>

                        <p>
                            
                            {{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? '目前在小企上班，自学前端。' : 'Started working in 2019'}}
                        </p>
                    </div>
                </template>
            </slide>

            <slide image="/images/aboutme_5.PNG" :offsetLeft="carouselOffsetLeft" @updateCarousel="updateOffsetLeft" :showMoveLeftButton="true">
                <template #default>
                    <div>
                        <p>
                            <span>{{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? '2015年，' : 'In 2015,'}} </span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-laoshu-01"></use>
                            </svg>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-laoshu-01"></use>
                            </svg>

                            <span>
                                {{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? '侥幸被多大录取。' : 'my first year in University.'}}
                            </span>

                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-emoji_line8"></use>
                            </svg>
                        </p>

                        <p>
                            
                            {{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? '大一学的是Python，recursion差点把我整趋势。' : 'Started to learn Python.'}}
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-emoji_line7"></use>
                            </svg>

                        </p>
                        <p v-if="lang == 'zh-CN' || lang == 'CN' || lang == 'zh'">
                            <span>可惜第一年因沉迷洛奇导致成绩太差 </span>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-emoji_line"></use>
                            </svg>
                        </p>
                        <p v-if="lang == 'zh-CN' || lang == 'CN' || lang == 'zh'">
                            最终没能成功进计算机major，退而求其次的选了数学。
                        </p>

                        <p v-if="lang == 'zh-CN' || lang == 'CN' || lang == 'zh'">
                            <span>大二开始认真上学 追赶成绩</span>

                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-emoji_line6"></use>
                            </svg>
                        </p>
                    </div>
                </template>
            </slide>

            <slide image="/images/aboutme_13.PNG" :offsetLeft="carouselOffsetLeft" @updateCarousel="updateOffsetLeft" :showMoveLeftButton="true">
                <template #default>
                    <div>
                        <p>
                            
                            {{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? '大三，人生转折点：接触到了前端学习，瞬间就对前端有了兴趣。' : 'First time to learn web develop.'}}
                        </p>
                        <p>
                            
                            {{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? '但在那个时间我还沉迷于iOS开发。' : 'Get in touch with Javascript, php, mysql, mongodb and react'}}
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-emoji_line3"></use>
                            </svg>
                        </p>

                        <p v-if="lang == 'zh-CN' || lang == 'CN' || lang == 'zh'">
                            所以也就没有花太多时间在这上面。
                        </p>
                        <p v-if="lang == 'zh-CN' || lang == 'CN' || lang == 'zh'">
                            大四找了一个短期兼职app开发，此项目为音乐App，已经有几个人转手开发过了。
                        </p>
                        <p v-if="lang == 'zh-CN' || lang == 'CN' || lang == 'zh'">
                            因为没人交接，

                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-laoshu-01"></use>
                            </svg>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-laoshu-01"></use>
                            </svg>
                            花了几天看代码。
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-emoji-"></use>
                            </svg>
                        </p>
                        <p v-if="lang == 'zh-CN' || lang == 'CN' || lang == 'zh'">
                            但致命的是，这项目跑起来有数个bug。
                        </p>
                        <p v-if="lang == 'zh-CN' || lang == 'CN' || lang == 'zh'">
                            又因为前面开发功能的人跑了之后也没人处理bug了，然后我就被叫去修bug了。
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-emoji-"></use>
                            </svg>
                        </p>
                    </div>
                </template>
            </slide>



            <slide image="/images/aboutme_2.PNG" :offsetLeft="carouselOffsetLeft" @updateCarousel="updateOffsetLeft" :showMoveLeftButton="true" >
                <template #default>
                    <div>
                        <p>
                            <span>
                                {{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? '然后我就崩溃了，上网找了很久解决方案都没找到。此时此刻我内心在重写和崩溃之间徘徊。' 
                                                                                    : 'At the meantime, i tried different ways in order to figure out which path I should go.'}}    
                            </span>

                        </p>

                        <p v-if="lang == 'zh-CN' || lang == 'CN' || lang == 'zh'">
                            <span>后来bug没修成，为老板写了新功能我也提桶跑路了。</span>

                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-emoji_line7"></use>
                            </svg>
                        </p>

                        <p>
                            
                            {{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? '压死骆驼的最后一根稻草是当时我有一个个人项目，审核一直不给过（现在过去太久了理由已经忘了）' 
                                                                            : 'iOS developer or Front end Web developer or Data Aanalyst?'}}

                        </p>
                        <p v-if="lang == 'zh-CN' || lang == 'CN' || lang == 'zh'">
                            ，也感觉自己没能力在这一块发展下去，一气之下就放弃iOS开发了。
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-emoji_line7"></use>
                            </svg>
                        </p>
                    </div>
                </template>
            </slide>

            <slide image="/images/aboutme_1.PNG" :offsetLeft="carouselOffsetLeft" @updateCarousel="updateOffsetLeft" :showMoveLeftButton="false">
                <template #default>
                    <div>
                        <p>
                            
                            {{lang == 'zh-CN' || lang == 'CN' || lang == 'zh' ? '为了找工作那只能转行了呀，就一直在目前的一家中小企上班。' 
                                                                                : 'At the end, I started working in 2019 and keep programming in my free time.'}}
                        </p>
                        <p v-if="lang == 'zh-CN' || lang == 'CN' || lang == 'zh'">
                            上班内容不太涉及到编程，所以下班之后都会在边学边写
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-relieved"></use>
                            </svg>
                        </p>
                    </div>
                </template>
            </slide>

        </div>




    </section>

</template>

<script setup lang="ts">
import { ref, Ref, getCurrentInstance } from 'vue'
import correctOffset from './Aboutme'
import slide from '../../components/slideInCarousel.vue'

const instance = getCurrentInstance()
const lang = instance?.appContext.config.globalProperties.$lang
const carouselOffsetLeft: Ref<number> = ref(0)

function updateOffsetLeft(data: number) {
    carouselOffsetLeft.value = data
}
correctOffset()

</script>

<style lang="less" scoped>
.goHomePage {

    left: 10px;
    top: 10px;
    z-index: 5;

    .icon-homepage {
        color: black;
        fill: black;

    }
}


.Carousel {
    width: 500%;
    height: 100%;
    position: relative;



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
}
</style>