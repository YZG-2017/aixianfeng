/**
 * Created by Administrator on 2017/4/18 0018.
 */
angular.module('aixianfeng',['ngRoute','angularCSS','homeModule','categoryModule'])
.config(['$routeProvider',function($routeProvider){
    $routeProvider.otherwise({redirectTo: '/home'});
}])