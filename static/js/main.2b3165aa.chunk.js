(this["webpackJsonptest-cassa"]=this["webpackJsonptest-cassa"]||[]).push([[0],{100:function(e,t,o){e.exports=o.p+"static/media/product_pineapple@1X.59ee810f.png"},101:function(e,t,o){e.exports=o.p+"static/media/product_berries@1X.174f38d7.png"},102:function(e,t,o){e.exports=o.p+"static/media/product_grapefruit@1X.3e2cec6e.png"},103:function(e,t,o){e.exports=o.p+"static/media/product_apple@1X.8e712385.png"},106:function(e,t,o){e.exports=o(161)},111:function(e,t,o){},161:function(e,t,o){"use strict";o.r(t);var a,r=o(0),c=o.n(r),n=o(36),s=o.n(n),_=(o(111),o(37)),i=o(18),u=o(39),p=o.n(u),l=function(e){var t=e.name,o=e.imgSrc;return c.a.createElement("div",{className:p.a.product},c.a.createElement("p",{className:p.a.product__name},t),c.a.createElement("img",{className:p.a.product__image,src:o,alt:"Product ".concat(t)}))},d=o(7),m=o(38),h=o(104),C=Object(r.createContext)(),f=o(96),E=o.n(f),b=o(2),O=o.n(b),A=(o(158),function(e){var t=e.product,o=Object(r.useContext)(C),a=o.show,n=o.addCartItem,s=function(e){for(var t=1;t<=50;t++)e.push(t);return e}([]),_=Object(r.useState)({selectedItem:3,showItems:!1}),i=Object(m.a)(_,2),u=i[0],p=i[1];Object(r.useEffect)((function(){p((function(e){return Object(d.a)({},e)}))}),[]);var l=function(){p((function(e){return Object(d.a)({},e,{showItems:!e.showItems})}))};return c.a.createElement("div",{className:O.a.productChoose},c.a.createElement("p",{className:O.a.productChoose__discount},"Offerta limitata -".concat(t.discount,"%")),c.a.createElement("p",{className:O.a.productChoose__prices},c.a.createElement("span",{className:O.a.productChoose__finalPrice},"$".concat((t.price*t.discount/100).toFixed(2))),c.a.createElement("span",{className:O.a.productChoose__price},"".concat(t.price.toFixed(2),"$"))),c.a.createElement("div",{className:O.a.productChoose__row},c.a.createElement("div",{className:O.a.productChoose__select},c.a.createElement("div",{className:O.a.productChoose__selectContainer},c.a.createElement("div",{className:O.a.productChoose__selectedItem},u.selectedItem),c.a.createElement("div",{className:O.a.productChoose__selectArrow,onClick:function(){return l()}},c.a.createElement("span",{className:"".concat(u.showItems?O.a.productChoose__selectArrowUp:O.a.productChoose__selectArrowDown)}))),c.a.createElement("div",{className:O.a.productChoose__selectItems,style:{display:u.showItems?"block":"none"},onMouseOver:function(e){var t=!0,o=!1,a=void 0;try{for(var r,c=e.currentTarget.getElementsByTagName("*")[Symbol.iterator]();!(t=(r=c.next()).done);t=!0){var n=r.value;n.classList.contains(O.a.selected)&&n.classList.remove(O.a.selected)}}catch(s){o=!0,a=s}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}}},c.a.createElement(h.a,{autoHide:!1,style:{maxHeight:138},scrollbarMinSize:40},s.map((function(e){return c.a.createElement("div",{key:e,onClick:function(){var t;t=e,p((function(e){return Object(d.a)({},e,{selectedItem:t})})),l()},className:u.selectedItem===e?"".concat(O.a.productChoose__item," ").concat(O.a.selected):O.a.productChoose__item},e)}))))),c.a.createElement("button",{className:O.a.productChoose__btn,type:"button",onClick:function(){n(t,u.selectedItem),a()}},c.a.createElement("img",{src:E.a,alt:"Cart"}))))}),g=o(163),v=o(23),w=o.n(v),N=function(e){var t=e.item;return c.a.createElement("div",{className:w.a.item},c.a.createElement("img",{className:w.a.item__img,src:t.imgSrc,alt:"Product ".concat(t.name)}),c.a.createElement("div",{className:w.a.item__body},c.a.createElement("p",{className:w.a.item__text},"Offerta fizzyslim con sapore di ".concat(t.name)),c.a.createElement("p",{className:w.a.item__info},"QT\xc0: ".concat(t.number)),c.a.createElement("p",{className:w.a.item__amount},"\u20ac".concat((Number(t.number)*Number(t.price)*Number(t.discount)/100).toFixed(2)))))},S=o(19),y=o.n(S),I=function(){var e=Object(r.useContext)(C),t=e.loading,o=e.visible,a=e.cartItems,n=e.hide,s=e.fetchCartItems;Object(r.useEffect)((function(){return s(),function(){return n()}}),[]);return c.a.createElement(r.Fragment,null,o?c.a.createElement("div",{className:y.a.popupOrder,id:"popupOrder",onClick:function(e){"popupOrder"===e.target.id&&n()}}):null,c.a.createElement(g.a,{in:o,classNames:"popup",timeout:{enter:150},mountOnEnter:!0,unmountOnExit:!0},c.a.createElement("div",{className:"popup ".concat(y.a.popupOrder__info)},c.a.createElement("div",{className:y.a.popupOrder__closeArea,onClick:n},"Carello"),c.a.createElement("div",{className:y.a.popupOrder__body},t?c.a.createElement("p",null,"Loading..."):a.map((function(e){return c.a.createElement(N,{key:e.id,item:e})})),c.a.createElement("p",{className:y.a.popupOrder__text},"Subtotale"),c.a.createElement("p",{className:y.a.popupOrder__total},"\u20ac".concat(a.reduce((function(e,t){return e+Number(t.number)*(Number(t.price)*Number(t.discount)/100)}),0).toFixed(2)))),c.a.createElement(_.b,{className:y.a.popupOrder__link,to:"/cart"},"Visualizza carrello"))))},P=o(99),x=o.n(P),j=o(100),B=o.n(j),k=o(101),D=o.n(k),T=o(102),U=o.n(T),L=o(103),R=o.n(L),F=o(20),H=o.n(F),J=function(){var e=[{id:1,name:"Pineapple",imgSrc:B.a,price:19,discount:50,number:0},{id:2,name:"Berries",imgSrc:D.a,price:19,discount:50,number:0},{id:3,name:"Grapefruit",imgSrc:U.a,price:19,discount:50,number:0},{id:4,name:"Apple",imgSrc:R.a,price:19,discount:50,number:0}];return c.a.createElement("div",{className:H.a.relative},c.a.createElement("div",{className:H.a.shop},c.a.createElement("div",{className:H.a.container},c.a.createElement("h1",{className:H.a.shop__heading},"Cassa"),c.a.createElement("div",{className:H.a.shop__row},e.map((function(e){return c.a.createElement("div",{className:H.a.shop__column,key:e.id},c.a.createElement(l,{name:e.name,imgSrc:e.imgSrc}),c.a.createElement(A,{product:e}))}))),c.a.createElement("img",{className:H.a.line,src:x.a,alt:"line"}))),c.a.createElement(I,null))},M=function(){return c.a.createElement("div",{style:{color:"black"}},"Cart")},Q=o(15),Y=o(40),X=function(e,t){var o=e.cartItems,a=o.findIndex((function(e){return e.id===t.id}));return-1===a?[].concat(Object(Y.a)(o),[t]):[].concat(Object(Y.a)(o.slice(0,a)),[t],Object(Y.a)(o.slice(a+1)))},z=(a={},Object(Q.a)(a,"SHOW_CART",(function(e){return Object(d.a)({},e,{visible:!0})})),Object(Q.a)(a,"HIDE_CART",(function(e){return Object(d.a)({},e,{visible:!1})})),Object(Q.a)(a,"SHOW_LOADER",(function(e){return Object(d.a)({},e,{loading:!0})})),Object(Q.a)(a,"ADD_CARTITEM",(function(e,t){var o=t.payload;return Object(d.a)({},e,{cartItems:X(e,o)})})),Object(Q.a)(a,"FETCH_CARTITEMS",(function(e){return Object(d.a)({},e,{loading:!1})})),Object(Q.a)(a,"DEFAULT",(function(e){return e})),a),V=function(e,t){return(z[t.type]||z.DEFAULT)(e,t)},K=function(e){var t=e.children,o=Object(r.useReducer)(V,{cartItems:[],visible:!1,loading:!1}),a=Object(m.a)(o,2),n=a[0],s=a[1],_=function(){return s({type:"SHOW_LOADER"})};return c.a.createElement(C.Provider,{value:{showLoader:_,show:function(){return s({type:"SHOW_CART"})},hide:function(){return s({type:"HIDE_CART"})},addCartItem:function(e,t){var o=Object(d.a)({},e,{number:t});try{var a=Object(d.a)({},o);s({type:"ADD_CARTITEM",payload:a})}catch(c){var r=new Error(c.message);console.log(r)}},fetchCartItems:function(){try{_(),s({type:"FETCH_CARTITEMS"})}catch(t){var e=new Error(t.message);console.log(e)}},loading:n.loading,visible:n.visible,cartItems:n.cartItems}},t)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement((function(){return c.a.createElement(K,null,c.a.createElement(_.a,{basename:"/test-cassa"},c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",exact:!0,component:J}),c.a.createElement(i.a,{path:"/cart",component:M}))))}),null),document.getElementById("root"))},19:function(e,t,o){e.exports={popupOrder:"PopupOrder_popupOrder__11Udc",popupOrder__info:"PopupOrder_popupOrder__info__2JFYq",popupOrder__closeArea:"PopupOrder_popupOrder__closeArea__nFw_v",popupOrder__body:"PopupOrder_popupOrder__body__35E70",popupOrder__link:"PopupOrder_popupOrder__link__35dSM"}},2:function(e,t,o){e.exports={productChoose:"ProductChoose_productChoose__3zcui",productChoose__discount:"ProductChoose_productChoose__discount__pXOIS",productChoose__prices:"ProductChoose_productChoose__prices__kjGtl",productChoose__finalPrice:"ProductChoose_productChoose__finalPrice__3Onb_",productChoose__price:"ProductChoose_productChoose__price__3gZQS",productChoose__row:"ProductChoose_productChoose__row__1YQq4",productChoose__select:"ProductChoose_productChoose__select__20wBF",productChoose__selectContainer:"ProductChoose_productChoose__selectContainer__1-N0N",productChoose__selectArrow:"ProductChoose_productChoose__selectArrow__22OV3",productChoose__selectedItem:"ProductChoose_productChoose__selectedItem__3h7hw",productChoose__selectItems:"ProductChoose_productChoose__selectItems__RfBex",productChoose__item:"ProductChoose_productChoose__item__3ZisL",productChoose__selectArrowDown:"ProductChoose_productChoose__selectArrowDown__1xCn0",productChoose__selectArrowUp:"ProductChoose_productChoose__selectArrowUp__3GLxy",productChoose__btn:"ProductChoose_productChoose__btn__3ysDd",selected:"ProductChoose_selected__YcXQA","simplebar-scrollbar":"ProductChoose_simplebar-scrollbar__eQmr4"}},20:function(e,t,o){e.exports={container:"Shop_container__UCifX",relative:"Shop_relative__88rc2",shop:"Shop_shop__2P2os",shop__heading:"Shop_shop__heading__2yUyb",shop__row:"Shop_shop__row__2UCLq",shop__column:"Shop_shop__column__ttvLN",line:"Shop_line__23xyC"}},23:function(e,t,o){e.exports={item__img:"PopupOrderItem_item__img__1f2K1"}},39:function(e,t,o){e.exports={product:"Product_product__1X_JV",product__name:"Product_product__name__2CG__",product__image:"Product_product__image__1DYEx"}},96:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABkElEQVRIS62VPyhFURzHP1/JbLFYLKQM/iQLSektrAajSZFBGQ1SBiOD/FvUm6xSTCiUEcVARImBTUoZHB2d+3ruO+c+7757t3v6/n6f8z3ne86RMcbw9+uSdBEbS/0rDyAvaSx1x1ihBUy4sRwwAnwBWxkAvoEdRY2MMY3AA1CXQfOoxUsBYEeMMZvAeIaAlTigGbgBajKAvAPNfwDOxTYwmgFgVtKiD9AJnFcJeAJaJX2WAJyLPWCoCsiYpLytDwH6geOUAHtIuyXZmPoBzsUp0JcCkpN0ENV5HTjAJLBaIWBf0nBxTWiJaoFLoK0CwD0wIOn5P4BpYNkJZ4CjMqAPSXc+jS+mdvZvQD1wBXREG1aBm4LUB2gCHp3CxnU3ReNrSSdJMbXr356icVSyIen3lg5tcg8w7w5bMGkJE0gGVDHzktKQA/s2TAEtwLqkwySoe0u8+hDAnsTBoqb24roNQYwxQb0vRQ3Aa6zZnKQFH8AYk6gPOYinqFfSWYKDoL5ciuwerElaKrMHUepK9D8xLpXhoUVg8QAAAABJRU5ErkJggg=="},99:function(e,t,o){e.exports=o.p+"static/media/doska@1X.f7197f16.png"}},[[106,1,2]]]);
//# sourceMappingURL=main.2b3165aa.chunk.js.map