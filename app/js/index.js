var myApp = angular.module('fortVancouverApp', []);

myApp.controller('MainCtrl', [
    '$scope',
	'Api',
    function ($scope, Api) {
		$scope.showInput = false;
		$scope.submission = {
			ticketId: '',
			status: '',
			name: ''
		};

		$scope.login = function () {
			$scope.showInput = true;
		};

		$scope.scan = function () {
			Api.scan($scope.ticketId, $scope.username).then(function (data) {
				$scope.submission = data;
			});
		};
    }
]);

myApp.service('Api', [
	'$http',
	function ($http) {

		function scan (ticketId, username) {
			var url = '../scan/username/' + username + '/ticketId/' + ticketId;
			
			return $http.post(url).then(
                function (response) {
                    return response.data;
                },
                function (error) {
                    return $q.reject(error);
                }
            );
		}

		return {
			scan: scan
		};
	}
]);
