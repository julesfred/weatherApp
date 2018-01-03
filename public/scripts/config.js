(function(){
    angular
        .module("app")
        .config(function($routeProvider){
            $routeProvider
            .when("/weather", {
                template:"<weather-component></weather-component>"
            })
            .otherwise({ redirectTo: "/home" });
        })
})();