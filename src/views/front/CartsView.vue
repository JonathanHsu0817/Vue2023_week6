<template>
  這是購物車頁面
  <div class="text-end">
    <button class="btn btn-outline-danger" type="button"
    @click="deleteAllCarts">清空購物車</button>
  </div>
  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th>單價</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cart.carts">
        <tr v-for="item in cart.carts" :key="item.id">
          <td>
            <button type="button" class="btn btn-outline-danger btn-sm"
            :disabled="item.id === loadingItem"
            @click="deleteItem(item)">
              <i class="fas fa-spinner fa-pulse" v-if="loadingItem === item.id"></i>
              x
            </button>
          </td>
          <td>
            {{ item.product.title }}
          </td>
          <td>
            <div class="input-group input-group-sm">
              <div class="input-group mb-3">
                <select name="" id="" class="form-control"
                  v-model="item.qty"
                  :disabled="item.id === loadingItem"
                  @change="updateCartItem(item)">
                  <option :value="i" v-for="i in 10" :key="i">{{ i }}</option>
                </select>
              </div>
            </div>
          </td>
          <td class="text-end">
            {{ item.total }}
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">{{ cart.total }}</td>
      </tr>
      <tr>
        <td colspan="3" class="text-end text-success">折扣價</td>
        <td class="text-end text-success">{{ cart.final_total }}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
const { VITE_API_URL, VITE_API_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      productId: '',
      cart: {},
      loadingItem: ''
    }
  },
  methods: {
    getCarts () {
      this.$http.get(`${VITE_API_URL}/v2/api/${VITE_API_PATH}/cart`)
        .then(res => {
          this.cart = res.data.data
        })
    },
    updateCartItem (item) {
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.loadingItem = item.id
      this.$http.put(`${VITE_API_URL}/v2/api/${VITE_API_PATH}/cart/${item.id}`, { data })
        .then(res => {
          this.loadingItem = ''
          this.getCarts()
        })
        .catch((err) => {
          alert(err.response.data.message)
          this.loadingItem = ''
        })
    },
    deleteItem (item) {
      this.loadingItem = item.id
      this.$http.delete(`${VITE_API_URL}/v2/api/${VITE_API_PATH}/cart/${item.id}`)
        .then(res => {
          this.loadingItem = ''
          this.getCarts()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    deleteAllCarts () {
      this.$http.delete(`${VITE_API_URL}/v2/api/${VITE_API_PATH}/carts`)
        .then(res => {
          this.getCarts()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
