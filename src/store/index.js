import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        // 就是我们页面中用到的各种变量。
        list:[],
        zongjia:0,
        isNavShow:true
    },
    getters:{
        //相当于计算属性
        zongjia(state){
            console.log(state.list)
            var zongjia = 0 
            for(let i = 0 ; i < state.list.length ; i++){
                if(state.list[i].count>0){
                    console.log('这是store计算属性getters')
                    zongjia +=  state.list[i].count * state.list[i].price
                }
            }
            return zongjia 
        }
    },
    mutations:{
    	//更改状态
    addList(state,item){
            if(state.list.length>0){
            for(let i = 0 ; i < state.list.length ; i++){
                if(state.list[i].id===item.id){
                    return state.list[i].count+=1
                }
            }
            state.list.push(item)
        }else{
            state.list.push(item)
        }
    },
    lessList(state,item){
        if(state.list.length>0){
            for(let i = 0 ; i<state.list.length ; i++){
                if(state.list[i].id===item.id){
                     state.list[i].count -=1;
                    if( state.list[i].count<1){
                    return state.list[i].count=1
                    }

                }
            }
            
        }
    },
		setNavShow(state,flag){
			state.isNavShow = flag
		}
    }
})