(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2394"],{"4kVe":function(t,e,a){},CHEL:function(t,e,a){"use strict";var s=a("k5sZ");a.n(s).a},LzsA:function(t,e,a){"use strict";var s=a("WgTi");a.n(s).a},WgTi:function(t,e,a){},ZySA:function(t,e,a){"use strict";var s=a("P2sY"),i=a.n(s),l=(a("jUE0"),{bind:function(t,e){t.addEventListener("click",function(a){var s=i()({},e.value),l=i()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},s),n=l.ele;if(n){n.style.position="relative",n.style.overflow="hidden";var r=n.getBoundingClientRect(),c=n.querySelector(".waves-ripple");switch(c?c.className="waves-ripple":((c=document.createElement("span")).className="waves-ripple",c.style.height=c.style.width=Math.max(r.width,r.height)+"px",n.appendChild(c)),l.type){case"center":c.style.top=r.height/2-c.offsetHeight/2+"px",c.style.left=r.width/2-c.offsetWidth/2+"px";break;default:c.style.top=(a.pageY-r.top-c.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",c.style.left=(a.pageX-r.left-c.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return c.style.backgroundColor=l.color,c.className="waves-ripple z-active",!1}},!1)}}),n=function(t){t.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(n)),l.install=n;e.a=l},jAVV:function(t,e,a){"use strict";var s=a("4kVe");a.n(s).a},jUE0:function(t,e,a){},k5sZ:function(t,e,a){},nuVr:function(t,e,a){"use strict";a.r(e);var s=a("PLwA"),i=a("Grqa"),l={props:{className:{type:String,default:""},text:{type:String,default:"vue-element-admin"}}},n=(a("jAVV"),a("KHd+")),r=Object(n.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"link--mallki",class:this.className,attrs:{href:"#"}},[this._v("\n  "+this._s(this.text)+"\n  "),e("span",{attrs:{"data-letters":this.text}}),this._v(" "),e("span",{attrs:{"data-letters":this.text}})])},[],!1,null,null,null);r.options.__file="Mallki.vue";var c=r.exports,o={props:{items:{type:Array,default:function(){return[]}},title:{type:String,default:"vue"}},data:function(){return{isActive:!1}},methods:{clickTitle:function(){this.isActive=!this.isActive}}},d=(a("CHEL"),Object(n.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"share-dropdown-menu",class:{active:t.isActive}},[a("div",{staticClass:"share-dropdown-menu-wrapper"},[a("span",{staticClass:"share-dropdown-menu-title",on:{click:function(e){return e.target!==e.currentTarget?null:t.clickTitle(e)}}},[t._v(t._s(t.title))]),t._v(" "),t._l(t.items,function(e,s){return a("div",{key:s,staticClass:"share-dropdown-menu-item"},[e.href?a("a",{attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.title))]):a("span",[t._v(t._s(e.title))])])})],2)])},[],!1,null,null,null));d.options.__file="dropdownMenu.vue";var p=d.exports,u=a("ZySA"),v={name:"ComponentMixinDemo",components:{PanThumb:s.a,MdInput:i.a,Mallki:c,DropdownMenu:p},directives:{waves:u.a},data:function(){return{demo:{title:""},demoRules:{title:[{required:!0,trigger:"change",validator:function(t,e,a){6!==e.length?a(new Error("请输入六个字符")):a()}}]},articleList:[{title:"基础篇",href:"https://juejin.im/post/59097cd7a22b9d0065fb61d2"},{title:"登录权限篇",href:"https://juejin.im/post/591aa14f570c35006961acac"},{title:"实战篇",href:"https://juejin.im/post/593121aa0ce4630057f70d35"},{title:"vue-admin-template 篇",href:"https://juejin.im/post/595b4d776fb9a06bbe7dba56"},{title:"优雅的使用 icon",href:"https://juejin.im/post/59bb864b5188257e7a427c09"}]}}},m=(a("LzsA"),Object(n.a)(v,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mixin-components-container"},[a("el-row",[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("Buttons")])]),t._v(" "),a("div",{staticStyle:{"margin-bottom":"50px"}},[a("el-col",{staticClass:"text-center",attrs:{span:4}},[a("router-link",{staticClass:"pan-btn blue-btn",attrs:{to:"/documentation/index"}},[t._v("Documentation")])],1),t._v(" "),a("el-col",{staticClass:"text-center",attrs:{span:4}},[a("router-link",{staticClass:"pan-btn light-blue-btn",attrs:{to:"/icon/index"}},[t._v("Icons")])],1),t._v(" "),a("el-col",{staticClass:"text-center",attrs:{span:4}},[a("router-link",{staticClass:"pan-btn pink-btn",attrs:{to:"/excel/export-excel"}},[t._v("Excel")])],1),t._v(" "),a("el-col",{staticClass:"text-center",attrs:{span:4}},[a("router-link",{staticClass:"pan-btn green-btn",attrs:{to:"/table/complex-table"}},[t._v("Table")])],1),t._v(" "),a("el-col",{staticClass:"text-center",attrs:{span:4}},[a("router-link",{staticClass:"pan-btn tiffany-btn",attrs:{to:"/example/create"}},[t._v("Form")])],1),t._v(" "),a("el-col",{staticClass:"text-center",attrs:{span:4}},[a("router-link",{staticClass:"pan-btn yellow-btn",attrs:{to:"/theme/index"}},[t._v("Theme")])],1)],1)])],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"50px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("Material Design 的input")])]),t._v(" "),a("div",{staticStyle:{height:"100px"}},[a("el-form",{attrs:{model:t.demo,rules:t.demoRules}},[a("el-form-item",{attrs:{prop:"title"}},[a("md-input",{attrs:{icon:"search",name:"title",placeholder:"输入标题"},model:{value:t.demo.title,callback:function(e){t.$set(t.demo,"title",e)},expression:"demo.title"}},[t._v("标题")])],1)],1)],1)])],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("图片hover效果")])]),t._v(" "),a("div",{staticClass:"component-item"},[a("pan-thumb",{attrs:{width:"100px",height:"100px",image:"https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191"}},[t._v("\n            vue-element-admin\n          ")])],1)])],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("水波纹 waves v-directive")])]),t._v(" "),a("div",{staticClass:"component-item"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"}},[t._v("水波纹效果")])],1)])],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("hover text")])]),t._v(" "),a("div",{staticClass:"component-item"},[a("mallki",{attrs:{"class-name":"mallki-text",text:"vue-element-admin"}})],1)])],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"50px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("Share")])]),t._v(" "),a("div",{staticClass:"component-item",staticStyle:{height:"420px"}},[a("dropdown-menu",{staticStyle:{margin:"0 auto"},attrs:{items:t.articleList,title:"系列文章"}})],1)])],1)],1)],1)},[],!1,null,"42abf782",null));m.options.__file="mixin.vue";e.default=m.exports}}]);