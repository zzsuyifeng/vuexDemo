// 获取商品列表
export const getterGoodsList = (state) =>{
    return state.goodsList;
}
// 获取所有商品的总价
export const getterGoodsTotalPrice = (state) => {
    var total = 0
    for (const key in state.goodsList) {
        if (state.goodsList.hasOwnProperty(key)) {
            const element = state.goodsList[key];
            total = total + parseFloat(element.total)
        }
    }
    return total
}