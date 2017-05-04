'use strict';

angular.module('dockerui', ['ngRoute', 'dockerui.services', 'dockerui.filters'])
    .config(['$routeProvider', function ($routeProvider) {
            //home
        $routeProvider.when('/', {templateUrl: 'partials/home.html'}); 
      
        
            //EalsticSearch
        $routeProvider.when('/logs', {templateUrl: 'partials/logs.html', controller: 'logsController'}); 
        $routeProvider.when('/elasticsearch', {templateUrl: 'partials/Elastic/elasticsearch.html', controller: 'elasticsearchController'}); 
        $routeProvider.when('/kibana', {templateUrl: 'partials/Elastic/kibana.html', controller: 'kibanaController'}); 
       
            //Jenkins
        $routeProvider.when('/jenkins', {templateUrl: 'partials/jenkins.html', controller: 'jenkinsController'}); 
         $routeProvider.when('/jreports', {templateUrl: 'partials/Jenkins/reports.html', controller: 'jreportsController'}); 

            //Sonar
        $routeProvider.when('/sonar', {templateUrl: 'partials/Sonar/sonar.html', controller: 'sonarController'}); 

            //Docker
           
  
        $routeProvider.when('/docker', {templateUrl: 'partials/masthead.html', controller: 'MastheadController'}); 
        $routeProvider.when('/dashborad', {templateUrl: 'partials/dashboard.html', controller: 'DashboardController'}); 
        $routeProvider.when('/containers/', {templateUrl: 'partials/containers.html', controller: 'ContainersController'});
        $routeProvider.when('/containers/:id/', {templateUrl: 'partials/container.html', controller: 'ContainerController'});
        $routeProvider.when('/images/', {templateUrl: 'partials/images.html', controller: 'ImagesController'});
        $routeProvider.when('/images/:id/', {templateUrl: 'partials/image.html', controller: 'ImageController'});
        $routeProvider.when('/infos', {templateUrl: 'partials/settings.html', controller: 'SettingsController'});
        $routeProvider.otherwise({redirectTo: '/'});
    }])
    // This is your docker url that the api will use to make requests
    // You need to set this to the api endpoint without the port i.e. http://192.168.1.9
    .constant('DOCKER_ENDPOINT', '/dockerapi')
    .constant('DOCKER_PORT', '') // Docker port, leave as an empty string if no port is requred.  If you have a port, prefix it with a ':' i.e. :4243
    .constant('UI_VERSION', 'v0.4')
    .constant('DOCKER_API_VERSION', 'v1.8');
