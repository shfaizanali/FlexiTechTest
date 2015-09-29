angular.module('app.controllers', [])

.controller('PostsCtrl', function($scope,posts,$ionicLoading,Posts) {
    $scope.posts = posts;
    $scope.deletePost = function(itemId,index)
    {
        $ionicLoading.show();
        Posts.delete({id:itemId}).$promise.then(function(data){
            $ionicLoading.hide();
            $scope.posts.splice(index,1);
        },function(err){
            $ionicLoading.hide();
            alert("something went wrong! Please try again")
        })
    }
})

.controller('PostDetailsController', function($scope,post,$ionicLoading,Posts,$location) {
    console.log(post);
    $scope.post = post;
    $scope.deletePost = function()
    {
        $ionicLoading.show();
        Posts.delete({id:$scope.post.id}).$promise.then(function(data){
            $ionicLoading.hide();
            $location.path('/posts');
        },function(err){
            $ionicLoading.hide();
            alert("something went wrong! Please try again")
        })
    }
})

.controller('AddPostCtrl', function($scope,Posts,$ionicLoading,$location) {
    $scope.post = {};
    $scope.addPost = function()
    {
        $ionicLoading.show();
        $scope.post.userId = 1;
        Posts.post($scope.post).$promise.then(function () {
            $ionicLoading.hide();
            $location.path('/posts')
        }, function (err) {
            $ionicLoading.hide();
            alert("something went wrong! Please try again")
        });
    }

})


