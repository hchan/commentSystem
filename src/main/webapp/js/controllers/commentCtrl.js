commentapp
	.controller('CommentCtrl', function TodoCtrl($scope, $http, ModalService) {
		'use strict';
		$scope.comment = {};
		
		$scope.showProfile = function(comment) {
			console.log(comment)
			  ModalService.showModal({
		
			    templateUrl: "showProfile.html",
			    controller: "ProfileCtrl",
			    inputs : {
			    	"comment" : comment
			    }
			  }).then(function(modal) {
			    //it's a bootstrap element, use 'modal' to show it
			    modal.element.modal();
			    modal.close.then(function(result) {
			      console.log(result);
			    });
			  });
		}
		
		$scope.create = function() {
			if ($scope.comment.text == null || $scope.comment.user == null || $scope.comment.user.firstName == null || $scope.comment.user.lastName == null) {
				alert("Validation Error");
				return;
			}
			console.log("About to create :" + $scope.comment);
			
			$http.post(serviceURL, $scope.comment)
			.success(function(data, status, headers, config) {
				// after you insert, fetch all
				$scope.getAll();
				
			});
		}
		
		$scope.getAll = function() {
			$http.get(serviceURL)
			.success(function(data, status, headers, config) {
				$scope.comments = data;
				
			});
		}
		
		$scope.parseCommentText = function(comment) {
			if (comment.text.length < 20) {
				comment.showFullText = true;
			} else {
				comment.shortText = comment.text.substring(0,20) + "...";
			}
		}
		
		$scope.showFullText = function (comment) {
			comment.showFullText = true;
		}
		$scope.getAll(); // fetch everything
		
		//console.log(comments);

//		var todos = $scope.todos = store.todos;
//
//		$scope.newTodo = '';
//		$scope.editedTodo = null;
//
//		$scope.$watch('todos', function () {
//			$scope.remainingCount = $filter('filter')(todos, { completed: false }).length;
//			$scope.completedCount = todos.length - $scope.remainingCount;
//			$scope.allChecked = !$scope.remainingCount;
//		}, true);
//
//		// Monitor the current route for changes and adjust the filter accordingly.
//		$scope.$on('$routeChangeSuccess', function () {
//			var status = $scope.status = $routeParams.status || '';
//
//			$scope.statusFilter = (status === 'active') ?
//				{ completed: false } : (status === 'completed') ?
//				{ completed: true } : null;
//		});
//
//		$scope.addTodo = function () {
//			var newTodo = {
//				title: $scope.newTodo.trim(),
//				completed: false
//			};
//
//			if (!newTodo.title) {
//				return;
//			}
//
//			$scope.saving = true;
//			store.insert(newTodo)
//				.then(function success() {
//					$scope.newTodo = '';
//				})
//				.finally(function () {
//					$scope.saving = false;
//				});
//		};
//
//		$scope.editTodo = function (todo) {
//			$scope.editedTodo = todo;
//			// Clone the original todo to restore it on demand.
//			$scope.originalTodo = angular.extend({}, todo);
//		};
//
//		$scope.saveEdits = function (todo, event) {
//			// Blur events are automatically triggered after the form submit event.
//			// This does some unfortunate logic handling to prevent saving twice.
//			if (event === 'blur' && $scope.saveEvent === 'submit') {
//				$scope.saveEvent = null;
//				return;
//			}
//
//			$scope.saveEvent = event;
//
//			if ($scope.reverted) {
//				// Todo edits were reverted-- don't save.
//				$scope.reverted = null;
//				return;
//			}
//
//			todo.title = todo.title.trim();
//
//			if (todo.title === $scope.originalTodo.title) {
//				return;
//			}
//
//			store[todo.title ? 'put' : 'delete'](todo)
//				.then(function success() {}, function error() {
//					todo.title = $scope.originalTodo.title;
//				})
//				.finally(function () {
//					$scope.editedTodo = null;
//				});
//		};
//
//		$scope.revertEdits = function (todo) {
//			todos[todos.indexOf(todo)] = $scope.originalTodo;
//			$scope.editedTodo = null;
//			$scope.originalTodo = null;
//			$scope.reverted = true;
//		};
//
//		$scope.removeTodo = function (todo) {
//			store.delete(todo);
//		};
//
//		$scope.saveTodo = function (todo) {
//			store.put(todo);
//		};
//
//		$scope.toggleCompleted = function (todo, completed) {
//			if (angular.isDefined(completed)) {
//				todo.completed = completed;
//			}
//			store.put(todo, todos.indexOf(todo))
//				.then(function success() {}, function error() {
//					todo.completed = !todo.completed;
//				});
//		};
//
//		$scope.clearCompletedTodos = function () {
//			store.clearCompleted();
//		};
//
//		$scope.markAll = function (completed) {
//			todos.forEach(function (todo) {
//				if (todo.completed !== completed) {
//					$scope.toggleCompleted(todo, completed);
//				}
//			});
//		};
	});
