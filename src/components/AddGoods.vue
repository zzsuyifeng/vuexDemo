<template>
    <div class="add-goods">
       
       <div class="left">
            <p class="title">添加新商品</p>
            <ul class="add-ul">
                <li class="add-li">
                    <span class="name">商品名称: </span><input type="text" v-model="name">
                </li>
                <li class="add-li">
                    <span class="price">商品价格: </span><input type="text" v-model="price">
                </li>
                <li class="add-li">
                    <span class="count">商品数量: </span><input type="text" v-model="count">
                </li>
            </ul>
            <div class="addGoods" @click="addGoodsToCartAction">添加</div>
       </div>
       <div class="right">
           <table v-if="goodsList.length > 0" class="goods-table">
                <tr class="row goods-title">
                    <th>商品名称</th>
                    <th>商品价格</th>
                    <th>商品数量</th>
                    <th>总价</th>
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
                </tr>
              
           </table>
           <p v-else>购物新车还没有商品哟！！！</p>
       </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      price: "",
      count: ""
    };
  },
  computed: {
    goodsList() {
      return this.$store.getters.getterGoodsList;
    }
  },
  methods: {
    // 添加到购物车
    addGoodsToCartAction() {
      if (this.name && this.price && this.count) {
        let goods = {
          name: this.name,
          price: this.price,
          count: this.count,
          total: this.count * this.price,
          goodsId: new Date().getTime()
        };
        this.$store.commit("addGoodsToGoodsList", goods);
        this.name = "";
        this.price = "";
        this.count = "";
      }
    },
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
    }
  }
};
</script>

<style scoped>
.add-goods {
  width: 100%;
  height: 300px;
}
.left {
  float: left;
  width: 300px;
  height: 300px;
  background-color: beige;
  border: 1px solid #999;

}
.right {
  /* float: right; */
  margin-left: 320px;
  position: absolute;
  width: 450px;
  height: 300px;
  background-color: bisque;
  border: 1px solid #999;
}
.title {
  text-align: center;
  font-size: 20px;
}
.add-ul {
  list-style: none;
  padding-left: 8px;
}
.add-li {
  height: 50px;
  font-size: 20px;
  line-height: 50px;
}
input {
  width: 60%;
  height: 25px;
  border: 1px solid #999;
  border-radius: 3px;
  font-size: 16px;
}
.addGoods {
  margin: 10px;
  width: 80px;
  height: 30px;
  padding: 5px 15px;
  background-color: aquamarine;
  text-align: center;
  line-height: 30px;
  border: rgb(38, 87, 133) solid 1px;
  border-radius: 5px;
  font-size: 20px;
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
</style>