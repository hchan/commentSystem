commentapp.controller('ProfileCtrl', ['$scope', 'comment', 'close', function($scope, comment, close) {
	$scope.comment = comment;

	$scope.close = function(result) {
		close(result, 500); // close, but give 500ms for bootstrap to animate
	};
}]);