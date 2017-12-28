(function(){
    angular
        .module("app")
        .config(function($routeProvider){
            $routeProvider
            .when("/home", {
                template:"<component></component>"
            })
            .otherwise({ redirectTo: "/home" });
        })
})();