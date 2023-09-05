
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as i,y as m,r as c,B as g,o,I as p,f,c as l,b as e,J as r,t as h,G as k,h as y,n as b}from"./index-18448298.js";const x="/leiai/admin/assets/logo-7e86d7cd.jpg",B=["src"],w={key:1},C=i({name:"Logo"}),L=i({...C,props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(s){const n=m(),a=c("雷AI"),_=c(x),d=g(()=>{const t={};return n.settings.home.enable&&(t.name="home"),t});return(t,v)=>{const u=y("router-link");return o(),p(u,{to:e(d),class:k(["title",{"is-link":e(n).settings.home.enable}]),title:e(a)},{default:f(()=>[s.showLogo?(o(),l("img",{key:0,src:e(_),class:"logo"},null,8,B)):r("",!0),s.showTitle?(o(),l("span",w,h(e(a)),1)):r("",!0)]),_:1},8,["to","class","title"])}}});const I=b(L,[["__scopeId","data-v-9bb5d6c0"]]);export{I as default};
