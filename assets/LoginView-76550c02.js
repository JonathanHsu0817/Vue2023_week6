import{_ as c,o as u,c as p,d as s,h as d,i as l,j as m}from"./index-0628d5fc.js";const{VITE_API_URL:_}={VITE_API_URL:"https://vue3-course-api.hexschool.io/",VITE_API_PATH:"blacknwhiterabbit",BASE_URL:"/Vue2023_week6/",MODE:"production",DEV:!1,PROD:!0},h={data(){return{user:{}}},methods:{signIn(){const n=`${_}admin/signin`;this.$http.post(n,this.user).then(e=>{const{token:r,expired:i}=e.data;document.cookie=`hexToken=${r}; expires=${new Date(i)}`,this.$router.push("/admin/products")}).catch(e=>{alert(e.response.data.message)})}}},b={class:"container mt-5"},f={class:"col-md-6"},w=s("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),E={class:"mb-2"},v=s("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),x={class:"mb-2"},I=s("label",{for:"inputPassword",class:"sr-only"},"Password",-1),P=s("div",{class:"text-end mt-4"},[s("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"}," 登入 ")],-1);function V(n,e,r,i,o,a){return u(),p("div",b,[s("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=m((...t)=>a.signIn&&a.signIn(...t),["prevent"]))},[s("div",f,[w,s("div",E,[v,d(s("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address","onUpdate:modelValue":e[0]||(e[0]=t=>o.user.username=t),required:"",autofocus:""},null,512),[[l,o.user.username]])]),s("div",x,[I,d(s("input",{type:"password",id:"inputPassword",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>o.user.password=t),placeholder:"Password",required:""},null,512),[[l,o.user.password]])]),P])],32)])}const k=c(h,[["render",V]]);export{k as default};
