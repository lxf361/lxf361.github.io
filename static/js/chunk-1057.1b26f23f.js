(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1057"],{"6CXL":function(e,t,n){},"6bP5":function(e,t,n){"use strict";var a=n("Qq1u");n.n(a).a},Oplo:function(e,t,n){"use strict";n.r(t);var a=n("itRl"),l=n("rfXi"),i=n.n(l),r=n("Kw5r");function o(e,t,n,a,l){var s=[],c=[];return i()(e).forEach(function(e){void 0===e._expanded&&r.default.set(e,"_expanded",t);var i=1;if(void 0!==a&&null!==a&&(i=a+1),r.default.set(e,"_level",i),n?(r.default.set(e,"parent",n),s[i]||(s[i]=0),r.default.set(e,"_marginLeft",s[i]+n._marginLeft),r.default.set(e,"_width",e[l]/n[l]*n._width),s[i]+=e._width):(s[e.id]=[],s[e.id][i]=0,r.default.set(e,"_marginLeft",0),r.default.set(e,"_width",1)),c.push(e),e.children&&e.children.length>0){var d=o(e.children,t,e,i,l);c=c.concat(d)}}),c}var s={name:"CustomTreeTableDemo",components:{treeTable:a.a},data:function(){return{func:o,expandAll:!1,data:{id:1,event:"事件1",timeLine:100,comment:"无",children:[{id:2,event:"事件2",timeLine:10,comment:"无"},{id:3,event:"事件3",timeLine:90,comment:"无",children:[{id:4,event:"事件4",timeLine:5,comment:"无"},{id:5,event:"事件5",timeLine:10,comment:"无"},{id:6,event:"事件6",timeLine:75,comment:"无",children:[{id:7,event:"事件7",timeLine:50,comment:"无",children:[{id:71,event:"事件71",timeLine:25,comment:"xx"},{id:72,event:"事件72",timeLine:5,comment:"xx"},{id:73,event:"事件73",timeLine:20,comment:"xx"}]},{id:8,event:"事件8",timeLine:25,comment:"无"}]}]}]},args:[null,null,"timeLine"]}},methods:{message:function(e){this.$message.info(e.event)}}},c=n("KHd+"),d=Object(c.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("tree-table",{attrs:{data:e.data,"eval-func":e.func,"eval-args":e.args,"expand-all":e.expandAll,border:""}},[n("el-table-column",{attrs:{label:"事件"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{color:"sandybrown"}},[e._v(e._s(t.row.event))]),e._v(" "),n("el-tag",[e._v(e._s(t.row.timeLine+"ms"))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"时间线"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("el-tooltip",{attrs:{content:e.row.timeLine+"ms",effect:"dark",placement:"left"}},[n("div",{staticClass:"processContainer"},[n("div",{staticClass:"process",style:{width:500*e.row._width+"px",background:e.row._width>.5?"rgba(233,0,0,.5)":"rgba(0,0,233,0.5)",marginLeft:500*e.row._marginLeft+"px"}},[n("span",{staticStyle:{display:"inline-block"}})])])])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){e.message(t.row)}}},[e._v("点击")])]}}])})],1)],1)},[],!1,null,null,null);d.options.__file="customTreeTable.vue";t.default=d.exports},Qq1u:function(e,t,n){},itRl:function(e,t,n){"use strict";var a=n("jr1U"),l=n.n(a),i=n("rfXi"),r=n.n(i),o=n("Kw5r");function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,l=[];return r()(e).forEach(function(e){void 0===e._expanded&&o.default.set(e,"_expanded",t);var i=1;if(void 0!==a&&null!==a&&(i=a+1),o.default.set(e,"_level",i),n&&o.default.set(e,"parent",n),l.push(e),e.children&&e.children.length>0){var r=s(e.children,t,e,i);l=l.concat(r)}}),l}var c={name:"TreeTable",props:{data:{type:[Array,Object],required:!0},columns:{type:Array,default:function(){return[]}},evalFunc:Function,evalArgs:Array,expandAll:{type:Boolean,default:!1}},computed:{formatData:function(){var e=void 0;e=Array.isArray(this.data)?this.data:[this.data];var t=this.evalFunc||s,n=this.evalArgs?l()([e,this.expandAll],this.evalArgs):[e,this.expandAll];return t.apply(null,n)}},methods:{showRow:function(e){var t=!e.row.parent||e.row.parent._expanded&&e.row.parent._show;return e.row._show=t,t?"animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;":"display:none;"},toggleExpanded:function(e){var t=this.formatData[e];t._expanded=!t._expanded},iconShow:function(e,t){return 0===e&&t.children&&t.children.length>0}}},d=(n("6bP5"),n("vhXz"),n("KHd+")),u=Object(d.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",e._b({attrs:{data:e.formatData,"row-style":e.showRow}},"el-table",e.$attrs,!1),[0===e.columns.length?n("el-table-column",{attrs:{width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(t.row._level,function(e){return n("span",{key:e,staticClass:"ms-tree-space"})}),e._v(" "),e.iconShow(0,t.row)?n("span",{staticClass:"tree-ctrl",on:{click:function(n){e.toggleExpanded(t.$index)}}},[t.row._expanded?n("i",{staticClass:"el-icon-minus"}):n("i",{staticClass:"el-icon-plus"})]):e._e(),e._v("\n      "+e._s(t.$index)+"\n    ")]}}])}):e._l(e.columns,function(t,a){return n("el-table-column",{key:t.value,attrs:{label:t.text,width:t.width},scopedSlots:e._u([{key:"default",fn:function(l){return[e._l(l.row._level,function(t){return 0===a?n("span",{key:t,staticClass:"ms-tree-space"}):e._e()}),e._v(" "),e.iconShow(a,l.row)?n("span",{staticClass:"tree-ctrl",on:{click:function(t){e.toggleExpanded(l.$index)}}},[l.row._expanded?n("i",{staticClass:"el-icon-minus"}):n("i",{staticClass:"el-icon-plus"})]):e._e(),e._v("\n      "+e._s(l.row[t.value])+"\n    ")]}}])})}),e._v(" "),e._t("default")],2)},[],!1,null,"414e2741",null);u.options.__file="index.vue";t.a=u.exports},jr1U:function(e,t,n){e.exports={default:n("wObO"),__esModule:!0}},vhXz:function(e,t,n){"use strict";var a=n("6CXL");n.n(a).a},wObO:function(e,t){e.exports=function(){return Function.call.apply(Array.prototype.concat,arguments)}}}]);