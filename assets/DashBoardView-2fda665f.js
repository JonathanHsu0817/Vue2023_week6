import{_ as h,R as _,r as c,o as d,c as p,a as e,b as o,w as r,d as u,F as m}from"./index-0628d5fc.js";const{VITE_API_URL:f}={VITE_API_URL:"https://vue3-course-api.hexschool.io/",VITE_API_PATH:"blacknwhiterabbit",BASE_URL:"/Vue2023_week6/",MODE:"production",DEV:!1,PROD:!0},k={components:{RouterView:_},methods:{checkLogin(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)hexschool\s*\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a,this.$http.post(`${f}/api/user/check`).then(t=>{t.data.success||this.$router.push("/login")}).catch(t=>{alert(t.response.data.message),this.$router.push("/login")})},logout(){document.cookie=`hexToken=; expires=${new Date}`,this.$router.push("/")}}},$=u("hr",null,null,-1);function V(a,t,w,x,g,n){const s=c("router-link"),i=c("router-view");return d(),p(m,null,[e(" 這是後台頁面 "),o(s,{to:"/admin/orders"},{default:r(()=>[e("訂單")]),_:1}),e(" | "),o(s,{to:"/admin/products"},{default:r(()=>[e("產品列表")]),_:1}),e(" | "),o(s,{to:"/"},{default:r(()=>[e("回到前台首頁")]),_:1}),e(" | "),u("a",{href:"#",onClick:t[0]||(t[0]=(...l)=>n.logout&&n.logout(...l))},"登出"),$,o(i)],64)}const A=h(k,[["render",V]]);export{A as default};
