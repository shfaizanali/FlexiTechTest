/**
 * Created by apple on 29/09/15.
 */
var app = angular.module('app.routes', []);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('posts', {
            url: '/posts',
            templateUrl: 'templates/posts.html',
            controller: 'PostsCtrl',
            resolve:{
                posts:function(Posts,$ionicLoading){
                    $ionicLoading.show();
                    var postsPromise = Posts.getPosts().$promise;
                    $ionicLoading.hide();
                    return postsPromise;
                }
            }
        })

        .state('post', {
            url: '/post/:id',
            templateUrl: 'templates/post.html',
            controller: 'PostDetailsController',
            resolve:{
                post:function(Posts,$stateParams,$ionicLoading){
                    $ionicLoading.show();
                    var postPromise =  Posts.getPost({id: $stateParams.id}).$promise;
                    $ionicLoading.hide();
                    return postPromise;
                }
            }
        })

        .state('add-post', {
            url: '/add-post',
            templateUrl: 'templates/addPost.html',
            controller: 'AddPostCtrl'
        })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/posts');

});