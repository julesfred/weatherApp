(function(){
    var weatherComponent={
        templateUrl: "weather.html",
        controller: function(WeatherService, $http){
            var vm = this;
        }
    }

    angular
    .module("app")
    .component("weatherComponent", weatherComponent)
})();

//http://api.wunderground.com/api/50c6e456b5180af2/conditions/q/CA/San_Francisco.json