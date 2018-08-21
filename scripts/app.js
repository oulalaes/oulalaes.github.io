/**
 * 
 * @version v1.0.0 - 2018-08-21
 * @link wwww.oulala.es
 * @author 
 This is proprietary software and not allowed for distribution or use without explicit consent.
 */!function(){"use strict";var a=angular.module("application",["cmelion.componentFactory","ngSymbiosis.utils","ajoslin.promise-tracker","application.moduleLoader"]);angular.componentFactory.moduleDecorator(a)}(),function(){"use strict";function a(a,b,c,e,f,g,h){a.setViewPath("views/components/"),d.controller=b.register,d.directive=function(a,b){return c.directive(a,b),this},d.filter=e.register,d.constant=f.constant,d.provider=f.provider,d.factory=f.factory,d.service=f.service,d.value=f.value,g.defaults.timeout=2e4,h.html5Mode({enabled:!0,requireBase:!1}),c.debugInfoEnabled(!1)}function b(a,b){return a.API.protocol+"://"+a.API.host+":"+b.port+"/"}function c(a){return a.API.path+"/"}a.$inject=["componentFactoryProvider","$controllerProvider","$compileProvider","$filterProvider","$provide","$httpProvider","$locationProvider"],b.$inject=["config","mocks"],c.$inject=["config"];var d=angular.module("application").config(a).factory("BaseUrl",b).factory("APIBaseUrl",c)}(),function(){"use strict";angular.module("application").constant("config",{viewsDir:"views/",componentsDir:"components/",statesDir:"states/",API:{port:location.port,protocol:location.protocol,host:location.host,path:"",fakeDelay:300}})}(),function(){"use strict";angular.module("application").constant("environment",{production:!0})}(),function(){"use strict";var a;a=angular.module("application.components",[]),angular.componentFactory.moduleDecorator(a),angular.module("application.moduleLoader",["application.components"])}(),function(){"use strict";function a(){var a=this;a.inicio=!0,a.selectTab=function(b){a.selectedTab=b},a.selectTab("inicio")}function b(){return{templateUrl:"components/app/app.html"}}angular.module("application.components").controller("appComponentCtrl",a).component("app",b)}(),function(){"use strict";function a(a){return a._}a.$inject=["$window"],angular.module("application").factory("_",a)}();