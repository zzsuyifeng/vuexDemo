<template>
    <div class="goods-list">
       
        <table v-if="goodsList.length > 0" class="goods-table">
                <tr class="row goods-title">
                    <th>商品名称</th>
                    <th>商品价格</th>
                    <th>商品数量</th>
                    <th>总价</th>
                    <th>删除</th>
                </tr>
                <tr class="row goods-row" v-for="(item,index) in goodsList" :key="index">
                    <td><strong>{{item.name}}</strong></td>
                    <td><strong>￥{{item.price}}</strong></td>
                    <td>
                        <button class="btn btn-left" :disabled="item.count < 2" @click="reduceGoodsCount(item.goodsId)">-</button>
                        <strong class="goods-count">{{item.count}}</strong>
                        <button class="btn btn-right" :disabled="item.count > 99" @click="addGoddsCount(item.goodsId)">+</button>
                    </td>
                    <td><strong>￥{{item.total}}</strong></td>
                    <td><button class="delte-btn" @click="deleteGoodsAction(item)">X</button></td>
                </tr>
              
           </table>
            <p v-else>购物新车还没有商品哟！！！</p>

            <p v-if="goodsList.length > 0" > <span>总计: ￥</span>{{goodsTotalPrice}}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    goodsList() {
      return this.$store.getters.getterGoodsList;
    },
    goodsTotalPrice(){
        return this.$store.getters.getterGoodsTotalPrice;
    }
  },
  methods: {
    // 减少数量
    reduceGoodsCount(goodsId) {
      let payload = {
        goodsId: goodsId,
        count: -1
      };
      this.$store.commit("changeGoodsCount", payload);
    },
    /// 增加数量
    addGoddsCount(goodsId) {
      let payload = {
        goodsId: goodsId,
        count: 1
      };
      this.$store.commit("changeGoodsCount", payload);
    },
    // 删除该商品
    deleteGoodsAction(item){
        // this.$store.commit('deleteGoodsToGoodsList',item);
        
        // 以载荷形式分发
        // this.$store.dispatch('deleteGoods',item);
        // 以对象形势进行分发
        this.$store.dispatch({
          type: 'deleteGoods',
          item: item
        })
    }
  }
};
</script>

<style scoped>
.goods-list {
  margin-top: 20px;
  width: 770px;
  height: 300px;
  background-color: rgb(226, 238, 211);
}
.goods-table {
  width: 100%;
}

.row {
  border-bottom: 1px solid #999;
  color: blueviolet;
  text-align: center;
}
.goods-title {
  font-size: 18px;
}
.btn {
  margin: 0;
  padding: 0;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  border: seagreen solid 1px;
  font-size: 20px;
  color: #555;
  border-radius: 2px;
}
.goods-count {
  display: inline-block;
  width: 40px;
}
.delte-btn{
    color: red;
    font-size: 20px;
}
</style>

