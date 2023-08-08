var app = angular.module('myApp',[]);

app.controller('myCtrl',function($scope){
    

  
    $scope.products = [
        {name: 'Product one', price: '$22.50'},
        {name: 'Product two', price: '$15.00'},
        {name: 'Product four', price: '$123.82'},
        {name: 'Product five', price: '$123.75'}
    ];
    

    $scope.addProduct = function(){
        $scope.products.push($scope.newProduct);
        $scope.newProduct = { };
        $scope.message = "new Product added successfully";
    };
    
    $scope.selectProduct = function(product){
        $scope.clickedProduct = product;
    };
    

    $scope.editProduct = function(){
        $scope.message = "Edited successfully";
    };

    
    $scope.deleteProduct = function(){

    
        $scope.products.splice($scope.products.indexOf($scope.clickedProduct),1);
        $scope.message = "Deleted successfully";
    };
     

    $scope.clearMessage = function(){
        $scope.message = "";
    };

});