(function(){
    var weatherComponent={
        templateUrl: "home.html",
        controller: function(WeatherService){

        }
    }

    angular
    .module("app")
    .component("weatherComponent", weatherComponent)
})();