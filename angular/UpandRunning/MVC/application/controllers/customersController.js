function CustomersController($scope) {
	$scope.sortBy = 'name';
	$scope.reverse = false;
	
	$scope.customers= [
		{name:'Bill Smith', charges:'3945.45', lastUpdated:'2012-12-02', ordersToDate: 5}, 
		{name:'Fred Jones', charges:'4434.10', lastUpdated:'2012-12-02', ordersToDate: 2}, 
		{name:'Sophia Barnes', charges:'5234.25', lastUpdated:'2012-12-02', ordersToDate: 7}, 
		{name:'Betty Holland', charges:'61234.43',lastUpdated:'2011-08-04', ordersToDate: 8}
	];
	$scope.doSort= function(propName){
		$scope.sortBy = propName;
		$scope.reverse =!$scope.reverse;
	}
}