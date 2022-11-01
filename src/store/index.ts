import {defineStore} from 'pinia'

export const useStore = defineStore({
    id:'aboutme',

    state:()=>({
        lock:false,

        offsetIndex: 0,

        totalOffset:0
    }),

    actions:{
        updateOffsetIndex(newValue:number){
            this.offsetIndex = newValue
        },

        updateTotalOffset(newValue:number){
            this.totalOffset = newValue
        },

        lockAnimation(status:boolean){
            this.lock = status
        }
    }
})