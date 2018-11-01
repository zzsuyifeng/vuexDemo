import Vue from 'vue'
import Vuex from 'vuex'
import goods from "./moudle/goods"

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{
        goods
    }
})