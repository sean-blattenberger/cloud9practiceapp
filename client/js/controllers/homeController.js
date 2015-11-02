myApp.controller('homeController', ['$scope', function($scope) {
    $scope.myInterval = 4000;
    $scope.slides = [{
        image: "/img/jon.jpg",
        link: "http://freecodecamp.com/sean-blattenberger"
    },
    {
        image: "/img/papandi.jpg",
        link: "http://freecodecamp.com/sean-blattenberger"
    },
    {
        image: "/img/1920.png", 
        link: "http://freecodecamp.com/sean-blattenberger"
    }];
}]);