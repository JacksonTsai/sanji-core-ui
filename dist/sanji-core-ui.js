!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("angular"),require("angular-cookies"),require("angular-cron-jobs"),require("angular-file-saver"),require("angular-filter"),require("angular-formly"),require("angular-material"),require("angular-material-data-table"),require("angular-material-icons"),require("angular-messages"),require("angular-moment"),require("angular-sanitize"),require("angular-sanji-window"),require("angular-sparklines"),require("angular-storage"),require("angular-translate"),require("angular-translate-storage-cookie"),require("api-check"),require("jquery"),require("jquery-sparkline"),require("moment"),require("ngletteravatar"),require("oclazyload"),require("offline-js"),require("path-to-regexp"),require("sanji-redux-ui"),require("sanji-socket-ui"),require("sanji-utils-ui"),require("webfontloader")):"function"==typeof define&&define.amd?define(["angular","angular-cookies","angular-cron-jobs","angular-file-saver","angular-filter","angular-formly","angular-material","angular-material-data-table","angular-material-icons","angular-messages","angular-moment","angular-sanitize","angular-sanji-window","angular-sparklines","angular-storage","angular-translate","angular-translate-storage-cookie","api-check","jquery","jquery-sparkline","moment","ngletteravatar","oclazyload","offline-js","path-to-regexp","sanji-redux-ui","sanji-socket-ui","sanji-utils-ui","webfontloader"],t):"object"==typeof exports?exports.sjCore=t(require("angular"),require("angular-cookies"),require("angular-cron-jobs"),require("angular-file-saver"),require("angular-filter"),require("angular-formly"),require("angular-material"),require("angular-material-data-table"),require("angular-material-icons"),require("angular-messages"),require("angular-moment"),require("angular-sanitize"),require("angular-sanji-window"),require("angular-sparklines"),require("angular-storage"),require("angular-translate"),require("angular-translate-storage-cookie"),require("api-check"),require("jquery"),require("jquery-sparkline"),require("moment"),require("ngletteravatar"),require("oclazyload"),require("offline-js"),require("path-to-regexp"),require("sanji-redux-ui"),require("sanji-socket-ui"),require("sanji-utils-ui"),require("webfontloader")):e.sjCore=t(e.angular,e["angular-cookies"],e["angular-cron-jobs"],e["angular-file-saver"],e["angular-filter"],e["angular-formly"],e["angular-material"],e["angular-material-data-table"],e["angular-material-icons"],e["angular-messages"],e["angular-moment"],e["angular-sanitize"],e["angular-sanji-window"],e["angular-sparklines"],e["angular-storage"],e["angular-translate"],e["angular-translate-storage-cookie"],e["api-check"],e.jquery,e["jquery-sparkline"],e.moment,e.ngletteravatar,e.oclazyload,e["offline-js"],e["path-to-regexp"],e["sanji-redux-ui"],e["sanji-socket-ui"],e["sanji-utils-ui"],e.webfontloader)}(this,function(e,t,n,a,r,i,o,l,u,s,c,d,m,p,f,g,_,R,O,E,M,v,L,b,h,A,y,S,F){return function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=44)}([function(e,t){/*! angular-breadcrumb - v0.5.0
* http://ncuillery.github.io/angular-breadcrumb
* Copyright (c) 2016 Nicolas Cuillery; Licensed MIT */
!function(e,t,n){"use strict";function a(e,n){return t.equals(e.length,n.length)?e>n:e.length>n.length}function r(e){var t=e.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/);if(!t||4!==t.length)throw new Error("Invalid state ref '"+e+"'");return{state:t[1],paramExpr:t[3]||null}}function i(e,t,a,r){var i=c[e];i!==n&&i(),i=t.$on(a,r),c[e]=i}function o(){var e={prefixStateName:null,template:"bootstrap3",templateUrl:null,templateLast:"default",templateLastUrl:null,includeAbstract:!1};this.setOptions=function(n){t.extend(e,n)},this.$get=["$state","$stateParams","$rootScope",function(t,o,l){var u=l;i("$Breadcrumb.$viewContentLoaded",l,"$viewContentLoaded",function(e){!e.targetScope.ncyBreadcrumbIgnore&&a(e.targetScope.$id,u.$id)&&(u=e.targetScope)});var s=function(e){var t=e.parent||(/^(.+)\.[^.]+$/.exec(e.name)||[])[1],n="object"==typeof t;return n?t.name:t},c=function(n,a){for(var i,l,s=r(a),c=!1,d=!1,m=0,p=n.length;m<p;m+=1)if(n[m].name===s.state)return;i=t.get(s.state),i.ncyBreadcrumb&&(i.ncyBreadcrumb.force&&(c=!0),i.ncyBreadcrumb.skip&&(d=!0)),i.abstract&&!e.includeAbstract&&!c||d||(s.paramExpr&&(l=u.$eval(s.paramExpr)),i.ncyBreadcrumbLink=t.href(s.state,l||o||{}),i.ncyBreadcrumbStateRef=a,n.unshift(i))},d=function(e){var n=r(e),a=t.get(n.state);if(a.ncyBreadcrumb&&a.ncyBreadcrumb.parent){var i="function"==typeof a.ncyBreadcrumb.parent,o=i?a.ncyBreadcrumb.parent(u):a.ncyBreadcrumb.parent;if(o)return o}return s(a)};return{getTemplate:function(t){return e.templateUrl?null:t[e.template]?t[e.template]:e.template},getTemplateUrl:function(){return e.templateUrl},getTemplateLast:function(t){return e.templateLastUrl?null:t[e.templateLast]?t[e.templateLast]:e.templateLast},getTemplateLastUrl:function(){return e.templateLastUrl},getStatesChain:function(n){for(var a=[],r=t.$current.self.name;r;r=d(r))if(c(a,r),n&&a.length)return a;return e.prefixStateName&&c(a,e.prefixStateName),a},getLastStep:function(){var e=this.getStatesChain(!0);return e.length?e[0]:n},$getLastViewScope:function(){return u}}}]}function l(e,n,a){var r={bootstrap2:'<ul class="breadcrumb"><li ng-repeat="step in steps" ng-switch="$last || !!step.abstract" ng-class="{active: $last}"><a ng-switch-when="false" href="{{step.ncyBreadcrumbLink}}">{{step.ncyBreadcrumbLabel}}</a><span ng-switch-when="true">{{step.ncyBreadcrumbLabel}}</span><span class="divider" ng-hide="$last">/</span></li></ul>',bootstrap3:'<ol class="breadcrumb"><li ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract"><a ng-switch-when="false" href="{{step.ncyBreadcrumbLink}}">{{step.ncyBreadcrumbLabel}}</a><span ng-switch-when="true">{{step.ncyBreadcrumbLabel}}</span></li></ol>'};return{restrict:"AE",replace:!0,scope:{},template:n.getTemplate(r),templateUrl:n.getTemplateUrl(),link:{post:function(r){var o=[],l=function(){p(o),o=[];var a=n.$getLastViewScope();r.steps=n.getStatesChain(),t.forEach(r.steps,function(t){if(t.ncyBreadcrumb&&t.ncyBreadcrumb.label){var n=e(t.ncyBreadcrumb.label);t.ncyBreadcrumbLabel=n(a),m(o,n,a,t)}else t.ncyBreadcrumbLabel=t.name})};i("BreadcrumbDirective.$viewContentLoaded",a,"$viewContentLoaded",function(e){e.targetScope.ncyBreadcrumbIgnore||l()}),l()}}}}function u(e,t,n){var a={default:"{{ncyBreadcrumbLabel}}"};return{restrict:"A",scope:{},template:t.getTemplateLast(a),templateUrl:t.getTemplateLastUrl(),compile:function(a,r){var o=a.attr(r.$attr.ncyBreadcrumbLast);return o&&a.html(o),{post:function(a){var r=[],o=function(){p(r),r=[];var n=t.$getLastViewScope(),i=t.getLastStep();if(i)if(a.ncyBreadcrumbLink=i.ncyBreadcrumbLink,i.ncyBreadcrumb&&i.ncyBreadcrumb.label){var o=e(i.ncyBreadcrumb.label);a.ncyBreadcrumbLabel=o(n),m(r,o,n,a)}else a.ncyBreadcrumbLabel=i.name};i("BreadcrumbLastDirective.$viewContentLoaded",n,"$viewContentLoaded",function(e){e.targetScope.ncyBreadcrumbIgnore||o()}),o()}}}}}function s(e,n,a){return{restrict:"A",scope:{},template:"{{ncyBreadcrumbChain}}",compile:function(r,o){var l=r.attr(o.$attr.ncyBreadcrumbText);l&&r.html(l);var u=r.attr(o.$attr.ncyBreadcrumbTextSeparator)||" / ";return{post:function(r){var o=[],l=function(e,n,a){t.forEach(d(n),function(t){var n=a.$watch(t,function(e,t){e!==t&&s()});e.push(n)})},s=function(){p(o),o=[];var a=n.$getLastViewScope(),i=n.getStatesChain(),s=[];t.forEach(i,function(t){if(t.ncyBreadcrumb&&t.ncyBreadcrumb.label){var n=e(t.ncyBreadcrumb.label);s.push(n(a)),l(o,n,a)}else s.push(t.name)}),r.ncyBreadcrumbChain=s.join(u)};i("BreadcrumbTextDirective.$viewContentLoaded",a,"$viewContentLoaded",function(e){e.targetScope.ncyBreadcrumbIgnore||s()}),s()}}}}}var c={},d=function(e){if(e.expressions)return e.expressions;var n=[];return t.forEach(e.parts,function(e){t.isFunction(e)&&n.push(e.exp)}),n},m=function(e,n,a,r){t.forEach(d(n),function(t){var i=a.$watch(t,function(){r.ncyBreadcrumbLabel=n(a)});e.push(i)})},p=function(e){t.forEach(e,function(e){e()})};l.$inject=["$interpolate","$breadcrumb","$rootScope"],u.$inject=["$interpolate","$breadcrumb","$rootScope"],s.$inject=["$interpolate","$breadcrumb","$rootScope"],t.module("ncy-angular-breadcrumb",["ui.router.state"]).provider("$breadcrumb",o).directive("ncyBreadcrumb",l).directive("ncyBreadcrumbLast",u).directive("ncyBreadcrumbText",s)}(window,window.angular)},function(e,t){},function(e,t,n){"use strict";function a(e){return/^[+-]?\d+(\.\d+)?$/.test(e)}function r(e){return/^([0-9A-F]{2}[:]){5}([0-9A-F]{2})$/.test(e)}function i(e){return/^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(e)}function o(e){return/^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/.test(e)}function l(e){return/^[A-Za-z0-9_-]{3,255}$/.test(e)}function u(e){return/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/.test(e)}function s(e){return/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/.test(e)}function c(e){return/^(?=.*\d)(?=.*[a-zA-Z]).{6,100}$/.test(e)}function d(e){return"0.0.0.0"!==e&&(!!/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(e)&&!/2(?:2[4-9]|3\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d?|0)){3}/.test(e))}function m(e,t){var n=void 0,a=t.length;for(n=0;n<a;n++)e.setType(t[n])}function p(e,t){var n=void 0,a=t.length;for(n=0;n<a;n++)e.setWrapper(t[n])}Object.defineProperty(t,"__esModule",{value:!0});var f=[{name:"datetimepicker",template:'<div layout>\n                <md-datepicker style="margin-top: 15px;"\n                  ng-model="to.date"\n                  md-placeholder="{{to.datePlaceholder | translate}}"\n                  ng-required="to.required"></md-datepicker>\n                <md-input-container flex>\n                  <label translate="{{to.hourLabel}}"></label>\n                  <input type="number" ng-model="to.hour" ng-required="to.required" min="0" max="23">\n                </md-input-container>\n                <md-input-container flex>\n                  <label translate="{{to.minLabel}}"></label>\n                  <input type="number" ng-model="to.minute" ng-required="to.required" min="0" max="59">\n                </md-input-container>\n              </div>',controller:["$scope",function(e){"ngInject";var t=e.model[e.options.key]?new Date(e.model[e.options.key]):new Date;e.options.templateOptions.date=t,e.options.templateOptions.hour=t.getHours(),e.options.templateOptions.minute=t.getMinutes(),e.$watchGroup(["options.templateOptions.date","options.templateOptions.hour","options.templateOptions.minute"],function(e,t,n){var a=e[0];a&&(a.setHours(e[1]),a.setMinutes(e[2]),n.model[n.options.key]=a)})}],defaultOptions:{templateOptions:{datePlaceholder:"FORM_PLACEHOLDER_SELECT_DATE",hourLabel:"FORM_LABEL_HOUR",minLabel:"FORM_LABEL_MINUTE"}}},{name:"textarea",template:'<textarea ng-model="model[options.key]"\n                rows="{{to.rows}}" columns="{{to.columns}}"></textarea>',defaultOptions:{templateOptions:{label:"FORM_LABEL_TEXTAREA"}}},{name:"switch",template:'<md-switch class="md-primary"\n                aria-label="Switch"\n                ng-model="model[options.key]">\n                  <span translate="{{to.label}}"></span>\n              </md-switch>',defaultOptions:{templateOptions:{label:"FORM_LABEL_SWITCH"}}},{name:"url",template:'<input type="url" ng-model="model[options.key]">',defaultOptions:{templateOptions:{label:"FORM_LABEL_URL"},validation:{messages:{url:'"FORM_URL_ERROR_MSG"'}}}},{name:"range",template:'<md-slider\n              style="padding: 0 20px;"\n              ng-model="model[options.key]"\n              ng-min="to.min"\n              ng-max="to.max"\n              aria-label="slider"\n              class="md-primary"></md-slider>',defaultOptions:{templateOptions:{label:"FORM_LABEL_RANGE"}}},{name:"input",template:'<input ng-model="model[options.key]" ng-minlength="to.minlength" ng-maxlength="to.maxlength">',defaultOptions:{templateOptions:{label:""}}},{name:"file",template:'<div layout>\n                <md-input-container ng-if="model[options.key] && !$file.name" style="width: 100%">\n                  <label translate="{{to.label}}"></label>\n                  <input style="color: rgba(0,0,0,0.87);" ng-model="model[options.key]" readonly ng-required="to.required">\n                </md-input-container>\n                <md-input-container ng-if="!model[options.key] || $file.name" style="width: 100%">\n                  <label translate="{{to.label}}"></label>\n                  <input style="color: rgba(0,0,0,0.87);" ng-model="$file.name" readonly ng-required="to.required">\n                </md-input-container>\n                <md-input-container style="margin-top: 6px;">\n                  <md-button class="md-raised" ngf-select="fileSelect($file, options.key)" ng-model="$file"\n                   ngf-accept="{{to.accept}}" ngf-max-size="{{to.maxSize}}" aria-label="select file">\n                    <span translate="FORM_SELECT_BUTTON"></span>\n                  </md-button>\n                </md-input-container>\n              </div>',controller:["$scope",function(e){"ngInject";e.fileSelect=function(t,n){if(t)if(void 0===e.formOptions.files)e.formOptions.files=[],e.formOptions.files.push({key:n,file:t});else{var a=e.formOptions.files.findIndex(function(e){return e.key===n});-1===a?e.formOptions.files.push({key:n,file:t}):e.formOptions.files[a].file=t}}}],defaultOptions:{templateOptions:{label:"FORM_LABEL_FILE"}}},{name:"date",template:'<input type="date" ng-model="model[options.key]" ng-min="to.min" ng-max="to.max">',defaultOptions:{templateOptions:{label:"FORM_LABEL_DATE"}}},{name:"datetime",template:'<input type="datetime-local" ng-model="model[options.key]" ng-min="to.min" ng-max="to.max">',defaultOptions:{templateOptions:{label:"FORM_LABEL_DATE_TIME"}}},{name:"email",template:'<input type="email" ng-model="model[options.key]">',defaultOptions:{templateOptions:{label:"FORM_LABEL_EMAIL"},validation:{messages:{email:'"FORM_EMAIL_ERROR_MSG"'}}}},{name:"number",template:'<input type="number" ng-model="model[options.key]" min="{{to.min}}" max="{{to.max}}">',defaultOptions:{templateOptions:{label:"FORM_LABEL_NUMBER",min:-65535,max:65535}}},{name:"radio",template:'<md-radio-group ng-model="model[options.key]">\n                  <md-radio-button class="md-primary" aria-label="{{item.label}}"\n                  ng-repeat="item in to.options track by $index"\n                  ng-value="item.value">\n                    <span translate="{{item.label}}"></span>\n                  </md-radio-button>\n              </md-radio-group>',defaultOptions:{templateOptions:{options:[{label:"FORM_LABEL_RADIO_OPTION",value:""}]}}},{name:"datepicker",template:'<md-datepicker\n                ng-model="model[options.key]"\n                md-placeholder="{{to.placeholder}}"\n                md-min-date="to.min"\n                md-max-date="to.max"\n                ng-required="to.required"></md-datepicker>'},{name:"select",template:'<md-option\n                ng-repeat="item in to.options track by $index"\n                ng-value="item.value || item">\n                  <span translate="{{item.label || item}}"></span>\n                </md-option>',defaultOptions:{templateOptions:{options:[{label:"FORM_LABEL_SELECT_OPTION",value:""}]}}},{name:"checkbox",template:'<md-checkbox ng-model="model[options.key]" aria-label="{{::to.label}}">\n                <span translate="{{to.label}}"></span>\n              </md-checkbox>',defaultOptions:{templateOptions:{label:"FORM_LABEL_CHECKBOX"}}},{name:"ip",defaultOptions:{templateOptions:{label:"FORM_LABEL_IP",placeholder:"127.0.0.1"},validators:{ip:{expression:function(e,t){var n=t||e;return!n||d(n)},message:'"FORM_IP_ERROR_MSG"'}}}},{name:"domain",defaultOptions:{templateOptions:{label:"FORM_LABEL_HOST",placeholder:"127.0.0.1"},validators:{domain:{expression:function(e,t){var n=t||e;return!n||d(n)||o(n)},message:'"FORM_HOST_ERROR_MSG"'}}}},{name:"latitude",defaultOptions:{templateOptions:{label:"FORM_LABEL_LATITUDE"},validators:{latitude:{expression:function(e,t){var n=t||e;return!n||u(n)},message:'"FORM_LATITUDE_ERROR_MSG"'}}}},{name:"longitude",defaultOptions:{templateOptions:{label:"FORM_LABEL_LONGITUDE"},validators:{longitude:{expression:function(e,t){var n=t||e;return!n||s(n)},message:'"FORM_LONITUDE_ERROR_MSG"'}}}},{name:"password",template:'<input type="password" ng-model="model[options.key]">',defaultOptions:{templateOptions:{label:"FORM_LABEL_PASSWORD"},validators:{password:{expression:function(e,t){var n=t||e;return!n||c(n)},message:'"FORM_PASSWORD_ERROR_MSG"'}}}},{name:"aliasName",defaultOptions:{templateOptions:{label:"FORM_LABEL_NAME"},validators:{aliasName:{expression:function(e,t){var n=t||e;return!n||l(n)},message:'"FORM_ALIASNAME_ERROR_MSG"'}}}},{name:"hostname",defaultOptions:{templateOptions:{label:"FORM_LABEL_HOSTNAME"},validators:{hostname:{expression:function(e,t){var n=t||e;return!n||o(n)},message:'"FORM_HOSTNAME_ERROR_MSG"'}}}},{name:"port",defaultOptions:{templateOptions:{label:"FORM_LABEL_PORT"},validators:{port:{expression:function(e,t){var n=t||e;return!n||i(n)},message:'"FORM_PORT_ERROR_MSG"'}}}},{name:"mac",defaultOptions:{templateOptions:{label:"FORM_LABEL_MAC"},validators:{mac:{expression:function(e,t){var n=t||e;return!n||r(n)},message:'"FORM_MAC_ERROR_MSG"'}}}},{name:"float",template:'<input type="number" step="any" ng-model="model[options.key]" min="{{to.min}}" max="{{to.max}}">',defaultOptions:{templateOptions:{label:"FORM_LABEL_FLOAT",min:-65535,max:65535},validators:{float:{expression:function(e,t){var n=t||e;return!n||a(n)},message:'"FORM_FLOAT_ERROR_MSG"'}}}},{name:"matchField",defaultOptions:function(e){return{validators:{fieldMatch:{expression:function(t,n,a){var r=n||t,i=a.model;return r===i[e.data.fieldToMatch]},message:e.data.matchFieldMessage||'"Must match!"'}}}}}],g=[{name:"mdLabel",types:["input","number","date","datetime","email","password","range","url","float","textarea"],template:'<label translate="{{to.label}}"></label>\n              <formly-transclude></formly-transclude>'},{name:"mdSelect",types:["select"],template:'<md-input-container class="md-block">\n                <label translate="{{to.label}}"></label>\n                <md-select ng-model="model[options.key]" aria-label="select"\n                  ng-required="to.required" ng-disabled="to.disabled">\n                  <formly-transclude></formly-transclude>\n                </md-select>\n                <div ng-messages="fc.$error" ng-show="showError">\n                  <div ng-repeat="(name, message) in options.validation.messages"\n                  ng-message="{{name}}">\n                    {{message(fc.$viewValue, fc.$modelValue, this) | translate:options}}\n                  </div>\n                </div>\n              </md-input-container>'},{name:"mdInputContainer",types:["input","number","date","datetime","email","password","file","url","float","textarea"],template:'<md-input-container class="md-block">\n                <formly-transclude></formly-transclude>\n                <div ng-messages="fc.$error" ng-show="showError">\n                  <div ng-repeat="(name, message) in options.validation.messages"\n                  ng-message="{{name}}">\n                    {{message(fc.$viewValue, fc.$modelValue, this) | translate:options}}\n                  </div>\n                </div>\n              </md-input-container>'}];t.default=function(e){e.config(["formlyConfigProvider",function(e){e.disableWarnings=!0,e.extras.removeChromeAutoComplete=!0,e.extras.explicitAsync=!0,e.extras.ngModelAttrsManipulatorPreferBound=!0}]),e.run(["formlyConfig","formlyValidationMessages","$filter",function(e,t,n){m(e,f),p(e,g),t.addStringMessage("required",n("translate")("FORM_REQUIRED_ERROR_MSG")),t.addTemplateOptionValueMessage("min","min",n("translate")("FORM_MIN_ERROR_MSG2"),"",n("translate")("FORM_MIN_ERROR_MSG")),t.addTemplateOptionValueMessage("max","max",n("translate")("FORM_MAX_ERROR_MSG2"),"",n("translate")("FORM_MAX_ERROR_MSG")),t.addTemplateOptionValueMessage("minlength","minlength","",n("translate")("FORM_MINLEN_ERROR_MSG2"),n("translate")("FORM_MINLEN_ERROR_MSG")),t.addTemplateOptionValueMessage("maxlength","maxlength","",n("translate")("FORM_MAXLEN_ERROR_MSG2"),n("translate")("FORM_MAXLEN_ERROR_MSG")),t.addTemplateOptionValueMessage("pattern","patternValidationMessage","","",n("translate")("FORM_PATTERN_ERROR_MSG"))}])}},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=["$cookies","$timeout","session"],o=function(){function e(){for(var t=this,n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];a(this,e),e.$inject.forEach(function(e,n){return t[e]=r[n]}),this.iframe=null}return r(e,[{key:"start",value:function(e){this.generatedIframe(this.session.get("token"),e),this.$timeout(this.removeIframe.bind(this),5e3)}},{key:"generatedIframe",value:function(e,t){this.iframe=document.createElement("iframe"),this.$cookies.put("token",e),this.iframe.src=t,this.iframe.style.display="none",document.body.appendChild(this.iframe)}},{key:"removeIframe",value:function(){this.$cookies.remove("token"),document.body.removeChild(this.iframe)}}]),e}();o.$inject=i,t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["$translateProvider","$provide",function(e,t){"ngInject";var a={key:"en",label:"English"},r={key:"zh-tw",label:"繁體中文"};t.constant("LANG_KEYS",[a,r]),e.translations(a.key,n(41)),e.translations(r.key,n(42)),e.preferredLanguage(a.key).fallbackLanguage(a.key).useCookieStorage().useSanitizeValueStrategy("escape")}]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["routerHelper",function(e){"ngInject";function t(){return[{state:"404",config:{url:"/404",templateUrl:"404.html",title:"404 Error"}}]}var n="/404";e.configureStates(t(),n)}]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["$mdThemingProvider",function(e){"ngInject";e.definePalette("moxa-material",{50:"#E6F3F3",100:"#B3DBDB",200:"#80C3C3",300:"#55AFAF",400:"#2A9B9B",500:"#008787",600:"#007676",700:"#006565",800:"#006565",900:"#006565",A100:"#006565",A200:"#006565",A400:"#006565",A700:"#006565",contrastDefaultColor:"light",contrastDarkColors:["50","100","200","300","400","A100"],contrastLightColors:void 0}),e.theme("moxa").primaryPalette("moxa-material"),e.setDefaultTheme("moxa")}]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["toastr",function(e){"ngInject";e.options.timeOut=6e3,e.options.positionClass="toast-bottom-right",e.options.progressBar=!0}]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["$httpProvider","$compileProvider","$logProvider","routerHelperProvider","exceptionHandlerProvider","storeProvider",function(e,t,n,a,r,i){"ngInject";var o={appErrorPrefix:"[webapp Error] ",appTitle:"webapp"};e.useApplyAsync(!0),t.debugInfoEnabled(!1),n.debugEnabled(!1),r.configure(o.appErrorPrefix),a.configure({docTitle:o.appTitle+": ",defaultRoute:"/"}),i.setStore("sessionStorage")}]},function(e,t){var n,a=window.angular;try{n=a.module(["ng"])}catch(e){n=a.module("ng",[])}var r='\n<div class="container">\n    <div class="text-center" style="padding-top: 10%">\n      <h1 class="text-warning">\n        <i class="fa fa-exclamation-triangle fa-lg fa-5x"></i>\n      </h1>\n      <h1 class="text-primary">404</h1>\n      <h1><small translate="404_NOT_FOUND"></small></h1>\n      <p class="lead" translate="404_MESSAGE_1"></p>\n      <p class="lead" translate="404_MESSAGE_2"></p>\n      <ul class="list-unstyled">\n        <li>1. <span translate="404_MESSAGE_3"></span></li><li>2. <span translate="404_MESSAGE_4"></span></li>\n      </ul>\n    </div>\n  </div>\n',i="404.html",o=a.element(window.document).injector();o?o.get("$templateCache").put(i,r):n.run(["$templateCache",function(e){e.put(i,r)}]),e.exports=r},function(e,t){var n,a=window.angular;try{n=a.module(["ng"])}catch(e){n=a.module("ng",[])}var r='\n<div class="breadcrumbs" layout layout-align="center center">\n    <div flex-gt-sm="80">\n      <span ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract">\n        <a ng-switch-when="false" href="{{step.ncyBreadcrumbLink}}">\n          {{step.ncyBreadcrumbLabel | translate}}\n        </a>\n        <span ng-switch-when="false">\n          >\n        </span>\n        <span ng-switch-when="true">\n          {{step.ncyBreadcrumbLabel | translate}}\n        </span>\n      </span>\n    </div>\n  </div>\n',i="breadcrumbs.tpl.html",o=a.element(window.document).injector();o?o.get("$templateCache").put(i,r):n.run(["$templateCache",function(e){e.put(i,r)}]),e.exports=r},function(e,t,n){n(43),e.exports="ngIdle"},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=a},function(e,t){e.exports=r},function(e,t){e.exports=i},function(e,t){e.exports=o},function(e,t){e.exports=l},function(e,t){e.exports=u},function(e,t){e.exports=s},function(e,t){e.exports=c},function(e,t){e.exports=d},function(e,t){e.exports=m},function(e,t){e.exports=p},function(e,t){e.exports=f},function(e,t){e.exports=g},function(e,t){e.exports=_},function(e,t){e.exports=R},function(e,t){e.exports=O},function(e,t){e.exports=E},function(e,t){e.exports=M},function(e,t){e.exports=v},function(e,t){e.exports=L},function(e,t){e.exports=b},function(e,t){e.exports=h},function(e,t){e.exports=A},function(e,t){e.exports=y},function(e,t){e.exports=S},function(e,t){e.exports=F},function(e,t){e.exports={"404_NOT_FOUND":"Not found","404_MESSAGE_1":"Sorry, but the page you were trying to view does not exist.","404_MESSAGE_2":"It looks like this was the result of either:","404_MESSAGE_3":"a mistyped address","404_MESSAGE_4":"an out-of-date link",FORM_PLACEHOLDER_SELECT_DATE:"Select Date",FORM_SELECT_BUTTON:"Select",FORM_LABEL_SWITCH:"Enable",FORM_LABEL_URL:"URL",FORM_LABEL_RANGE:"Range",FORM_LABEL_FILE:"File",FORM_LABEL_DATE:"Date",FORM_LABEL_DATE_TIME:"Date Time",FORM_LABEL_EMAIL:"Email",FORM_LABEL_NUMBER:"Number",FORM_LABEL_RADIO_OPTION:"Radio Option",FORM_LABEL_SELECT_OPTION:"Please Select",FORM_LABEL_CHECKBOX:"Checkbox Label",FORM_LABEL_FLOAT:"Float",FORM_LABEL_IP:"IP",FORM_LABEL_LATITUDE:"Latitude",FORM_LABEL_LONGITUDE:"Longitude",FORM_LABEL_PASSWORD:"Password",FORM_LABEL_NAME:"Name",FORM_LABEL_HOSTNAME:"Hostname",FORM_LABEL_PORT:"Port",FORM_LABEL_MAC:"MAC",FORM_LABEL_HOUR:"Hour",FORM_LABEL_MINUTE:"Minute",FORM_LABEL_TEXTAREA:"Textarea",FORM_LABEL_HOST:"Host",FORM_HOST_ERROR_MSG:"Invalid host format",FORM_FLOAT_ERROR_MSG:"Invalid float format",FORM_MAC_ERROR_MSG:"Invalid MAC format",FORM_PORT_ERROR_MSG:"Invalid port format",FORM_ALIASNAME_ERROR_MSG:"Allowed chars include A-Z,a-z,0-9,_,- and length must between 3 and 255.",FORM_HOSTNAME_ERROR_MSG:"Invalid hotname format",FORM_NAME_ERROR_MSG:"Invalid name format",FORM_PASSWORD_ERROR_MSG:"Allowed chars include A-Z,a-z,0-9 and length must between 6 and 100.",FORM_LONGITUDE_ERROR_MSG:"Invalid longitude format",FORM_LATITUDE_ERROR_MSG:"Invalid latitude format",FORM_IP_ERROR_MSG:"Invalid IP format",FORM_EMAIL_ERROR_MSG:"Invalid email format",FORM_URL_ERROR_MSG:"Invalid URL format",FORM_REQUIRED_ERROR_MSG:"This field is required",FORM_MINLEN_ERROR_MSG:"Too short",FORM_MINLEN_ERROR_MSG2:"is the minimum length",FORM_MAXLEN_ERROR_MSG:"Too long",FORM_MAXLEN_ERROR_MSG2:"is the maximum length",FORM_MIN_ERROR_MSG:"Too samll",FORM_MIN_ERROR_MSG2:"The min value allowed is",FORM_MAX_ERROR_MSG:"Too big",FORM_MAX_ERROR_MSG2:"The max value allowed is",FORM_PATTERN_ERROR_MSG:"Invalid input format"}},function(e,t){e.exports={"404_NOT_FOUND":"找不到","404_MESSAGE_1":"對不起，你嘗試要瀏覽的頁面不存在","404_MESSAGE_2":"無法瀏覽可能的原因如下:","404_MESSAGE_3":"網址打錯","404_MESSAGE_4":"過時的連結",FORM_PLACEHOLDER_SELECT_DATE:"選擇日期",FORM_SELECT_BUTTON:"選擇",FORM_LABEL_SWITCH:"啟用",FORM_LABEL_URL:"URL",FORM_LABEL_RANGE:"範圍",FORM_LABEL_FILE:"檔案",FORM_LABEL_DATE:"日期",FORM_LABEL_DATE_TIME:"日期時間",FORM_LABEL_EMAIL:"電子信箱",FORM_LABEL_NUMBER:"整數",FORM_LABEL_RADIO_OPTION:"單選選項",FORM_LABEL_SELECT_OPTION:"請選擇",FORM_LABEL_CHECKBOX:"檢查方塊名稱",FORM_LABEL_FLOAT:"浮點數",FORM_LABEL_IP:"網路位址",FORM_LABEL_LATITUDE:"緯度",FORM_LABEL_LONGITUDE:"經度",FORM_LABEL_PASSWORD:"密碼",FORM_LABEL_NAME:"名稱",FORM_LABEL_HOSTNAME:"主機名稱",FORM_LABEL_PORT:"埠號",FORM_LABEL_MAC:"MAC",FORM_LABEL_HOUR:"小時",FORM_LABEL_MINUTE:"分鐘",FORM_LABEL_TEXTAREA:"文字區塊",FORM_LABEL_HOST:"主機域名",FORM_HOST_ERROR_MSG:"主機域名格式錯誤",FORM_FLOAT_ERROR_MSG:"浮點數格式錯誤",FORM_MAC_ERROR_MSG:"MAC 格式錯誤",FORM_PORT_ERROR_MSG:"埠格式錯誤",FORM_ALIASNAME_ERROR_MSG:"字元只允許包含 A-Z,a-z,0-9,_,- 並且長度在3-255之間",FORM_HOSTNAME_ERROR_MSG:"主機名稱格式錯誤",FORM_NAME_ERROR_MSG:"名稱格式錯誤",FORM_PASSWORD_ERROR_MSG:"字元只允許 A-Z,a-z,0-9 並且長度在6-100之間",FORM_LONGITUDE_ERROR_MSG:"經度格式錯誤",FORM_LATITUDE_ERROR_MSG:"緯度格式錯誤",FORM_IP_ERROR_MSG:"IP 格式錯誤",FORM_EMAIL_ERROR_MSG:"電子郵件格式錯誤",FORM_URL_ERROR_MSG:"URL 格式錯誤",FORM_REQUIRED_ERROR_MSG:"欄位不能為空",FORM_MIN_ERROR_MSG:"輸入值太小",FORM_MIN_ERROR_MSG2:"最小值是",FORM_MAX_ERROR_MSG:"輸入值太大",FORM_MAX_ERROR_MSG2:"最大值是",FORM_MINLEN_ERROR_MSG:"長度太短",FORM_MINLEN_ERROR_MSG2:"是最短長度",FORM_MAXLEN_ERROR_MSG:"長度太長",FORM_MAXLEN_ERROR_MSG2:"是最長長度",FORM_PATTERN_ERROR_MSG:"輸入格式錯誤"}},function(e,t){/*** Directives and services for responding to idle users in AngularJS
* @author Mike Grabski <me@mikegrabski.com>
* @version v1.3.2
* @link https://github.com/HackedByChinese/ng-idle.git
* @license MIT
*/
!function(e,t,n){"use strict";t.module("ngIdle",["ngIdle.keepalive","ngIdle.idle","ngIdle.countdown","ngIdle.title","ngIdle.localStorage"]),t.module("ngIdle.keepalive",[]).provider("Keepalive",function(){var e={http:null,interval:600};this.http=function(n){if(!n)throw new Error("Argument must be a string containing a URL, or an object containing the HTTP request configuration.");t.isString(n)&&(n={url:n,method:"GET"}),n.cache=!1,e.http=n};var n=this.interval=function(t){if(t=parseInt(t),isNaN(t)||t<=0)throw new Error("Interval must be expressed in seconds and be greater than 0.");e.interval=t};this.$get=["$rootScope","$log","$interval","$http",function(a,r,i,o){function l(e){a.$broadcast("KeepaliveResponse",e.data,e.status)}function u(){a.$broadcast("Keepalive"),t.isObject(e.http)&&o(e.http).then(l).catch(l)}var s={ping:null};return{_options:function(){return e},setInterval:n,start:function(){return i.cancel(s.ping),s.ping=i(u,1e3*e.interval),s.ping},stop:function(){i.cancel(s.ping)},ping:function(){u()}}}]}),t.module("ngIdle.idle",["ngIdle.keepalive","ngIdle.localStorage"]).provider("Idle",function(){var e={idle:1200,timeout:30,autoResume:"idle",interrupt:"mousemove keydown DOMMouseScroll mousewheel mousedown touchstart touchmove scroll",windowInterrupt:null,keepalive:!0},n=this.timeout=function(n){if(n===!1)e.timeout=0;else{if(!(t.isNumber(n)&&n>=0))throw new Error("Timeout must be zero or false to disable the feature, or a positive integer (in seconds) to enable it.");e.timeout=n}};this.interrupt=function(t){e.interrupt=t},this.windowInterrupt=function(t){e.windowInterrupt=t};var a=this.idle=function(t){if(t<=0)throw new Error("Idle must be a value in seconds, greater than 0.");e.idle=t};this.autoResume=function(t){t===!0?e.autoResume="idle":t===!1?e.autoResume="off":e.autoResume=t},this.keepalive=function(t){e.keepalive=t===!0},this.$get=["$interval","$log","$rootScope","$document","Keepalive","IdleLocalStorage","$window",function(r,i,o,l,u,s,c){function d(){e.keepalive&&(M.running&&u.ping(),u.start())}function m(){e.keepalive&&u.stop()}function p(){M.idling=!M.idling;var t=M.idling?"IdleStart":"IdleEnd";M.idling?(o.$broadcast(t),m(),e.timeout&&(M.countdown=e.timeout,f(),M.timeout=r(f,1e3,e.timeout,!1))):(d(),o.$broadcast(t)),r.cancel(M.idle)}function f(){if(M.idling){if(M.countdown<=0)return void _();o.$broadcast("IdleWarn",M.countdown),M.countdown--}}function g(e){o.$broadcast("IdleInterrupt",e)}function _(){m(),r.cancel(M.idle),r.cancel(M.timeout),M.idling=!0,M.running=!1,M.countdown=0,o.$broadcast("IdleTimeout")}function R(e,t,n){var a=e.running();e.unwatch(),t(n),a&&e.watch()}function O(){var e=s.get("expiry");return e&&e.time?new Date(e.time):null}function E(e){e?s.set("expiry",{id:v,time:e}):s.remove("expiry")}var M={idle:null,timeout:null,idling:!1,running:!1,countdown:null},v=(new Date).getTime(),L={_options:function(){return e},_getNow:function(){return new Date},getIdle:function(){return e.idle},getTimeout:function(){return e.timeout},setIdle:function(e){R(this,a,e)},setTimeout:function(e){R(this,n,e)},isExpired:function(){var e=O();return null!==e&&e<=this._getNow()},running:function(){return M.running},idling:function(){return M.idling},watch:function(t){r.cancel(M.idle),r.cancel(M.timeout);var n=e.timeout?e.timeout:0;t||E(new Date((new Date).getTime()+1e3*(e.idle+n))),M.idling?p():M.running||d(),M.running=!0,M.idle=r(p,1e3*e.idle,0,!1)},unwatch:function(){r.cancel(M.idle),r.cancel(M.timeout),M.idling=!1,M.running=!1,E(null),m()},interrupt:function(t){if(M.running){if(e.timeout&&this.isExpired())return void _();g(t),(t||"idle"===e.autoResume||"notIdle"===e.autoResume&&!M.idling)&&this.watch(t)}}},b={clientX:null,clientY:null,swap:function(e){var t={clientX:this.clientX,clientY:this.clientY};return this.clientX=e.clientX,this.clientY=e.clientY,t},hasMoved:function(e){var t=this.swap(e);return!(null!==this.clientX&&!e.movementX&&!e.movementY)||(t.clientX!=e.clientX||t.clientY!=e.clientY)}};if(l.find("html").on(e.interrupt,function(e){"mousemove"===e.type&&e.originalEvent&&0===e.originalEvent.movementX&&0===e.originalEvent.movementY||("mousemove"!==e.type||b.hasMoved(e))&&L.interrupt()}),e.windowInterrupt)for(var h=e.windowInterrupt.split(" "),A=function(){L.interrupt()},y=0;y<h.length;y++)c.addEventListener?c.addEventListener(h[y],A,!1):c.attachEvent(h[y],A);var S=function(e){if("ngIdle.expiry"===e.key&&e.newValue&&e.newValue!==e.oldValue){var n=t.fromJson(e.newValue);if(n.id===v)return;L.interrupt(!0)}};return c.addEventListener?c.addEventListener("storage",S,!1):c.attachEvent&&c.attachEvent("onstorage",S),L}]}),t.module("ngIdle.countdown",["ngIdle.idle"]).directive("idleCountdown",["Idle",function(e){return{restrict:"A",scope:{value:"=idleCountdown"},link:function(t){t.value=e.getTimeout(),t.$on("IdleWarn",function(e,n){t.$evalAsync(function(){t.value=n})}),t.$on("IdleTimeout",function(){t.$evalAsync(function(){t.value=0})})}}}]),t.module("ngIdle.title",[]).provider("Title",function(){function e(e,t,n){return new Array(t-String(e).length+1).join(n||"0")+e}var n={enabled:!0},a=this.enabled=function(e){n.enabled=e===!0};this.$get=["$document","$interpolate",function(r,i){var o={original:null,idle:"{{minutes}}:{{seconds}} until your session times out!",timedout:"Your session has expired."};return{setEnabled:a,isEnabled:function(){return n.enabled},original:function(e){return t.isUndefined(e)?o.original:void(o.original=e)},store:function(e){!e&&o.original||(o.original=this.value())},value:function(e){return t.isUndefined(e)?r[0].title:void(r[0].title=e)},idleMessage:function(e){return t.isUndefined(e)?o.idle:void(o.idle=e)},timedOutMessage:function(e){return t.isUndefined(e)?o.timedout:void(o.timedout=e)},setAsIdle:function(t){this.store();var n={totalSeconds:t};n.minutes=Math.floor(t/60),n.seconds=e(t-60*n.minutes,2),this.value(i(this.idleMessage())(n))},setAsTimedOut:function(){this.store(),this.value(this.timedOutMessage())},restore:function(){this.original()&&this.value(this.original())}}}]}).directive("title",["Title",function(e){return{restrict:"E",link:function(t,n,a){e.isEnabled()&&!a.idleDisabled&&(e.store(!0),t.$on("IdleStart",function(){e.original(n[0].innerText)}),t.$on("IdleWarn",function(t,n){e.setAsIdle(n)}),t.$on("IdleEnd",function(){e.restore()}),t.$on("IdleTimeout",function(){e.setAsTimedOut()}))}}}]),t.module("ngIdle.localStorage",[]).service("IdleStorageAccessor",["$window",function(e){return{get:function(){return e.localStorage}}}]).service("IdleLocalStorage",["IdleStorageAccessor",function(e){function a(){var e={};this.setItem=function(t,n){e[t]=n},this.getItem=function(t){return"undefined"!=typeof e[t]?e[t]:null},this.removeItem=function(t){e[t]=n}}function r(){try{var t=e.get();return t.setItem("ngIdleStorage",""),t.removeItem("ngIdleStorage"),t}catch(e){return new a}}var i=r();return{set:function(e,n){i.setItem("ngIdle."+e,t.toJson(n))},get:function(e){return t.fromJson(i.getItem("ngIdle."+e))},remove:function(e){i.removeItem("ngIdle."+e)},_wrapped:function(){return i}}}])}(window,window.angular)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.sjCore=void 0,n(35),n(30),n(31);var r=n(40),i=a(r),o=n(36),l=a(o),u=n(29),s=a(u),c=n(32),d=a(c),m=n(12),p=a(m),f=n(23),g=a(f),_=n(13),R=a(_),O=n(18),E=a(O),M=n(21),v=a(M),L=n(20),b=a(L),h=n(17),A=a(h),y=n(26),S=a(y),F=n(27),I=a(F);n(28);var w=n(19),T=a(w),x=n(24),B=a(x),$=n(25),k=a($),G=n(15),N=a(G),q=n(34),C=a(q),j=n(39),P=n(37),U=n(38);n(33),n(22),n(16),n(14),n(0);var D=n(11),H=a(D);n(1),n(10),n(9);var X=n(6),z=a(X),V=n(4),W=a(V),Z=n(8),Y=a(Z),K=n(7),J=a(K),Q=n(5),ee=a(Q),te=n(2),ne=a(te),ae=n(3),re=a(ae);i.default.load({google:{families:["Roboto"]}}),Offline.options={checkOnLoad:!0,reconnect:{initialDelay:3,delay:3},requests:!1};var ie=p.default.module("sanji.core",[g.default,R.default,E.default,v.default,b.default,T.default,"angularMoment","angular.filter","ncy-angular-breadcrumb",H.default,N.default,k.default,A.default,S.default,I.default,B.default,C.default,"ngLetterAvatar","angular-cron-jobs",P.sjRedux,j.sjUtils]);ie.constant("pathToRegexp",l.default),ie.constant("apiCheck",s.default),ie.constant("moment",d.default),ie.config(z.default),ie.config(W.default),ie.config(Y.default),ie.config(J.default),ie.config(["$breadcrumbProvider",function(e){"ngInject";e.setOptions({templateUrl:"breadcrumbs.tpl.html"})}]),ie.filter("trustAsResourceUrl",["$sce",function(e){return function(t){return e.trustAsResourceUrl(t)}}]),ie.service("downloadHelper",re.default),ie.run(ee.default),ie.run(["$state","$rootScope",function(e,t){"ngInject";e.defaultErrorHandler(function(){}),t.$on(U.SOCKET_INIT_CONNECT_EVENT,function(e,t){t.on("disconnect",function(){Offline.check()})})}]),(0,ne.default)(ie),s.default.globalConfig.disabled=!0;var oe=ie.name;t.sjCore=oe}])});