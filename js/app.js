var app = angular.module('pongada', []);

app.controller('game', ['$scope',function($scope) { 

	$scope.initialize = function(){
	var playerDiffPos = [0,3,3];
	for(var i = 1; i < 7; i++)
		$scope['p'+i] = {
			class: 'p'+ (i + playerDiffPos[Math.floor((i-1)/3)]),
			isMoving: false,
			location: {
				top: '0px',
				left: '0px'
			}
		}
		$scope.curPos = '';
		$scope.selected = null;
	}
	
	$scope.startDrag = function(p){
		$scope.selected = p;
	}
	
	$scope.newPos = function(p){
		console.log("Oi");
		if($scope.selected != null && $scope.curPos != '')
			$scope.selected.class= p;
	}
	
	$scope.setCurPos = function(p){
		console.log(p);
		$scope.curPos = p;
	}
	
	$scope.cleanPos = function(){
		$scope.curPos = '';
		console.log("oi" + $scope.curPos);
	}
	
	$scope.initialize();
}]);