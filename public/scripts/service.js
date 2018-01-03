(function(){
    function WeatherService($http){

        return {
            placeLocation: placeLocation
        }
        
        function placeLocation(ci, st){
            console.log(ci, st);
            return $http({
                url: "http://api.wunderground.com/api/50c6e456b5180af2/conditions/q/"+st+"/"+ci+".json",
                method: "GET"
            }).then(function(response){
                console.log(response);
                return response;
            })
        }
    }
    angular
        .module("app")
        .factory("WeatherService", WeatherService);
})();