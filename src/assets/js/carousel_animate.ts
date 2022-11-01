interface carouselElement extends HTMLElement{
    timer:number;
}

function animate(obj:carouselElement, target:number, callback?:any){
    console.log('animate')
    if(obj.timer) {
        clearInterval(obj.timer);
        obj.timer = 0;
    }

    obj.timer = window.setInterval(function(){

        const offsetX = obj.offsetLeft;
        
        let moving = (target - offsetX) / 10;

        if(offsetX == target) {
            if(callback) callback()
            window.clearInterval(obj.timer);
            return;
        }
        
        moving = moving > 0 ? Math.ceil(moving) : Math.floor(moving)
        
        obj.style.left = offsetX + moving + 'px';
    },30);
}

export default animate