angular.module("app").controller("mainCtrl", function($scope) {
  $scope.test = "Some value";
  $scope.friends = [
    { name: "Joe Blow", gender: "male" },
    { name: "Jane Doe", gender: "female" },
    { name: "Charlie Brown", gender: "femal" },
    { name: "Mean Mean Leeroy Brown", gender: "male" }
  ];
  $scope.removeFriend = index => {
    $scope.friends.splice(index, 1);
  };
  $scope.addFriend = str => {
    $scope.friends.push(str);
    $scope.input = "";
  };
});
