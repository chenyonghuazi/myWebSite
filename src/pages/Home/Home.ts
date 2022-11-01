import { onMounted, onBeforeUnmount, Ref } from 'vue'

function mounted(scrollTop: Ref<number>, secondImgList: Ref<string[]>): void {

    let secondSection: HTMLElement;
    let secondSectionY: number;


    onMounted(() => {
        
        //首页的第二个部分
        secondSection = document.querySelector('#secondSection') as HTMLElement
        
        secondSectionY = secondSection.getBoundingClientRect().top
        
        window.addEventListener('scroll', scrollEvent)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', scrollEvent)
    })

    //首页的第二个部分的滚动事件
    function scrollEvent() {
        scrollTop.value = document.documentElement.scrollTop ||
            document.body.scrollTop
        

        if (scrollTop.value > secondSectionY / 3) {
            // console.log('reached!!')
            secondImgList.value = ['/images/vue_2.png',
                "/images/react_2.png",
                "/images/vite.png",
                "/images/bootstrap_2.png",
                "/images/Nginx_2.png",
                "/images/Nodejs_2.png",
                "/images/pm_2.png",
                "/images/mysql_2.png"]
        }
    }
}

export default mounted