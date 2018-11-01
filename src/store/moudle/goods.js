// 设置属性
const state = {
    goodsList: []
}
// 获取数据
const getters = {
    // 获取商品列表
    getterGoodsList(state) {
        return state.goodsList;
    },
    // 获取所有商品的总价
    getterGoodsTotalPrice(state) {
        var total = 0
        for (const key in state.goodsList) {
            if (state.goodsList.hasOwnProperty(key)) {
                const element = state.goodsList[key];
                total = total + parseFloat(element.total)
            }
        }
        return total
    }
}
// 改变数据状态
 const mutations = {
    // 将新的商品添加到商品数组
    addGoodsToGoodsList(state, goods) {
        state.goodsList.splice(0, 0, goods);
    },
    // 修改选中商品的数量
    changeGoodsCount(state, payload) {
        state.goodsList.forEach(element => {
            if (element.goodsId == payload.goodsId) {
                element.count = parseInt(element.count) + parseInt(payload.count);
                element.total = parseInt(element.count) * parseFloat(element.price);
            }
        })
    },
    // 根据商品id删除选中的商品
    deleteGoodsToGoodsList(state, item) {
        state.goodsList.splice(state.goodsList.indexOf(item), 1)
    }
}
// 应用mutation 能够解决mutation必须同步执行的限制
// Actions 支持载荷方式和对象方式进行分发
const actions = {
    deleteGoods({commit},item){
        setTimeout(() => {
            commit('deleteGoodsToGoodsList',item)
        }, 2000);
        
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}