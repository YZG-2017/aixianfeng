/**
 * Created by Administrator on 2017/4/18 0018.
 */
angular.module('homeModule',[])
.config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/home',{
                templateUrl:'conponents/home/home.html',
                controller:'homeCtrl',
                css:'conponents/home/home.css'
            })
    }])
    .service('swiper',['$timeout',function($timeout){
        $timeout(function(){
            new Swiper ('.swiper-container', {
//                direction: 'vertical',
                loop: true,
                autoplay:500,
                // 如果需要分页器
                pagination: '.swiper-pagination',

            })
        },10);
    }])
    .controller('homeCtrl',['$scope','$http','swiper',function($scope,$http){
//        $scope.name='zhangzhang';
        $http.get('json/aixianfeng.json').success(function(res){
            console.log(res.data.act_info[0].act_rows);

            //获取轮播数据
            $scope.arrSwiper = res.data.act_info[0].act_rows;

            //每日必抢，鲜货直达，整箱够，乳品
            $scope.arr1 = res.data.act_info[1].act_rows;

            //最后，优选水果，牛奶面包，卤味熟食，饮料酒水，休闲零食，方便速食
            $scope.arrLast = res.data.act_info[5].act_rows;
//            $scope.arrLast2 = res.data.act_info[5].act_rows[0].category_detail.goods;
        });
    }]);