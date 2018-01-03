(function(){
    var weatherComponent={
        templateUrl: "weather.html",
        controller: function(WeatherService, $http){
            var vm = this;
            vm.enterLocation = function(city, state){
                console.log(city, state);
                WeatherService.placeLocation(city, state)
            }
        }
    }

    angular
    .module("app")
    .component("weatherComponent", weatherComponent)
})();

