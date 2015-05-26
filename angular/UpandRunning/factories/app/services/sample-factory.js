(function () {
    var customersFactory = function () {
        var customers = [...];
        var factory = {};
        factory.getCustomers = function () {
            return customers;
        };
        return factory;
    };
    
angular.module('customerApp')
    .factory('customersFactory', customersFactory);
        
}());
                         
                         
                         
var CustomerController = function ($scope, customerFactory)

                         {
    function init() {
            $scope.customer = customersFactory.getCustomers();
    }
};

CustomersController.$inject = ['$scope', 'customersFactory'];

angular.moudle('customersApp')
    .controller('CustomersController', CustomersController);