angular.module('leroyApp', []).controller('ShoppingCart', ['$scope', function($scope) {
  $scope.check_cards = function ($total, $min, $cards) {
    if($total > $min) {
      $scope.two_cards = true;
      $cards.card_two.totalValue = 0;
    } else {
      $scope.two_cards = false;
      $cards.card_two.totalValue = 0;
    }
  }

  $scope.check_installments = function (total, min, max, total_installment_max) {
    var total_min = Math.floor(total / min);

    if(total <= max){
      return (total_min == 0 && 1);
    } else {
      return total_installment_max;
    }
  }

  var prince_total     = 77636,
      card_min         = 10000,
      card_max         = 60000,
      installment_min  = 1,
      installment_max  = 6;

  $scope.buy = {
    total : prince_total,
    cards : {
      card_one : {
        total : prince_total,
        installments : 1
      },
      card_two : {
        total : 0,
        installments : 0
      }
    }
  }

  $scope.check_cards(prince_total, card_min, $scope.buy.cards);

  $scope.$watch('buy.total', function (value) {
    $scope.check_cards(value, card_min, $scope.buy.cards);
    $scope.buy.cards.card_one.total = value - $scope.buy.cards.card_two.total;
  });

  $scope.$watch('buy.cards.card_two.total', function (value) {
    var total_one = $scope.buy.total - $scope.buy.cards.card_two.total;

    if($scope.buy.cards.card_two.total > $scope.buy.total) {
      $scope.buy.cards.card_one.total = 0;
      $scope.buy.cards.card_two.total = $scope.buy.total;

    } else {
      $scope.buy.cards.card_one.total = total_one;
      $scope.buy.cards.card_two.total = value;

      $scope.buy.cards.card_one.installments = $scope.check_installments(total_one, card_min, card_max, installment_max);
      $scope.buy.cards.card_two.installments = $scope.check_installments(value, card_min, card_max, installment_max);

      console.log($scope.buy.cards.card_one.installments)
      console.log($scope.buy.cards.card_two.installments)
    }
  });
}]);
