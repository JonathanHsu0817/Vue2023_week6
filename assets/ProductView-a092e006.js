import{_ as r,o as c,c as a,a as u,d as s,t as i,F as n}from"./index-0628d5fc.js";const{VITE_API_URL:d,VITE_API_PATH:l}={VITE_API_URL:"https://vue3-course-api.hexschool.io/",VITE_API_PATH:"blacknwhiterabbit",BASE_URL:"/Vue2023_week6/",MODE:"production",DEV:!1,PROD:!0},p={data(){return{product:{}}},methods:{getProduct(){console.log(this.$route.params);const{id:t}=this.$route.params;this.$http.get(`${d}/v2/api/${l}/product/${t}`).then(e=>{this.product=e.data.product,console.log(this.product)})}},mounted(){this.getProduct()}},_=["src"];function h(t,e,m,g,o,P){return c(),a(n,null,[u(" 這是單一產品頁面 "),s("h2",null,i(o.product.title),1),s("img",{src:o.product.imageUrl,class:"img-fluid",alt:""},null,8,_)],64)}const f=r(p,[["render",h]]);export{f as default};