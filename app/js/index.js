var myApp = angular.module('fortVancouverApp', []);

myApp.controller('MainCtrl', [
    '$scope',
	'$document',
    'Api',
    function ($scope, $document, Api) {
        $scope.showInput = false;
        $scope.submission = {
            ticketId: '',
            status: '',
            name: ''
        };

        $scope.login = function () {
            $scope.showInput = true;
			//TODO set focus to ticket input
        };

        $scope.scan = function () {
            Api.scan($scope.ticketId, $scope.username).then(function (data) {
                $scope.submission = data;
				switch($scope.submission.status) {
					case 'PRIME TICKET':
						$scope.statusClass = 'prime';
						$document[0].getElementById('prime-sound').play();
						break;
					case 'VALID':
						$scope.statusClass = 'valid';
						break;
					case 'DUPLICATE TICKET ID':
						$scope.statusClass = 'invalid';
						$document[0].getElementById('duplicate-sound').play();
						break;
					case 'INVALID TICKET ID':
						$scope.statusClass = 'invalid';
						$document[0].getElementById('invalid-sound').play();
						break;
				}
				//TODO set focus to ticket input
            });
        };
    }
]);

myApp.service('Api', [
    '$http',
    function ($http) {

        function scan(ticketId, username) {
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
