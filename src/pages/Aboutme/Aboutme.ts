import {onMounted, onBeforeUnmount} from 'vue'
import {useStore} from '../../store/index'
import carousel_animate from '../../assets/js/carousel_animate'

interface carouselElement extends HTMLElement{
    timer:number;
}

function updateAfterResizeWindow(){

    const store = useStore()
    let carousel: carouselElement;

    onMounted(()=>{
        carousel = document.querySelector('.Carousel') as carouselElement
        window.addEventListener('resize',listener)
        
    })

    onBeforeUnmount(()=>{
        window.removeEventListener('resize',listener)
    })

    function listener(){
        const currentOffsetIndex = store.offsetIndex
        // console.log(currentOffsetIndex)

        const currentTotalOffset = store.totalOffset
        // console.log(currentTotalOffset)
        const currentWindowSize = document.documentElement.clientWidth || document.body.clientWidth
        // console.log(currentWindowSize)

        if(currentOffsetIndex !== 0){
            const currentSingleOffset = currentTotalOffset / currentOffsetIndex
            if(currentSingleOffset !== currentWindowSize){
                // console.log('not matched!')
                store.lockAnimation(true)
                
                //按照当前视窗大小而更正偏移量 （让偏移量responsive）
                carousel_animate(carousel,-1 * currentWindowSize * currentOffsetIndex, ()=>store.lockAnimation(false))
                //更正完毕后更改当前总偏移量
                store.updateTotalOffset(-1 * currentWindowSize * currentOffsetIndex)
            }
        }
        

        // console.log(currentSingleOffset)
    }
}

export default updateAfterResizeWindow