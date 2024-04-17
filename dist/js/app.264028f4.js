(function(){"use strict";var t={6279:function(t,e,r){var a={};r.r(a),r.d(a,{reqAddOrUpdateShopCart:function(){return pt},reqBannerList:function(){return ct},reqCartList:function(){return mt},reqCategoryList:function(){return it},reqDeleteCartById:function(){return ft},reqFloorList:function(){return ut},reqGetCode:function(){return ht},reqGoodsInfo:function(){return dt},reqLogout:function(){return Ct},reqMyOrder:function(){return Lt},reqOrderInfo:function(){return It},reqPayInfo:function(){return kt},reqPayState:function(){return Nt},reqSearchInfo:function(){return lt},reqSubmitOrder:function(){return wt},reqUpdateCheckedById:function(){return gt},reqUseLogin:function(){return yt},reqUserAddress:function(){return bt},reqUserInfo:function(){return _t},reqUserRegister:function(){return vt}});var o=r(7881),s=r.n(o),n=r(1540),i=r.n(n),c=r(6369),u=function(){var t=this,e=t._self._c;return e("div",[e("Header"),e("router-view"),e("Footer",{directives:[{name:"show",rawName:"v-show",value:t.$route.meta.show,expression:"$route.meta.show"}]})],1)},l=[],d=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("div",{staticClass:"top"},[e("div",{staticClass:"container"},[e("div",{staticClass:"loginList"},[e("p",[t._v("尚品汇欢迎您！")]),t.userName?e("p",[e("a",[t._v(t._s(t.userName))]),e("a",{staticClass:"register",on:{click:t.logout}},[t._v("退出登录")])]):e("p",[e("span",[t._v("请")]),e("router-link",{attrs:{to:"/login"}},[t._v("登录")]),e("router-link",{staticClass:"register",attrs:{to:"/register"}},[t._v("免费注册")])],1)]),e("div",{staticClass:"typeList"},[e("router-link",{attrs:{to:"/center/myorder"}},[t._v("我的订单")]),e("router-link",{attrs:{to:"/shopcart"}},[t._v("我的购物车")]),e("a",{attrs:{href:"###"}},[t._v("我的尚品汇")]),e("a",{attrs:{href:"###"}},[t._v("尚品汇会员")]),e("a",{attrs:{href:"###"}},[t._v("企业采购")]),e("a",{attrs:{href:"###"}},[t._v("关注尚品汇")]),e("a",{attrs:{href:"###"}},[t._v("合作招商")]),e("a",{attrs:{href:"###"}},[t._v("商家后台")])],1)])]),e("div",{staticClass:"bottom"},[e("h1",{staticClass:"logoArea"},[e("router-link",{staticClass:"logo",attrs:{title:"尚品汇",to:"/home"}},[e("img",{attrs:{src:r(587),alt:""}})])],1),e("div",{staticClass:"searchArea"},[e("form",{staticClass:"searchForm",attrs:{action:"###"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"input-error input-xxlarge",attrs:{type:"text",id:"autocomplete"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),e("button",{staticClass:"sui-btn btn-xlarge btn-danger",attrs:{type:"button"},on:{click:t.goSearch}},[t._v("搜索")])])])])])},p=[],m=(r(7658),{name:"AppHeader",data(){return{keyword:""}},mounted(){this.$bus.$on("clear",(()=>{this.keyword=""}))},methods:{goSearch(){let t={name:"search",params:{keyword:this.keyword||void 0}};this.$route.query&&(t.query=this.$route.query),this.$router.push(t)},async logout(){try{await this.$store.dispatch("userLogout"),this.$router.push("/home")}catch(t){alert(t.message)}}},computed:{userName(){return this.$store.state.user.userInfo.name}}}),f=m,g=r(1001),h=(0,g.Z)(f,d,p,!1,null,"48c1f895",null),v=h.exports,y=function(){var t=this;t._self._c;return t._m(0)},_=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer-container"},[e("div",{staticClass:"footerList"},[e("div",{staticClass:"footerItem"},[e("h4",[t._v("购物指南")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("购物流程")]),e("li",[t._v("会员介绍")]),e("li",[t._v("生活旅行/团购")]),e("li",[t._v("常见问题")]),e("li",[t._v("购物指南")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("配送方式")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("上门自提")]),e("li",[t._v("211限时达")]),e("li",[t._v("配送服务查询")]),e("li",[t._v("配送费收取标准")]),e("li",[t._v("海外配送")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("支付方式")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("货到付款")]),e("li",[t._v("在线支付")]),e("li",[t._v("分期付款")]),e("li",[t._v("邮局汇款")]),e("li",[t._v("公司转账")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("售后服务")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("售后政策")]),e("li",[t._v("价格保护")]),e("li",[t._v("退款说明")]),e("li",[t._v("返修/退换货")]),e("li",[t._v("取消订单")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("特色服务")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("夺宝岛")]),e("li",[t._v("DIY装机")]),e("li",[t._v("延保服务")]),e("li",[t._v("尚品汇E卡")]),e("li",[t._v("尚品汇通信")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("帮助中心")]),e("img",{attrs:{src:r(2552)}})])]),e("div",{staticClass:"copyright"},[e("ul",{staticClass:"helpLink"},[e("li",[t._v(" 关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 联系我们 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 商家入驻 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 营销中心 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 友情链接 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 营销中心 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 友情链接 "),e("span",{staticClass:"space"})]),e("li",[t._v("关于我们")])]),e("p",[t._v("地址:北京市昌平区宏福科技园综合楼6层")]),e("p",[t._v("京ICP备19006430号")])])])])}],C={name:"AppFooter",data(){return{}},mounted(){},methods:{}},b=C,I=(0,g.Z)(b,y,_,!1,null,"6c638ce6",null),w=I.exports,k={name:"AppApp",components:{Header:v,Footer:w},data(){return{}},mounted(){this.$store.dispatch("getcategoryList")},methods:{}},N=k,L=(0,g.Z)(N,u,l,!1,null,"2d69bd26",null),E=L.exports,S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"type-nav"},[e("div",{staticClass:"container"},[e("div",{on:{mouseleave:t.leaveIndex,mouseenter:t.enterShow}},[e("h2",{staticClass:"all"},[t._v("全部商品分类")]),e("transition",{attrs:{name:"sort"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"sort"},[e("div",{staticClass:"all-sort-list2",on:{click:t.goSearch}},t._l(t.categoryList,(function(r,a){return e("div",{key:r.categoryId,staticClass:"item"},[e("h3",{class:{cur:t.currentIndex==a},on:{mouseenter:function(e){return t.changeIndex(a)}}},[e("a",{attrs:{href:"javascript:;","data-categoryName":r.categoryName,"data-category1Id":r.categoryId}},[t._v(t._s(r.categoryName))])]),e("div",{staticClass:"item-list clearfix",style:{display:t.currentIndex==a?"block":"none"}},t._l(r.categoryChild,(function(r){return e("div",{key:r.categoryId,staticClass:"subitem"},[e("dl",{staticClass:"fore"},[e("dt",[e("a",{attrs:{href:"javascript:;","data-categoryName":r.categoryName,"data-category2Id":r.categoryId}},[t._v(t._s(r.categoryName))])]),e("dd",t._l(r.categoryChild,(function(r){return e("em",{key:r.categoryId},[e("a",{attrs:{href:"javascript:;","data-categoryName":r.categoryName,"data-category3Id":r.categoryId}},[t._v(t._s(r.categoryName))])])})),0)])])})),0)])})),0)])])],1),t._m(0)])])},x=[function(){var t=this,e=t._self._c;return e("nav",{staticClass:"nav"},[e("a",{attrs:{href:"###"}},[t._v("服装城")]),e("a",{attrs:{href:"###"}},[t._v("美妆馆")]),e("a",{attrs:{href:"###"}},[t._v("尚品汇超市")]),e("a",{attrs:{href:"###"}},[t._v("全球购")]),e("a",{attrs:{href:"###"}},[t._v("闪购")]),e("a",{attrs:{href:"###"}},[t._v("团购")]),e("a",{attrs:{href:"###"}},[t._v("有趣")]),e("a",{attrs:{href:"###"}},[t._v("秒杀")])])}],O=r(3822),A=r(9289),$=r.n(A),U={name:"TypeNav",data(){return{currentIndex:-1,show:!0}},mounted(){"/home"!==this.$route.path&&(this.show=!1)},computed:{...(0,O.rn)({categoryList:t=>t.home.categoryList})},methods:{changeIndex:$()((function(t){this.currentIndex=t}),50),leaveIndex(){this.currentIndex=-1,"/home"!==this.$route.path&&(this.show=!1)},goSearch(t){let e=t.target,{categoryname:r,category1id:a,category2id:o,category3id:s}=e.dataset;if(r){let t={name:"search"},e={categoryName:r};a?e.category1Id=a:o?e.category2Id=o:e.category3Id=s,this.$route.params&&(t.params=this.$route.params,t.query=e,this.$router.push(t))}},enterShow(){"/home"!==this.$route.path&&(this.show=!0)}}},P=U,T=(0,g.Z)(P,S,x,!1,null,"63414466",null),q=T.exports,R=function(){var t=this,e=t._self._c;return e("div",{staticClass:"swiper-container",attrs:{id:"floor1Swiper"}},[e("div",{staticClass:"swiper-wrapper"},t._l(t.list,(function(t){return e("div",{staticClass:"swiper-slide",attrs:{Key:t.id}},[e("img",{attrs:{src:t.imgUrl}})])})),0),e("div",{staticClass:"swiper-pagination"}),e("div",{staticClass:"swiper-button-prev"}),e("div",{staticClass:"swiper-button-next"})])},j=[],F=r(781),Z={name:"AppCarousel",props:["list"],data(){return{}},watch:{list:{immediate:!0,handler(){this.$nextTick((()=>{new F.Z(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}))}}},mounted(){},methods:{}},B=Z,D=(0,g.Z)(B,R,j,!1,null,"3959aa98",null),G=D.exports,K=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination"},[e("button",{attrs:{disabled:1==t.pageNo},on:{click:function(e){return t.$emit("getPageNo",t.pageNo-1)}}},[t._v("上一页")]),t.starNumAndEndNum.start>1?e("button",{class:{active:1==t.pageNo},on:{click:function(e){return t.$emit("getPageNo",1)}}},[t._v("1")]):t._e(),t.starNumAndEndNum.start>2?e("button",[t._v("···")]):t._e(),t._l(t.starNumAndEndNum.end,(function(r,a){return e("button",{directives:[{name:"show",rawName:"v-show",value:r>=t.starNumAndEndNum.start,expression:"page >= starNumAndEndNum.start"}],key:a,class:{active:t.pageNo==r},on:{click:function(e){return t.$emit("getPageNo",r)}}},[t._v(t._s(r))])})),t.starNumAndEndNum.end<t.totalPage-1?e("button",[t._v("···")]):t._e(),t.starNumAndEndNum.end<t.totalPage?e("button",{class:{active:t.pageNo==t.totalPage},on:{click:function(e){return t.$emit("getPageNo",t.totalPage)}}},[t._v(t._s(t.totalPage))]):t._e(),e("button",{attrs:{disabled:t.pageNo==t.totalPage},on:{click:function(e){return t.$emit("getPageNo",t.pageNo+1)}}},[t._v("下一页")]),e("button",{staticStyle:{"margin-left":"30px"}},[t._v("共 "+t._s(t.total)+" 条")])],2)},H=[],M={name:"PagiNation",props:["pageNo","pageSize","total","continues"],computed:{totalPage(){return Math.ceil(this.total/this.pageSize)},starNumAndEndNum(){const{continues:t,pageNo:e,totalPage:r}=this;let a=0,o=0;return t>r?(a=1,o=r):(a=e-parseInt(t/2),o=e+parseInt(t/2),a<1&&(a=1,o=t),o>r&&(o=r,a=r-t+1)),{start:a,end:o}}}},z=M,Y=(0,g.Z)(z,K,H,!1,null,"de8ca816",null),J=Y.exports,V=r(6112),Q=r.p+"img/1.6f58e81c.gif",W=r(2631),X=[{path:"/",redirect:"/home",meta:{show:!0}},{path:"/home",component:()=>r.e(957).then(r.bind(r,1957)),meta:{show:!0}},{path:"/search/:keyword?",component:()=>r.e(768).then(r.bind(r,7768)),meta:{show:!0},name:"search",props:!0},{path:"/login",component:()=>r.e(819).then(r.bind(r,3819)),meta:{show:!1}},{path:"/register",component:()=>r.e(69).then(r.bind(r,69)),meta:{show:!1}},{path:"/detail/:skuid",component:()=>r.e(887).then(r.bind(r,4887)),meta:{show:!1}},{path:"/addcartsuccess",component:()=>r.e(391).then(r.bind(r,4391)),meta:{show:!1},name:"addcartsuccess"},{path:"/shopcart",component:()=>r.e(719).then(r.bind(r,3719)),meta:{show:!1}},{path:"/trade",component:()=>r.e(229).then(r.bind(r,7229)),meta:{show:!1},beforeEnter:(t,e,r)=>{"/shopcart"==e.path?r():r(!1)}},{path:"/pay",component:()=>r.e(300).then(r.bind(r,4300)),meta:{show:!1},beforeEnter:(t,e,r)=>{"/trade"==e.path?r():r(!1)}},{path:"/paysuccess",component:()=>r.e(908).then(r.bind(r,145)),meta:{show:!1}},{path:"/center",component:()=>r.e(185).then(r.bind(r,9185)),meta:{show:!1},children:[{path:"/center",redirect:"/center/myorder"},{path:"myorder",component:()=>r.e(95).then(r.bind(r,2095))},{path:"grouporder",component:()=>r.e(113).then(r.bind(r,113))}]}],tt=r(4161),et=r(530),rt=r.n(et);const at=tt.Z.create({baseURL:"/api",timeout:5e3});at.interceptors.request.use((t=>(ce.state.detail.uuid_token&&(t.headers.userTempId=ce.state.detail.uuid_token),ce.state.user.token&&(t.headers.token=ce.state.user.token),rt().start(),t))),at.interceptors.response.use((t=>(rt().done(),t.data)),(t=>t));var ot=at;const st=tt.Z.create({baseURL:"/mock",timeout:5e3});st.interceptors.request.use((t=>(rt().start(),t))),st.interceptors.response.use((t=>(rt().done(),t.data)),(t=>t));var nt=st;const it=()=>ot({url:"/api/product/getBaseCategoryList",method:"get"}),ct=()=>nt.get("/banner"),ut=()=>nt.get("/floor"),lt=t=>ot.post("/api/list",t),dt=t=>ot.get(`/api/item/${t}`),pt=(t,e)=>ot.post(`/api/cart/addToCart/${t}/${e}`),mt=()=>ot.get("/api/cart/cartList"),ft=t=>ot["delete"](`/api/cart/deleteCart/${t}`),gt=(t,e)=>ot.get(`/api/cart/checkCart/${t}/${e}`),ht=t=>ot.get(`/api/user/passport/sendCode/${t}`),vt=t=>ot.post("/api/user/passport/register",t),yt=t=>ot.post("/api/user/passport/login",t),_t=()=>ot.get("/api/user/passport/auth/getUserInfo"),Ct=()=>ot.get("/api/user/passport/logout"),bt=()=>ot.get("/api/user/userAddress/auth/findUserAddressList"),It=()=>ot.get("/api/order/auth/trade"),wt=(t,e)=>ot.post(`/api/order/auth/submitOrder?tradeNo=${t}`,e),kt=t=>ot.get(`/api/payment/weixin/createNative/${t}`),Nt=t=>ot.get(`/api/payment/weixin/queryPayStatus/${t}`),Lt=(t,e)=>ot.get(`/api/order/auth/${t}/${e}`),Et={categoryList:[],bannerList:[],floorList:[]},St={CATEGORYLIST(t,e){t.categoryList=e},BANNERLIST(t,e){t.bannerList=e},FLOORLIST(t,e){t.floorList=e}},xt={async getcategoryList({commit:t}){const e=await it();200==e.code&&t("CATEGORYLIST",e.data)},async getBannerList({commit:t}){const e=await ct();200==e.code&&t("BANNERLIST",e.data)},async getFloorList({commit:t}){const e=await ut();200==e.code&&t("FLOORLIST",e.data)}},Ot={};var At={state:Et,mutations:St,actions:xt,getters:Ot};const $t={searchList:{}},Ut={SEARCHINFO(t,e){t.searchList=e}},Pt={async getSearchInfo({commit:t},e={}){let r=await lt(e);200==r.code&&t("SEARCHINFO",r.data)}},Tt={goodsList(t){return t.searchList.goodsList||[]},attrsList(t){return t.searchList.attrsList||[]},trademarkList(t){return t.searchList.trademarkList||[]}};var qt={state:$t,mutations:Ut,actions:Pt,getters:Tt},Rt=r(536);const jt=()=>{let t=localStorage.getItem("UUIDTOKEN");return t||(t=(0,Rt.Z)(),localStorage.setItem("UUIDTOKEN",t)),t},Ft={goodsInfo:{},uuid_token:jt()},Zt={GOODSINFO(t,e){t.goodsInfo=e}},Bt={async getGoodsInfo({commit:t},e){const r=await dt(e);200==r.code&&t("GOODSINFO",r.data)},async addOrUpdateShopCart({commit:t},{skuId:e,skuNum:r}){let a=await pt(e,r);return 200==a.code?"ok":Promise.reject(new Error("faile"))}},Dt={categoryView(t){return t.goodsInfo.categoryView||{}},skuInfo(t){return t.goodsInfo.skuInfo||{}},spuSaleAttrList(){return Ft.goodsInfo.spuSaleAttrList||[]}};var Gt={state:Ft,mutations:Zt,actions:Bt,getters:Dt};const Kt={cartList:[]},Ht={GETCARTLIST(t,e){t.cartList=e}},Mt={async getShopCartList({commit:t}){const e=await mt();200==e.code&&t("GETCARTLIST",e.data)},async deleteCartById(t,e){let r=await ft(e);return 200==r.code?"ok":Promise.reject(new Error("faile"))},async updateCheckedById(t,{skuId:e,isChecked:r}){let a=await gt(e,r);return 200==a.code?"ok":Promise.reject(new Error("faile"))},deleteAllCheckedCart({dispatch:t,getters:e}){let r=[];return e.cartList.cartInfoList.forEach((e=>{let a=1==e.isChecked?t("deleteCartById",e.skuId):"";r.push(a)})),Promise.all(r)},updateAllCartIsChecked({dispatch:t,state:e},r){let a=[];return e.cartList[0].cartInfoList.forEach((e=>{let o=t("updateCheckedById",{skuId:e.skuId,isChecked:r});a.push(o)})),Promise.all(a)}},zt={cartList(t){return t.cartList[0]||{}}};var Yt={state:Kt,mutations:Ht,actions:Mt,getters:zt};const Jt=t=>{localStorage.setItem("TOKEN",t)},Vt=()=>localStorage.getItem("TOKEN"),Qt=()=>{localStorage.removeItem("TOKEN")},Wt={code:"",token:Vt(),userInfo:{}},Xt={GETCODE(t,e){t.code=e},USERLOGIN(t,e){t.token=e},USERINFO(t,e){t.userInfo=e},CLEAR(t){t.token="",t.userInfo={},Qt()}},te={async getCode({commit:t},e){const r=await ht(e);return 200==r.code?(t("GETCODE",r.data),"ok"):Promise.reject(new Error("faile"))},async userRegister(t,e){await vt(e)},async userLogin({commit:t},e){const r=await yt(e);return console.log(r),200==r.code?(t("USERLOGIN",r.data.token),Jt(r.data.token),"ok"):Promise.reject(new Error("faile"))},async getUserInfo({commit:t}){const e=await _t();if(200==e.code)return t("USERINFO",e.data),"ok"},async userLogout({commit:t}){const e=await Ct();return 200==e.code?(t("CLEAR"),"ok"):Promise.reject(new Error("faile"))}},ee={};var re={state:Wt,mutations:Xt,actions:te,getters:ee};const ae={address:[],orderInfo:{}},oe={USERADRESS(t,e){t.address=e},ORDERINFO(t,e){t.orderInfo=e}},se={async getUserAddress({commit:t}){const e=await bt();200==e.code&&t("USERADRESS",e.data)},async getOrderInfo({commit:t}){const e=await It();200==e.code&&t("ORDERINFO",e.data)}},ne={};var ie={state:ae,mutations:oe,actions:se,getters:ne};c["default"].use(O.ZP);var ce=new O.ZP.Store({modules:{home:At,search:qt,detail:Gt,shopcart:Yt,user:re,trade:ie}});c["default"].use(W.Z);let ue=W.Z.prototype.push,le=W.Z.prototype.replace;W.Z.prototype.replace=function(t,e,r){e&&r?le.call(this,t,e,r):le.call(this,t,(()=>{}),(()=>{}))},W.Z.prototype.push=function(t,e,r){e&&r?ue.call(this,t,e,r):ue.call(this,t,(()=>{}),(()=>{}))};let de=new W.Z({routes:X,scrollBehavior(){return{y:0}}});de.beforeEach((async(t,e,r)=>{let a=ce.state.user.token,o=ce.state.user.userInfo.name;if(a)if("/register"==t.path)r("/home");else if(o)r();else try{await ce.dispatch("getUserInfo"),r()}catch(s){await ce.dispatch("userLogout"),r("/login")}else-1!=t.path.indexOf("/trade")||-1!=t.path.indexOf("/pay")||-1!=t.path.indexOf("/center")?r("/login?redirect="+t.path):r()}));var pe=de,me=r(7634),fe=r.n(me),ge=JSON.parse('[{"id":"1","imgUrl":"/images/banner1.jpg"},{"id":"2","imgUrl":"/images/banner2.jpg"},{"id":"3","imgUrl":"/images/banner3.jpg"},{"id":"4","imgUrl":"/images/banner4.jpg"}]'),he=JSON.parse('[{"id":"001","name":"家用电器","keywords":["节能补贴","4K电视","空气净化器","IH电饭煲","滚筒洗衣机","电热水器"],"imgUrl":"/images/floor-1-1.png","navList":[{"url":"#","text":"热门"},{"url":"#","text":"大家电"},{"url":"#","text":"生活电器"},{"url":"#","text":"厨房电器"},{"url":"#","text":"应季电器"},{"url":"#","text":"空气/净水"},{"url":"#","text":"高端电器"}],"carouselList":[{"id":"0011","imgUrl":"/images/floor-1-b01.png"},{"id":"0012","imgUrl":"/images/floor-1-b02.png"},{"id":"0013","imgUrl":"/images/floor-1-b03.png"}],"recommendList":["/images/floor-1-2.png","/images/floor-1-3.png","/images/floor-1-5.png","/images/floor-1-6.png"],"bigImg":"/images/floor-1-4.png"},{"id":"002","name":"手机通讯","keywords":["节能补贴2","4K电视2","空气净化器2","IH电饭煲2","滚筒洗衣机2","电热水器2"],"imgUrl":"/images/floor-1-1.png","navList":[{"url":"#","text":"热门2"},{"url":"#","text":"大家电2"},{"url":"#","text":"生活电器2"},{"url":"#","text":"厨房电器2"},{"url":"#","text":"应季电器2"},{"url":"#","text":"空气/净水2"},{"url":"#","text":"高端电器2"}],"carouselList":[{"id":"0011","imgUrl":"/images/floor-1-b01.png"},{"id":"0012","imgUrl":"/images/floor-1-b02.png"},{"id":"0013","imgUrl":"/images/floor-1-b03.png"}],"recommendList":["/images/floor-1-2.png","/images/floor-1-3.png","/images/floor-1-5.png","/images/floor-1-6.png"],"bigImg":"/images/floor-1-4.png"}]');fe().mock("/mock/banner",{code:200,data:ge}),fe().mock("/mock/floor",{code:200,data:he}),c["default"].use(V.Z,{loading:Q}),c["default"].component(q.name,q),c["default"].component(G.name,G),c["default"].component(J.name,J),c["default"].use(i()),c["default"].prototype.$msgbox=s(),c["default"].prototype.$alert=s().alert,new c["default"]({render:t=>t(E),beforeCreate(){c["default"].prototype.$bus=this,c["default"].prototype.$API=a},router:pe,store:ce}).$mount("#app")},2552:function(t,e,r){t.exports=r.p+"img/wx_cz.5d92bf53.jpg"},587:function(t,e,r){t.exports=r.p+"img/logo.d600ca2b.png"}},e={};function r(a){var o=e[a];if(void 0!==o)return o.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,a,o,s){if(!a){var n=1/0;for(l=0;l<t.length;l++){a=t[l][0],o=t[l][1],s=t[l][2];for(var i=!0,c=0;c<a.length;c++)(!1&s||n>=s)&&Object.keys(r.O).every((function(t){return r.O[t](a[c])}))?a.splice(c--,1):(i=!1,s<n&&(n=s));if(i){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[a,o,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,a){return r.f[a](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/"+t+"."+{69:"878fdce2",95:"18a27474",113:"b746ba80",185:"d5e67c4c",229:"7c8aa6e4",300:"64907214",391:"aca77a11",719:"f709e956",768:"c07e8359",819:"5ab4ddfa",887:"1bf7641a",908:"42d3ca94",957:"80f78aa3"}[t]+".js"}}(),function(){r.miniCssF=function(t){return"css/"+t+"."+{69:"89d617e5",95:"8e99ea90",185:"5136cd28",229:"252ca99c",300:"bd25a4f0",391:"4a9c1651",719:"d5e90cad",768:"d5157764",819:"0fffbb57",887:"c09f21df",908:"e2520660",957:"eed267cb"}[t]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="app:";r.l=function(a,o,s,n){if(t[a])t[a].push(o);else{var i,c;if(void 0!==s)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+s){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",e+s),i.src=a),t[a]=[o];var p=function(e,r){i.onerror=i.onload=null,clearTimeout(m);var o=t[a];if(delete t[a],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(t){return t(r)})),e)return e(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,r,a,o){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var n=function(r){if(s.onerror=s.onload=null,"load"===r.type)a();else{var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=n,c.request=i,s.parentNode&&s.parentNode.removeChild(s),o(c)}};return s.onerror=s.onload=n,s.href=e,r?r.parentNode.insertBefore(s,r.nextSibling):document.head.appendChild(s),s},e=function(t,e){for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var o=r[a],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===t||s===e))return o}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){o=n[a],s=o.getAttribute("data-href");if(s===t||s===e)return o}},a=function(a){return new Promise((function(o,s){var n=r.miniCssF(a),i=r.p+n;if(e(n,i))return o();t(a,i,null,o,s)}))},o={143:0};r.f.miniCss=function(t,e){var r={69:1,95:1,185:1,229:1,300:1,391:1,719:1,768:1,819:1,887:1,908:1,957:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=a(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};r.f.j=function(e,a){var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)a.push(o[2]);else{var s=new Promise((function(r,a){o=t[e]=[r,a]}));a.push(o[2]=s);var n=r.p+r.u(e),i=new Error,c=function(a){if(r.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var s=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;i.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",i.name="ChunkLoadError",i.type=s,i.request=n,o[1](i)}};r.l(n,c,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,s,n=a[0],i=a[1],c=a[2],u=0;if(n.some((function(e){return 0!==t[e]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var l=c(r)}for(e&&e(a);u<n.length;u++)s=n[u],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(l)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(6279)}));a=r.O(a)})();