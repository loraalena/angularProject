var app = angular.module("testTask", []);

app.controller('productsCtrl', ['$scope', function ($scope) {

    $scope.data = {
        "items": [
            {
                "type" : "Child",
                "img" : "childTshirt",
                "price" : "3.20",
                "name" : "T-SHIRT",
                "options": ["Size", "S", "M", "L", "XL"]
            }
            ,{
                "type" : "Child",
                "img" : "childPants",
                "price" : "13.30",
                "name" : "Pants FORCLAZ",
                "options": ["Size", "M", "XL"]
            }
            ,{
                "type" : "Men",
                "img" : "menTshirt",
                "price" : "5.00",
                "name" : "T-SHIRT",
                "options": ["Size", "XL"]
            }
            ,{
                "type" : "Women",
                "img" : "womenTshirt",
                "price" : "3.21",
                "name" : "T-SHIRT",
                "options":  ["Size", "S", "M", "L", "XL"]
            }
            ,{
                "type" : "Women",
                "img" : "womwnBackpack",
                "price" : "31",
                "name" : "backpack",
                "options": ["color", "red", "blue", "black"]
            }
            , {
                "type" : "Other",
                "img" : "car",
                "price" : "0",
                "name" : "car",
                "options": ["color", "red", "blue", "black"]
            }
        ]
    };

    $scope.isForsingStarted = false;
    $scope.showItemOrNot = function(item){
        if($scope.isForsingStarted){
            return true;
        } else {
            let lowerCat = item.type.toLowerCase();
            let cat = $scope.showCategory[lowerCat];
            return cat;
        }
    };
    $scope.startForsing = function(){
        $scope.isForsingStarted = true;
    };
    $scope.stopForsing = function(){
        $scope.isForsingStarted = false;
    };

    $scope.showCategory = {
        "men" : true,
        "women" : true,
        "child": false
    };

}]);


app.controller('menuCtrl', ['$scope', function ($scope) {

    $scope.data = {
        "footerMenu" : [
            {
                "name": "Credits",
                "link": "https://softswiss.com/",
                "title": "credits"
            },
            {
                "name": "Privacy",
                "link": "https://softswiss.com/",
                "title": "privacy"
            },
            {
                "name": "About",
                "link": "https://www.softswiss.com/about-us/",
                "title": "about us"
            },
            {
                "name": "Contact",
                "link": "https://www.softswiss.com/contact-us/",
                "title": "contact us"
            }
        ]};

}]);