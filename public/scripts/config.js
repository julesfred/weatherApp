(function(){
    angular
        .module("app")
        .config(function($routeProvider){
            $routeProvider
            .when("/home", {
                template:"<weather-component></weather-component>"
            })
            .otherwise({ redirectTo: "/home" });
        })
})();