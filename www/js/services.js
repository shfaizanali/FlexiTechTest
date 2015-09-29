var app = angular.module('app.services', ['ngResource']);

app.constant('BASE_URL','http://jsonplaceholder.typicode.com')

app.factory('Posts', function ($resource,BASE_URL)
{
    var url = BASE_URL+"/posts/:id";
    return $resource(url, {id : '@id'}, {
        'getPost': {
            method:'GET',
            isArray: false
        },
        'getPosts':{
            method:'GET',
            isArray:true
        },
        delete:{
            method:'DELETE'
        },
        post:{
            method:'POST'
        }
    });
})