<template>
  這是後台頁面
  <router-link to="/admin/orders">訂單</router-link> |
  <router-link to="/admin/products">產品列表</router-link> |
  <router-link to="/">回到前台首頁</router-link> |
  <a href="#" @click="logout">登出</a>
  <hr>
  <router-view/>
</template>

<script>

import { RouterView } from 'vue-router'

const { VITE_API_URL } = import.meta.env
export default {
  components: {
    RouterView
  },
  methods: {
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexschool\s*\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token

      this.$http.post(`${VITE_API_URL}/api/user/check`)
        .then(res => {
          if (!res.data.success) {
            this.$router.push('/login')
          }
        })
        .catch(err => {
          alert(err.response.data.message)
          this.$router.push('/login')
        })
    },
    logout () {
      document.cookie = `hexToken=; expires=${new Date()}`
      this.$router.push('/')
    }
  }
}

</script>
