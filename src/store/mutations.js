// 将新的商品添加到商品数组
export const addGoodsToGoodsList = (state,goods) => {
    state.goodsList.splice(0,0,goods);
}
 // 修改选中商品的数量
 export const changeGoodsCount = (state,payload) => {
    state.goodsList.forEach(element => {
        if (element.goodsId == payload.goodsId) {
            element.count = parseInt(element.count) + parseInt(payload.count);
            element.total = parseInt(element.count) * parseFloat(element.price);
        }
    })
}
// 根据商品id删除选中的商品
export const deleteGoodsToGoodsList = (state,item) =>{
   state.goodsList.splice(state.goodsList.indexOf(item),1)
}