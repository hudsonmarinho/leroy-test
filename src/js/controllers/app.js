angular.module('leroyApp', [])
  .controller('ShoppingCart', ['$scope', function($scope) {
    $total = 77636;
    $minCard = 10000;
    $maxCard = 60000;

    $scope.buy = {};
    $scope.buy.total = $total;
    $scope.buy.cardOne = $total;

    if($scope.buy.total >= $minCard) {
      $scope.twoCards = true;
      $scope.buy.cardTwo = 0;
    }

    $scope.$watch('buy.total', function (value) {
      $scope.$watch('buy.cardOne', function (value) {
        cardOneValue = $scope.buy.cardOne;

        if(cardOneValue >= $total) {
          $scope.buy.cardOne = $total;
        }
      });

      $scope.$watch('buy.cardTwo', function (value) {
        cardTwoValue = $scope.buy.cardTwo;

        if(cardTwoValue >= $total) {
          $scope.buy.cardTwo = $total;
        }

        $scope.buy.cardOne = $total - cardTwoValue;
      });
    });
}]);
