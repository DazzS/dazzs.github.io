(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30e387ee"],{"0418":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("section",[t._m(0),a("nav",[a("ul",[a("li",[a("router-link",{attrs:{tag:"a",to:"/"}},[t._v("ГЛАВНАЯ")])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/product"}},[t._v("ПРОДУКТЫ")])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/production"}},[t._v("ПРОИЗВОДСТВО")])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/contacts"}},[t._v("КОНТАКТЫ")])],1)])])]),a("section",[t._m(1),a("nav",[a("ul",[a("li",[a("router-link",{attrs:{tag:"a",to:"/"}},[t._v("ГЛАВНАЯ")])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/product"}},[t._v("ПРОДУКТЫ")])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/production"}},[t._v("ПРОИЗВОДСТВО")])],1),a("li",[a("router-link",{attrs:{tag:"a",to:"/contacts"}},[t._v("КОНТАКТЫ")])],1)])])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",[s("img",{staticClass:"logoHeader",attrs:{src:a("e43a")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",[s("img",{staticClass:"logoHeader",attrs:{src:a("2756")}})])}],i={},n=i,o=(a("5452"),a("2877")),c=Object(o["a"])(n,s,r,!1,null,null,null);e["a"]=c.exports},"04a8":function(t,e,a){t.exports=a.p+"img/product_img_5.d3b3b0bc.jpg"},"0cce":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav"},[t._m(0),a("a",{staticClass:"nav__trigger",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.isActive=!t.isActive}}},[a("div",{staticClass:"bars"})]),a("div",{staticClass:"nav__content",class:{active:t.isActive}},[a("nav",{staticClass:"nav__list"},[a("ul",[a("li",{staticClass:"nav__item"},[a("router-link",{attrs:{tag:"a",to:"/"}},[t._v("ГЛАВНАЯ")])],1),a("li",{staticClass:"nav__item"},[a("router-link",{attrs:{tag:"a",to:"/product",href:"#"}},[t._v("ПРОДУКТЫ")])],1),a("li",{staticClass:"nav__item"},[a("router-link",{attrs:{tag:"a",to:"/production",href:"#"}},[t._v("ПРОИЗВОДСТВО")])],1),a("li",{staticClass:"nav__item"},[a("router-link",{attrs:{tag:"a",to:"/contacts",href:"#"}},[t._v("КОНТАКТЫ")])],1)])])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",[s("img",{staticClass:"logoHeader",attrs:{src:a("2756")}})])}],i={data:function(){return{isActive:!1}}},n=i,o=(a("9820"),a("2877")),c=Object(o["a"])(n,s,r,!1,null,"eb14235a",null);e["a"]=c.exports},"0d24":function(t,e,a){t.exports=a.p+"img/product_img_2.b2b683b0.jpg"},2756:function(t,e,a){t.exports=a.p+"img/logo-white.9c6d09e3.png"},4385:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("MobileHeader"),a("section",{staticClass:"main_page"},[t._m(0),a("article",{staticClass:"factory padding"},[a("span",{staticClass:"context_text-white"},[t._v("ООО «МАШПРОМ» работает с 2011 года, является производственным предприятием и специализируется на производстве стальных и чугунных отливок")]),a("br"),a("router-link",{staticClass:"button-white",attrs:{to:"/production",tag:"a"}},[t._v("НАШЕ ПРОИЗВОДСТВО")])],1),a("article",{staticClass:"product padding"},[t._m(1),a("router-link",{staticClass:"button-black",attrs:{to:"/product",tag:"a"}},[t._v("БОЛЬШЕ О ПРОДУКЦИИ")])],1),t._m(2),a("article",{staticClass:"feedback",attrs:{id:"feedback"}},[a("article",[a("div",[a("span",{staticClass:"context_text-white"},[t._v("ОСТАВИТЬ ЗАЯВКУ")]),a("form",{staticClass:"feedback-form",attrs:{enctype:"multipart/form-data",method:"post",id:"form"},on:{submit:t.onSubmit}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.sendForm.name,expression:"sendForm.name"}],attrs:{required:"",type:"text",id:"user_name",name:"user_name",placeholder:"Ваше имя"},domProps:{value:t.sendForm.name},on:{input:function(e){e.target.composing||t.$set(t.sendForm,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.sendForm.email,expression:"sendForm.email"}],attrs:{required:"",type:"email",id:"user_email",name:"user_email",placeholder:"E-mail"},domProps:{value:t.sendForm.email},on:{input:function(e){e.target.composing||t.$set(t.sendForm,"email",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.sendForm.phoneNumber,expression:"sendForm.phoneNumber"}],attrs:{required:"",type:"tel",id:"user_tel",name:"user_tel",placeholder:"Контактный телефон"},domProps:{value:t.sendForm.phoneNumber},on:{input:function(e){e.target.composing||t.$set(t.sendForm,"phoneNumber",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sendForm.message,expression:"sendForm.message"}],attrs:{required:"",type:"text",id:"user_message",name:"user_message",placeholder:"Сообщение"},domProps:{value:t.sendForm.message},on:{input:function(e){e.target.composing||t.$set(t.sendForm,"message",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{staticClass:"custom-checkbox",attrs:{required:"",type:"checkbox",id:"user_agreement",name:"user_agreement"}}),a("label",{attrs:{for:"user_agreement"}}),a("span",{attrs:{id:"agreement"}},[t._v("Я ознакомился(-ась) с условиями "),a("router-link",{attrs:{to:"/agreement",tag:"a"}},[t._v("Пользовательского соглашения")]),t._v(" и "),a("router-link",{attrs:{to:"/policy",tag:"a"}},[t._v("Политики конфиденциальности")]),t._v(" и выражаю своё согласие на обработку переданных мной персональных данных")],1)]),a("button",{staticClass:"button-white",attrs:{type:"submit",id:"service"}},[t._v(" ОТПРАВИТЬ ЗАЯВКУ ")])])])])]),a("article",{staticClass:"contacts padding"},[a("span",{staticClass:"context_text-white"},[t._v("КОНТАКТЫ")]),a("div",{staticClass:"context_text-white"},[t._m(3),a("article",[t._m(4),a("span",[t._v("г.Челябинск, пр.Ленина, 36А")]),a("br"),a("router-link",{staticClass:"map_link",attrs:{to:"/contacts"}},[t._v("Показать на карте")])],1),t._m(5)])])]),a("Footer")],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"top-info"},[a("span",[t._v("ООО «МАШПРОМ»")]),a("article",[a("span",[t._v("Производство литых изделий из чугуна и стали")]),a("span",[t._v("Механическая обработка")]),a("a",{staticClass:"button-white",attrs:{href:"#feedback"}},[t._v("ОСТАВИТЬ ЗАЯВКУ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",[s("span",[t._v("ПРОДУКЦИЯ")]),s("div",{attrs:{id:"firstRow"}},[s("img",{attrs:{src:a("7b51")}}),s("img",{attrs:{src:a("0d24")}}),s("img",{attrs:{src:a("d454")}})]),s("br"),s("br"),s("div",{attrs:{id:"secondRow"}},[s("img",{attrs:{src:a("4565")}}),s("img",{attrs:{src:a("04a8")}}),s("img",{attrs:{src:a("90ee")}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"work padding"},[s("span",[t._v("КАК МЫ РАБОТАЕМ")]),s("article",{staticClass:"context_text-white"},[s("div",{attrs:{id:"left_side"}},[s("img",{attrs:{src:a("cf4a")}}),s("span",[t._v("Отправляете заявку с указанием чертежа, либо каталожного номера детали с указанием необходимого количества и марки стали")])]),s("div",{attrs:{id:"right_side"}},[s("span",[t._v("Мы согласовываем чертежи, стоимость и сроки изготовления")]),s("img",{attrs:{src:a("6374")}})]),s("div",{attrs:{id:"left_side"}},[s("img",{attrs:{src:a("e102")}}),s("span",[t._v("Заключаем договор и получаем оплату согласно условиям договора")])]),s("div",{attrs:{id:"right_side"}},[s("span",[t._v("Изготавливаем продукцию в указанные сроки")]),s("img",{attrs:{src:a("a9b4")}})]),s("div",{attrs:{id:"left_side"}},[s("img",{attrs:{src:a("7cd5")}}),s("span",[t._v("Отправляем продукцию до транспортнойкомпании")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",[s("div",[s("img",{attrs:{src:a("8e47")}}),s("span",[t._v("ТЕЛЕФОНЫ")])]),s("a",{attrs:{href:"tel:+73512473568"}},[t._v("+7(351)247-35-68")]),s("br"),s("a",{attrs:{href:"tel:+79227103568"}},[t._v("+7(922)710-35-68")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{src:a("b529")}}),s("span",[t._v("АДРЕС")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",[s("div",[s("img",{attrs:{src:a("cf4a")}}),s("span",[t._v("ПОЧТА")])]),s("a",{attrs:{href:"sales@mashprom74.ru"}},[t._v("sales@mashprom74.ru")])])}],i=a("0418"),n=a("fd2d"),o=a("0cce"),c={data:function(){return{sendForm:{name:"",email:"",phoneNumber:"",message:""}}},components:{Header:i["a"],Footer:n["a"],MobileHeader:o["a"]},methods:{onSubmit:function(t){console.log("Отправка запроса"),t.preventDefault?t.preventDefault():t.returnValue=!1;var e=new XMLHttpRequest;e.open("POST","https://dazzs.github.io/../backend/send.php",!0),e.onload=function(){e.status>=200&&e.status<400?(json=JSON.parse(this.response),console.log(json),"success"==json.result?alert("Сообщение отправлено"):alert("Ошибка. Сообщение не отправлено")):alert("Ошибка сервера. Номер: "+e.status)},e.onerror=function(){alert("Ошибка отправки запроса")},e.send(new FormData(t.target))}}},l=c,u=a("2877"),m=Object(u["a"])(l,s,r,!1,null,null,null);e["default"]=m.exports},4565:function(t,e,a){t.exports=a.p+"img/product_img_4.7cd74466.jpg"},5452:function(t,e,a){"use strict";a("af35")},6374:function(t,e,a){t.exports=a.p+"img/drawings-white.a6397a4d.svg"},"760c":function(t,e,a){"use strict";a("c3f5")},"782a":function(t,e,a){},"7b51":function(t,e,a){t.exports=a.p+"img/product_img_1.beb576e7.jpg"},"7cd5":function(t,e,a){t.exports=a.p+"img/delivery-white.3c1398e1.svg"},"8e47":function(t,e,a){t.exports=a.p+"img/phone-white.4488e74d.svg"},"90ee":function(t,e,a){t.exports=a.p+"img/product_img_6.804a3289.jpg"},9820:function(t,e,a){"use strict";a("782a")},a9b4:function(t,e,a){t.exports=a.p+"img/work_icon-white.91e4367e.svg"},af35:function(t,e,a){},b529:function(t,e,a){t.exports=a.p+"img/location-white.c1812f3b.svg"},c3f5:function(t,e,a){},cf4a:function(t,e,a){t.exports=a.p+"img/mail-white.1632a7b2.svg"},d454:function(t,e,a){t.exports=a.p+"img/product_img_3.c782bc47.jpg"},e102:function(t,e,a){t.exports=a.p+"img/contarct-white.992b615f.svg"},e43a:function(t,e,a){t.exports=a.p+"img/logo-colored.a8943ad7.png"},f9c6:function(t,e,a){t.exports=a.p+"img/logo_footer-white.29abc39f.png"},fd2d:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"footer"}},[s("footer",[s("img",{attrs:{src:a("f9c6")}}),s("span",[t._v("© ООО«МАШПРОМ» 2021")])])])}],i={},n=i,o=(a("760c"),a("2877")),c=Object(o["a"])(n,s,r,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-30e387ee.baaeff70.js.map