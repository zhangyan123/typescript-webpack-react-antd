webpackJsonp([19],[function(e,t,n){(function(e){!function(){var t=n(5),o=n(3),a=n(2),r=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return o.getRootInstances(a)},r)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function t(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),l=t(c),i=n(17),s=t(i),f=n(21),p=n(16),d=n(8),y=n(9),m=e(y),h=n(12),v=(0,h.BaseStore)({}),E={marginBottom:"10px"},b=function(e){function t(e){return o(this,t),a(this,Object.getPrototypeOf(t).call(this,e))}return r(t,e),u(t,[{key:"handleButton",value:function(){alert("a")}},{key:"render",value:function(){var e=this;return console.log("a"),l.createElement(p.AppBody,null,l.createElement(p.Panel,{title:"按钮面板"},l.createElement(p.Buttons,null,"默认default"),l.createElement(p.Buttons,{type:"primary",onClick:this.handleButton},"首选primary"),l.createElement(p.Buttons,{type:"success"},"成功success"),l.createElement(p.Buttons,{type:"danger"},"危险danger"),l.createElement(p.Buttons,{type:"info"},"一般info"),l.createElement(p.Buttons,{type:"warning"},"警告warning"),l.createElement(p.Buttons,{type:"link"},"链接link")),l.createElement(p.Panel,{title:"按钮面板-禁止"},l.createElement(p.Buttons,{disabled:!0},"默认default"),l.createElement(p.Buttons,{type:"primary",disabled:!0,onClick:function(){return e.handleButton}},"首选primary"),l.createElement(p.Buttons,{type:"success",disabled:!0},"成功success"),l.createElement(p.Buttons,{type:"danger",disabled:!0},"危险danger"),l.createElement(p.Buttons,{type:"info",disabled:!0},"一般info"),l.createElement(p.Buttons,{type:"warning",disabled:!0},"警告warning")),l.createElement(p.Panel,{title:"按钮尺寸面板"},l.createElement(p.Buttons,{type:"primary",size:"large"},"大号按钮"),l.createElement(p.Buttons,{type:"primary"},"中号按钮(默认)"),l.createElement(p.Buttons,{type:"primary",size:"small"},"小号按钮")),l.createElement(p.Panel,{title:"按钮块尺寸面板"},l.createElement(p.Buttons,{style:E,display:"block"}," 默认default"),l.createElement(p.Buttons,{style:E,type:"primary",display:"block",onClick:function(){return e.handleButton()}},"首选primary"),l.createElement(p.Buttons,{style:E,type:"success",display:"block"},"成功success"),l.createElement(p.Buttons,{style:E,type:"danger",display:"block"},"危险danger"),l.createElement(p.Buttons,{style:E,type:"info",display:"block"},"一般info"),l.createElement(p.Buttons,{style:E,type:"warning",display:"block"},"警告warning")),l.createElement(p.Panel,{title:"图标-按钮面板"},l.createElement(p.Buttons,null,l.createElement(p.Icon,{type:"cloudupload"})," 上传文件"),l.createElement(p.Buttons,{type:"danger"},l.createElement(p.Icon,{type:"delete"})," 删除"),l.createElement(p.Buttons,{type:"success"},l.createElement(p.Icon,{type:"eyeo"})," 预览"),l.createElement(p.Buttons,{type:"primary"},l.createElement(p.Icon,{type:"edit"})," 修改"),l.createElement(p.Buttons,{type:"primary"},l.createElement(p.Icon,{type:"pluscircle"})," 添加"),l.createElement(p.Buttons,{type:"primary"},l.createElement(p.Icon,{type:"search"})," 搜索"),l.createElement(p.Buttons,{type:"warning"},l.createElement(p.Icon,{type:"like"})," 89")))}},{key:"componentDidMount",value:function(){var e=this.props,t=(e.MenuReducers,e.dispatch);t((0,d.changeActiveAction)())}},{key:"componentWillUnmount",value:function(){}}]),t}(m["default"]),g=function(e){return{MenuReducers:e.MenuReducers}},k=(0,f.connect)(g)(b),B=document.getElementById("example");s.render(l.createElement(f.Provider,{store:v},l.createElement(k,null)),B)}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var o=n(4);o(e,n(1))&&(t=!0);var a=t;a&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to ButtonContainer.tsx: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(6)(e))},,,,,,,,,function(e,t,n){(function(e){!function(){var t=n(5),o=n(3),a=n(2),r=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return o.getRootInstances(a)},r)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),i=o(l),s=n(7),f=e(s),p=n(20),d=e(p),y=function(e){function t(e){a(this,t);var n=r(this,Object.getPrototypeOf(t).call(this,e)),o=d["default"].get("cw_auth");return o||(alert("请求超时,请重新登录"),f["default"].goPush("login")),n}return u(t,e),c(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}}]),t}(i.Component);t["default"]=y}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var o=n(4);o(e,n(1))&&(t=!0);var a=t;a&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to BaseContainer.tsx: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(6)(e))},function(e,t,n){(function(e){!function(){var t=n(5),o=n(3),a=n(2),r=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return o.getRootInstances(a)},r)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=arguments.length<=0||void 0===arguments[0]?c:arguments[0],t=arguments[1];switch(t.type){case a.GET_AUTH:return u["default"].assign({},e,t.state);default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var a=n(23),r=n(7),u=e(r),c={LOGIN_ID:""}}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var o=n(4);o(e,n(1))&&(t=!0);var a=t;a&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to HeaderReducer.ts: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(6)(e))},function(e,t,n){(function(e){!function(){var t=n(5),o=n(3),a=n(2),r=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return o.getRootInstances(a)},r)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=arguments.length<=0||void 0===arguments[0]?c:arguments[0],t=arguments[1];switch(t.type){case a.BASE_MENU:return u["default"].assign({},e,t.state);case a.SWITCH_MENU:return u["default"].assign({},e,{menuSwitch:t.menuSwitch});case a.CHANGE_ACTIVE:return u["default"].assign({},e,{active:t.active});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var a=n(8),r=n(7),u=e(r),c={active:{parent:-1,child:-1},menuSwitch:!0,menuList:[]}}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var o=n(4);o(e,n(1))&&(t=!0);var a=t;a&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to MenuReducer.ts: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(6)(e))},function(e,t,n){(function(e){!function(){var t=n(5),o=n(3),a=n(2),r=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return o.getRootInstances(a)},r)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(d)return d;var t=l["default"].assign(e,{HeaderReducer:s["default"],MenuReducers:p["default"]}),n=(0,a.combineReducers)(t);return d=(0,a.createStore)(n,(0,a.applyMiddleware)(u["default"]))}Object.defineProperty(t,"__esModule",{value:!0}),t.BaseStore=o;var a=n(24),r=n(13),u=e(r),c=n(7),l=e(c),i=n(10),s=e(i),f=n(11),p=e(f),d=void 0}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var o=n(4);o(e,n(1))&&(t=!0);var a=t;a&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to BaseStore.ts: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(6)(e))},function(e,t){"use strict";function n(e){return function(t){var n=t.dispatch,o=t.getState;return function(t){return function(a){return"function"==typeof a?a(n,o,e):t(a)}}}}t.__esModule=!0;var o=n();o.withExtraArgument=n,t["default"]=o}]);