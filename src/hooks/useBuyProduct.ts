import { useBasketStore } from '@/stores/useBasketStore'
import type { TProduct } from '@/types/Product'
import { ref } from 'vue'

export const useBuy = () => {
  const product = ref<TProduct>({ productName: '', productPrice: 0 })
}
