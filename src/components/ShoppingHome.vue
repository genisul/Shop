<template>
  <div class="container">
    <div class="main-box">
      <label>상품리스트</label>

      <div class="basket">
        <div>
          <label>장바구니</label>
          {{}}
        </div>
        <button class="button" type="button">test</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { products } from '@/types/Product'

const product = ref('')

const productInBasket = () => {
  // 상품을 클릭 했을때 장바구니에 담기게끔
}
</script>

<style scoped>
.container {
  flex-direction: column;
}

.main-box {
  background-color: aliceblue;
  width: 700px;
  height: 600px;
  position: relative;
  text-align: center;
}

.basket {
  background-color: ivory;
  width: 300px;
  height: 200px;
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: center;
}

.button {
  display: inline-block;
  position: absolute;
  bottom: 0;
}
</style>
