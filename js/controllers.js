'use strict';


/* Controllers */

function PrintCreditCardController($scope) {

  $scope.cardNumberFirst = 'XXXX';
  $scope.cardNumberSecond = 'XXXX';
  $scope.cardNumberThird = 'XXXX';
  $scope.cardNumberFourth = 'XXXX';
  $scope.cardExpiryDate = 'DD/YYYY';
  $scope.cardHolderName = 'CARD HOLDER';
  $scope.cvvNumber = 'CVV';

  $scope.printCreditCard = function() {
    window.print();
  }


}
