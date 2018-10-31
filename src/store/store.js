import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from "./mutations"
import * as getters from "./getters"

Vue.use(Vuex)

export const store = new Vuex.Store({
    // 单一状态树 设置属性
    state:{
        // 商品数组
        goodsList:[]
    },
    // 获取属性
    getters,
    // 改变数据状态
    mutations
})