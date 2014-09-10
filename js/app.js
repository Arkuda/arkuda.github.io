var app = angular.module('app', []);




app.controller('postCtrl', function ($scope) {
  $scope.posts = getPosts();
});





function getPosts(){
	return [
    {'title': 'Тестовый пост',
     'author': 'Andrey K.',
 	 'date':'10.09.14 11:48',
 	 'imgae':'http://img0.liveinternet.ru/images/attach/c/9/105/492/105492994_5352719_VtJ7cT5f79Q.jpg',
 	 'content':'Короче это пост)))'}
	
  ];
}