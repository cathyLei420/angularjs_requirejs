requirejs.config({
    baseUrl:'js',
    paths : {
        angular : [
            'https://code.angularjs.org/1.5.5/angular.min',
            'lib/angular.min'
        ],
        angular_route : [
            'https://code.angularjs.org/1.5.5/angular-route.min',
            'lib/angular.route.min'
        ],
        jquery:[
            'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min',
            'lib/jquery.min'
        ],
        applib : 'lib/applib'
    }
});