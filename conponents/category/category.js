/**
 * Created by Administrator on 2017/4/18 0018.
 */
angular.module('categoryModule',[])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/category',{
                templateUrl:'conponents/category/category.html',
                controller:'categoryCtrl',
                css:'conponents/category/category.css'
            })
    }])
.controller('categoryCtrl',['$scope','$http',function($scope,$http){
        //$scope.name='zhangzhang';
        $http.get('json/category.json').success(function(res){
            //console.log(res.data.categories);

            //获取左侧li列表
            $scope.arrLeft = res.data.categories;

            //获取显示对应的右侧数据
            $scope.showRight = function(id){
                console.log(res.data.products[id]);
                $scope.arrRight = res.data.products[id];
            }

            //筛选和排序的显示与隐藏
            $scope.isShow = false;
            $scope.changeShow = function(){
                console.log($scope.isShow);
                $scope.isShow = !$scope.isShow;
            }
            $scope.isShow0 = true;
            $scope.changeShow0 = function(){
                console.log($scope.isShow0);
                $scope.isShow0 = !$scope.isShow0;
            }

            $scope.showFilter = function(arrFilter){

            }

            //右侧数据排序
            $scope.sortData = function(type){
                console.log(type);
//                $scope.isShow = false;
//                $scope.changeShow();
                $scope.sortType = type;
            }
        });
    }]);