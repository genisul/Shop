export type TProduct = {
  productName: string
  productPrice: number
}

const mouseProduct = {
  name: '한성마우스',
  price: 10000,
  count: 0
}

const keyboardProduct = {
  name: '로지텍키보드',
  price: 12000,
  count: 0
}

const monitorProduct = {
  name: '삼성 모니터',
  price: 13000,
  count: 0
}

export const products = [mouseProduct, keyboardProduct, monitorProduct]
