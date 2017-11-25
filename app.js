(function(angular) {
  'use strict';
var myApp = angular.module('myapp', ["ngRoute","ngAnimate"]);

myApp.config(function($routeProvider) {
	$routeProvider
		.when("/books", {
			templateUrl: "book-list.html",
			controller: "BookListCtrl"
		})
		.when("/kart", {
			templateUrl: "kart-view.html",
			controller: "KartListCtrl"
			
		})
	.otherwise({
		redirectTo: "/books"
	});
});

myApp.controller('HeaderCtrl', ['$scope','$location', function($scope,$location) 
{
    $scope.appDetails ={
      title:"Bookart",
      tagline:"We have one million books for u.."
    }
	//$scope.nav={};
	$scope.isActive=function(path){
		if(path===$location.path)
		{	return true;}
		else
		{
		return false;}
	};
	
}]);

myApp.factory("kartService",function(){
 var kart=[];
 return {
	 getKart : function(){
		 return kart;
	 },
	 addToKart : function(book){
		 kart.push(book);
		 alert(book.name + " added to the kart");
	 },
	buy : function(book){
		 alert("Thank You for buying " + book.name);
	}
 }
});

myApp.factory("bookService",function()
{
	var books=[
    {
      imgUrl:"playing.jpeg",
      name:"Playing",
      price:"222",
      rating:"4",
      details:"Details playing",
	  publisher: "QQQ",
      publishedDate:"2011/4/3"
    },
    {
      imgUrl:"adultery.jpeg",
      name:"Adultery Jasmine",
      price:"111",
      rating:"4",
      details:"Details adultery",
	  publisher: "QQQ",
      publishedDate:"2011/3/3"
    },
    {
      imgUrl:"geronimo.jpeg",
      name:"Geronimo Wilson",
      price:"333",
      rating:"3",
      details:"Details geronimo",
	  publisher: "PPP",
      publishedDate:"2011/2/3"
    },
    {
      imgUrl:"the-fault.jpeg",
      name:"The-Fault Yazhini",
      price:"999",
      rating:"4",
	  publisher: "QQQ",
      details:"Details the-fault",
      publishedDate:"2011/1/3"
    },
    {
      imgUrl:"wings-of-fire.jpeg",
      name:"Wings-Of-Fire",
      price:"777",
      rating:"5",
	  publisher: "FFF",
      details:"Details wings-of-fire",
      publishedDate:"2011/12/3"
    }
  ];
  
  return {
	  getBooks : function(){
		  return books;
	  }
  }
});
myApp.controller('BookListCtrl',function($scope,bookService,kartService){
  
   $scope.books=bookService.getBooks();
	$scope.addToKart = function(book){
	   kartService.addToKart(book);
	  // alert(book.name + " added to the kart");
   }
});

myApp.controller('KartListCtrl',function($scope,kartService){
  
   $scope.kart=kartService.getKart();
   $scope.buy = function(book){
	   //console.log("hi");
	   kartService.buy(book);
   }
});

})(window.angular);
