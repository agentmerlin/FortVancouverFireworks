var myApp = angular.module('fortVancouverApp', []);

myApp.controller('MainCtrl', [
    '$scope',
    '$document',
    '$timeout',
    'Api',
    function ($scope, $document, $timeout, Api) {
        $scope.showLogin = true;
        $scope.submission = {
            ticketId: '',
            status: '',
            name: ''
        };

        $scope.setFocus = function () {
            if ($scope.showLogin) {
                $document[0].getElementById('loginInput').focus();
            } else {
                $document[0].getElementById('ticketInput').focus();
            }
        };

        $scope.login = function () {
            $scope.showLogin = false;
            $timeout($scope.setFocus);
        };

        $scope.scan = function () {
            Api.scan($scope.ticketId, $scope.username).then(function (data) {
                $scope.submission = data;
                $scope.ticketId = '';
                $scope.setFocus();
                switch ($scope.submission.status) {
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
