module.exports=function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(1),r=i(o),s=n(2),a=i(s),c=novi.react.React,l={name:"novi-plugin-icon-manager",title:"Novi Icon",description:"Novi Plugin for change icons",version:"1.0.0",dependencies:{novi:"0.8.5"},defaults:{querySelector:".novi-icon"},ui:{editor:[r.default],settings:c.createElement(a.default,null)}};novi.plugins.register(l)},function(e,t){"use strict";function n(e){novi.iconManager.choose({onSubmit:i.bind(this,e),element:e})}function i(e,t,n){for(var i=e.getAttribute("class").split(" "),o=t.split(" "),r=0;r<=i.length-1;r++)for(var s=0;s<=o.length-1;s++)i[r]===o[s]&&i.splice(r,1);i=i.join(" "),i+=" "+n,novi.element.setAttribute(e,"class",i),e.setAttribute("class",i)}Object.defineProperty(t,"__esModule",{value:!0});var o=novi.react.React,r=novi.ui.icon,s=novi.ui.icons,a=(novi.types,{trigger:o.createElement(r,null,s.ICON_ICONS_2),tooltip:"Replace Icon",closeIcon:"submit",title:"Replace icon",onTriggerClick:n});t.default=a},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=novi.react.React,a=novi.react.Component,c=novi.ui.input,l=novi.ui.button,u=function(e){function t(e){n(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.state={settings:e.settings},o.saveSettings=o.saveSettings.bind(o),o.onChange=o.onChange.bind(o),o}return o(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({settings:e.settings})}},{key:"render",value:function(){return s.createElement("div",null,s.createElement("span",{style:{letterSpacing:"0,0462em"}},"Icon Plugin"),s.createElement("div",{style:{fontSize:13,color:"#6E778A",marginTop:21}},"Apply this plugin to elements which are matching selector:"),s.createElement(c,{style:{marginTop:10,width:340},value:this.state.settings.querySelector,onChange:this.onChange}),s.createElement("div",{style:{marginTop:30}},s.createElement(l,{type:"primary",messages:{textContent:"Save Settings"},onClick:this.saveSettings})))}},{key:"onChange",value:function(e){var t=e.target.value;this.setState({settings:{querySelector:t}})}},{key:"saveSettings",value:function(){novi.plugins.settings.update("novi-plugin-icon-manager",this.state.settings)}}]),t}(a);t.default=u}]);