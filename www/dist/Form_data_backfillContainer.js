webpackJsonp([2],{0:function(e,t,n){(function(e){!function(){var t=n(5),a=n(3),r=n(2),o=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return a.getRootInstances(r)},o)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function t(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),c=t(i),l=n(17),s=t(l),f=n(21),p=n(16),d=n(8),h=n(9),m=e(h),v=n(12),y=n(163),b=n(38),g=e(b),k=n(7),_=e(k),C=(0,v.BaseStore)({FormVerifierReducer:y.FormVerifierReducer}),w={accout:{name:"用户",require:!0},phone:{name:"手机号码",mobile:!0},password:{name:"密码",require:!0},password_repeat:{name:"确认密码",require:!0},city:{name:"城市",select:"-1"},delivery_channel:{name:"投放位置",select:"-1"},Interest:{name:"兴趣爱好",group:1},email:{name:"电子邮箱",email:!0},bank:{name:"银行",bank:!0}},E=function(e){function t(e){a(this,t);var n=r(this,Object.getPrototypeOf(t).call(this,e)),o=n.props;return o.FormVerifierReducer,o.dispatch,n.date=[{label:"北京",value:"北京"},{label:"福州",value:"福州"}],n.submitDate={accout:"",password:"",password_repeat:"",city:"-1",delivery_channel:"-1",Interest:[],phone:"",email:"",bank:""},n}return o(t,e),u(t,[{key:"sublimeButton",value:function(){var e=this.checkedValue.state.checked;if(!e)return(0,p.Tips)({message:"请必须勾选合作协议",type:2}),!1;var t=g["default"].verifyConfig(this.submitDate,w,!0);return t.length>0?((0,p.Tips)({message:t[0].tips,type:2}),!1):void(this.submitDate.password!=this.submitDate.password_repeat?(0,p.Tips)({message:"两次输入的密码不一致！",type:2}):((0,p.Tips)({message:"通过验证!",type:1}),console.log(this.submitDate)))}},{key:"valueChange",value:function(e,t){this.submitDate[e]=t}},{key:"valueChannelChange",value:function(e,t){var n=this.props.dispatch;this.submitDate[e]=t,n((0,y.ChangeDataAction)(this.submitDate))}},{key:"valueInterestChange",value:function(e,t){var n=this.props.dispatch;this.submitDate[e]=t,n((0,y.ChangeDataAction)(this.submitDate))}},{key:"render",value:function(){var e=this,t=this.props,n=t.FormVerifierReducer;return t.dispatch,this.submitDate=_["default"].assign({},this.submitDate,n.submitDate),c.createElement("div",null,c.createElement(p.AppBody,null,c.createElement(p.Panel,{title:"表单验证 - 基于redux的数据回填"},c.createElement(p.FormGroup,{horizontal:!0},c.createElement(p.FormItems,{label:"用户名"},c.createElement(p.InputText,{type:"test",placeholder:"请输入您的账号",value:this.submitDate.accout,onChange:function(t){return e.valueChange("accout",t.target.value)}})),c.createElement(p.FormItems,{label:"手机号码"},c.createElement(p.InputText,{type:"test",placeholder:"请输入您的手机号码",value:this.submitDate.phone,onChange:function(t){return e.valueChange("phone",t.target.value)}})),c.createElement(p.FormItems,{label:"银行卡号"},c.createElement(p.InputText,{type:"test",placeholder:"请输入您的银行卡号",value:this.submitDate.bank,onChange:function(t){return e.valueChange("bank",t.target.value)}})),c.createElement(p.FormItems,{label:"邮箱"},c.createElement(p.InputText,{type:"test",placeholder:"请输入您的邮箱",value:this.submitDate.email,onChange:function(t){return e.valueChange("email",t.target.value)}})),c.createElement(p.FormItems,{label:"密码"},c.createElement(p.InputText,{type:"password",placeholder:"请输入您的密码",value:this.submitDate.password,onChange:function(t){return e.valueChange("password",t.target.value)}})),c.createElement(p.FormItems,{label:"确认密码"},c.createElement(p.InputText,{type:"password",placeholder:"请输入您的密码",value:this.submitDate.password_repeat,onChange:function(t){return e.valueChange("password_repeat",t.target.value)}})),c.createElement(p.FormItems,{label:"城市"},c.createElement(p.InputSelect,{data:this.date,value:this.submitDate.city,onChange:function(t){return e.valueChange("city",t.target.value)}})),c.createElement(p.FormItems,{label:"投放位置"},c.createElement(p.RadioGroup,{onChange:function(t){return e.valueChannelChange("delivery_channel",t.target.value)}},c.createElement(p.InputRadio,{label:"全部",checked:"1"==this.submitDate.delivery_channel,name:"delivery_channel",value:"1"}),c.createElement(p.InputRadio,{label:"微信",checked:"2"==this.submitDate.delivery_channel,name:"delivery_channel",value:"2"}),c.createElement(p.InputRadio,{label:"APP",checked:"3"==this.submitDate.delivery_channel,name:"delivery_channel",value:"3"}))),c.createElement(p.FormItems,{label:"兴趣爱好"},c.createElement(p.CheckGroup,{options:[{label:"篮球",value:"1"},{label:"足球",value:"2"}],value:this.submitDate.Interest,onChange:function(t){return e.valueInterestChange("Interest",t)}})),c.createElement(p.FormItems,{label:"是否同意协议"},c.createElement(p.InputCheckbox,{label:"你必须阅读并同意",name:"circle",checked:!0,ref:function(t){return e.checkedValue=t}})),c.createElement(p.FormItems,null,c.createElement(p.Buttons,{type:"danger",display:"block",onClick:function(){return e.sublimeButton()}},"登录"))))))}},{key:"componentDidMount",value:function(){var e=this.props,t=(e.FormVerifierReducer,e.dispatch);t((0,y.GetDataAction)()),t((0,d.changeActiveAction)())}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.FormVerifierReducer.delivery_channel;this.setState({type:t})}}]),t}(m["default"]),R=function(e){return{FormVerifierReducer:e.FormVerifierReducer}},I=(0,f.connect)(R)(E),H=document.getElementById("example");s.render(c.createElement(f.Provider,{store:C},c.createElement(I,null)),H)}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var a=n(4);a(e,n(1))&&(t=!0);var r=t;r&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to Form_data_backfillContainer.tsx: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(6)(e))},9:function(e,t,n){(function(e){!function(){var t=n(5),a=n(3),r=n(2),o=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return a.getRootInstances(r)},o)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(1),l=a(c),s=n(7),f=e(s),p=n(20),d=e(p),h=function(e){function t(e){r(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e)),a=d["default"].get("cw_auth");return a||(alert("请求超时,请重新登录"),f["default"].goPush("login")),n}return u(t,e),i(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}}]),t}(l.Component);t["default"]=h}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var a=n(4);a(e,n(1))&&(t=!0);var r=t;r&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to BaseContainer.tsx: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(6)(e))},10:function(e,t,n){(function(e){!function(){var t=n(5),a=n(3),r=n(2),o=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return a.getRootInstances(r)},o)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function a(){var e=arguments.length<=0||void 0===arguments[0]?i:arguments[0],t=arguments[1];switch(t.type){case r.GET_AUTH:return u["default"].assign({},e,t.state);default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var r=n(23),o=n(7),u=e(o),i={LOGIN_ID:""}}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var a=n(4);a(e,n(1))&&(t=!0);var r=t;r&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to HeaderReducer.ts: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(6)(e))},11:function(e,t,n){(function(e){!function(){var t=n(5),a=n(3),r=n(2),o=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return a.getRootInstances(r)},o)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function a(){var e=arguments.length<=0||void 0===arguments[0]?i:arguments[0],t=arguments[1];switch(t.type){case r.BASE_MENU:return u["default"].assign({},e,t.state);case r.SWITCH_MENU:return u["default"].assign({},e,{menuSwitch:t.menuSwitch});case r.CHANGE_ACTIVE:return u["default"].assign({},e,{active:t.active});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var r=n(8),o=n(7),u=e(o),i={active:{parent:-1,child:-1},menuSwitch:!0,menuList:[]}}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var a=n(4);a(e,n(1))&&(t=!0);var r=t;r&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to MenuReducer.ts: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(6)(e))},12:function(e,t,n){(function(e){!function(){var t=n(5),a=n(3),r=n(2),o=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return a.getRootInstances(r)},o)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function a(e){if(d)return d;var t=c["default"].assign(e,{HeaderReducer:s["default"],MenuReducers:p["default"]}),n=(0,r.combineReducers)(t);return d=(0,r.createStore)(n,(0,r.applyMiddleware)(u["default"]))}Object.defineProperty(t,"__esModule",{value:!0}),t.BaseStore=a;var r=n(24),o=n(13),u=e(o),i=n(7),c=e(i),l=n(10),s=e(l),f=n(11),p=e(f),d=void 0}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var a=n(4);a(e,n(1))&&(t=!0);var r=t;r&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to BaseStore.ts: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(6)(e))},13:function(e,t){"use strict";function n(e){return function(t){var n=t.dispatch,a=t.getState;return function(t){return function(r){return"function"==typeof r?r(n,a,e):t(r)}}}}t.__esModule=!0;var a=n();a.withExtraArgument=n,t["default"]=a},38:function(e,t,n){(function(e){!function(){var t=n(5),a=n(3),r=n(2),o=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return a.getRootInstances(r)},o)}();try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={require:{test:function(e,t){return!t||!!e&&e.toString().trim().length>0},tip:"不能为空"},password:{test:function(e,t){return!t||!!e&&e.toString().trim().length>0},tip:"不能为空"},minLength:{test:function(e,t){return e&&e.toString().trim().length>=t},tip:"长度不能小于{value}位"},maxLength:{test:function(e,t){return e&&e.toString().trim().length<t},tip:"长度不能大于{value}位"},number:{test:function(e){return/^\d+$/.test(e.toString().trim())},tip:"只能为数字"},mobile:{test:function(e){return e&&/^((1[378][0-9]{9})|(15[89][0-9]{8}))$/.test(e.toString().trim())},tip:"手机号码格式不正确"},email:{test:function(e){return e&&/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e.toString().trim())},tip:"格式不对"},select:{test:function(e,t){return e!=t},tip:"不能为空"},group:{test:function(e,t){return parseInt(e.length)+1>t},tip:"选择不能小于{value}个"},bank:{test:function(e){return e&&/^\d{16}|\d{19}$/.test(e.toString().trim())},tip:"格式不对"}},n=function(t,n,a){if("test"===t)return!(a.test&&!a.test(n))||a.tip||"fail";var r=e[t];if(r&&r.test){var o=r.test(n,a);if(!o)return r.tip.replace("{value}",a)}return!0},a=function(e,t){var a=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],r=[];for(var o in t){var u=t[o];for(var i in u){var c=u[i],l=n(i,e[o],c);if("string"==typeof l){var s=u.name+l;if(s={name:o,tips:s},a)return[s];r.push(s)}}}return r},r={verifyConfig:a,verify:n};t["default"]=r}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var a=n(4);a(e,n(1))&&(t=!0);var r=t;r&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to Verifier.ts: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(6)(e))},163:function(e,t,n){(function(e){!function(){var t=n(5),a=n(3),r=n(2),o=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return a.getRootInstances(r)},o)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function a(){var e=arguments.length<=0||void 0===arguments[0]?i:arguments[0],t=arguments[1];switch(t.type){case u:return o["default"].assign({},e,{submitDate:t.data});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ChangeDataAction=t.GetDataAction=void 0,t.FormVerifierReducer=a;var r=n(7),o=e(r),u="GET_FORM",i=(t.GetDataAction=function(){return function(e,t){}},t.ChangeDataAction=function(e){},{submitDate:{accout:"我是默认默认",password:"",password_repeat:"",city:"-1",delivery_channel:"-1",Interest:[],phone:"",email:"",bank:""}})}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var a=n(4);a(e,n(1))&&(t=!0);var r=t;r&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to FormVerifierReducer.ts: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(6)(e))}});