"use strict";(self["webpackChunkhm_shopping"]=self["webpackChunkhm_shopping"]||[]).push([[630],{1630:function(t,a,e){e.r(a),e.d(a,{default:function(){return v}});var s=function(){var t=this,a=t._self._c;return a("div",[a("van-nav-bar",{attrs:{title:"我的订单","left-arrow":""},on:{"click-left":function(a){return t.$router.go(-1)}}}),a("div",{staticClass:"orderDetail"},t._l(t.list,(function(e){return a("div",{key:e.id,class:{active:e.code===t.activeIndex},on:{click:function(a){return t.handleTitle(e.code)}}},[t._v(t._s(e.name))])})),0),t._l(t.dataList,(function(e){return a("div",{key:e.order_id},[a("div",{staticClass:"bodyHead"},[a("div",{staticClass:"headLeft"},[t._v(t._s(e.create_time))]),"待取消"!==e.state_text?a("div",{staticClass:"headRight"},[t._v(t._s(e.state_text))]):a("div",{staticClass:"headRight"},[t._v("取消成功")])]),t._l(e.goods,(function(e){return a("div",{key:e.goods_image,staticClass:"orderBody"},[a("img",{staticClass:"bodyImg",attrs:{src:e.goods_image}}),a("div",[a("div",{staticClass:"bodyTitle"},[t._v(t._s(e.goods_name))])]),a("div",{staticClass:"bodyPrice"},[a("div",{staticClass:"PriceTop"},[t._v("￥"+t._s(e.total_price))]),a("div",{staticClass:"PriceBottom"},[t._v("x"+t._s(e.total_num))])])])})),a("div",{staticClass:"orderFoot"},[a("span",{staticClass:"footInfo"},[t._v("共"+t._s(e.total_num)+"件商品，总金额￥"+t._s(e.total_price))]),"待取消"!==e.state_text?a("button",{staticClass:"footButton",on:{click:function(a){return t.Del(e.order_id)}}},[t._v("申请取消")]):a("button",{staticClass:"footButton2"},[t._v("取消成功")])])],2)}))],2)},i=[],o=(e(1359),e(2033),e(2756));const d=(t,a)=>(0,o.A)({url:"/order/list",params:{dataType:t,page:a}}),n=t=>(0,o.A)({url:"/order/cancel",method:"post",data:{orderId:t}});var c={name:"myorderIndex",data(){return{list:[{id:1,name:"全部",code:"all"},{id:2,name:"待支付",code:"payment"},{id:3,name:"待发货",code:"delivery"},{id:4,name:"待收货",code:"received"},{id:5,name:"待评价",code:"comment"}],dataList:[],activeIndex:"all"}},methods:{async handleTitle(t){this.activeIndex=t,console.log(t)},async getOrderList(){const t=await d(this.activeIndex,1);this.dataList=t.data.list.data,console.log(this.dataList),this.dataList.forEach((t=>{t.total_num=0,t.goods.forEach((a=>{t.total_num+=a.total_num}))}))},async Del(t){const a=await n(t);console.log(a),this.getOrderList()}},async created(){await this.getOrderList()},watch:{activeIndex:{immediate:!0,handler(){this.getOrderList()}}}},r=c,l=e(6501),_=(0,l.A)(r,s,i,!1,null,"5d1cfa43",null),v=_.exports}}]);
//# sourceMappingURL=630.2316ef5f.js.map