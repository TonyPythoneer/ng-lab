/// <reference path="./../../typings/angularjs/angular.d.ts"/>
var lvProgressModule;
(function (lvProgressModule) {
    "use strict";
    angular.module("lvProgress", []);
    lvProgressModule.getModule = function () {
        return angular.module("lvProgress");
    };
})(lvProgressModule || (lvProgressModule = {}));
