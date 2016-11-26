// MODULE
var tvApp = angular.module('tvApp',['ngRoute']);

// ROUTES
tvApp.config(function ($routeProvider) {
	$routeProvider
    
    .when('/', {
        templateUrl: 'pages/series.html',
        controller: 'seriesController'
    })
    .when('/anime', {
        templateUrl: 'pages/anime.html',
        controller: 'seriesController'
    })
    .when('/series/american-dad', {
        templateUrl: 'pages/series/american-dad.html',
        controller: 'seriesController'
    })
    .when('/series/archer', {
        templateUrl: 'pages/series/archer.html',
        controller: 'seriesController'
    })
    .when('/series/ajin', {
        templateUrl: 'pages/series/ajin.html',
        controller: 'seriesController'
    })
    .when('/series/assassination-classroom', {
        templateUrl: 'pages/series/assassination-classroom.html',
        controller: 'seriesController'
    })
    .otherwise({ 
      redirectTo: '/' 
    });
});

//CONTROLLER
tvApp.controller('seriesController', ['$scope','$route',function($scope,$route){
    $scope.americanDad = [
        {
        	name: 'American Dad',
        	summary: 'American Dad! is an American adult animated sitcom created by Seth MacFarlane, Mike Barker, and Matt Weitzman for the Fox Broadcasting Company. American Dad! is the first television series to have its inception on Animation Domination. The series premiere aired on February 6, 2005, following Super Bowl XXXIX, three months before the rest of the first season aired as part of the Animation Domination block, commencing on May 1, 2005.',
        	seasons: '12',
        	episodes: '213',
        	urlTrailer: 'http://www.youtube.com'
        }
    ]
    $scope.archer = [
        {
        	name: 'Archer',
        	summary: 'Archer is an American adult animated spy comedy television series created by Adam Reed for the FX network. The pilot episode of the series aired as a sneak peek on September 17, 2009, before the show made its official debut on January 14, 2010. On June 21, 2016, FX renewed the series for an eighth, ninth, and tenth season, each to consist of eight episodes. It was announced at San Diego Comic-Con 2016 that the eighth season will premiere in January 2017, and the show will move to FX\'s sister network FXX. Reed indicated in September 2016 that he planned to end the series after the tenth season',
        	seasons: '7',
        	episodes: '83',
        	urlTrailer: 'http://www.youtube.com'
        }
    ]
    $scope.ajin = [
        {
            name: 'Ajin',
            summary: 'Ajin: Demi-Human is a seinen manga written and illustrated by Gamon Sakurai. It is being adapted into an anime film trilogy and a television series. The story is about a student named Kei Nagai, who discovers he is an immortal "Ajin" when he is hit by a truck. He becomes a wanted person because the Ajin are considered dangerous inhuman beings and the only person who is there to support him is his childhood friend, Kaito. While the government claims to help Ajin live in a safe environment, they are actually using them as subjects for cruel and inhumane experimentation. As a result, Ajin that have escaped are bent on revenge with the exception of Kei. During his escape it is subtly revealed he lacks the capacity for empathy and throughout the series only shows an interest in his own goals, pointing to the conclusion that Kei has antisocial personality disorder.',
            seasons: '1',
            episodes: '13',
            urlTrailer: 'http://www.youtube.com'
        }
    ]
    $scope.assassinationClassroom = [
        {
            name: 'Assassination Classroom',
            summary: 'Assassination Classroom is a Japanese manga series written and illustrated by Yūsei Matsui. The series was serialized on Shueisha\'s Weekly Shōnen Jump magazine from July 2012 to March 2016 and is licensed in English by Viz Media. The series follows the daily lives of an extremely powerful octopus-like teacher and his students dedicated to the task of assassinating him to prevent Earth from being destroyed. As of July 2016, twenty-one tankōbon volumes have been released in Japan with a circulation of 20 million copies. A single original video animation adaptation by Brain\'s Base based on the series was screened at the Jump Super Anime Tour on October to November 2013. This was followed by a television anime adaptation by Lerche, which began airing on Fuji TV in January 2015. This adaptation has been licensed by Funimation for release in North America. The series was obtained by Madman Entertainment for digital distribution in Australia and New Zealand. A live action film adaptation was released on March 21, 2015. A sequel, Assassination Classroom: Graduation, was released in March 25, 2016.',
            seasons: '2',
            episodes: '47',
            urlTrailer: 'http://www.youtube.com'
        }
    ]
}]);

//DIRECTIVES
tvApp.directive('seriesList',function(){
	return {
		templateUrl: 'directives/series-list.html',
		scope: { 
			seriesObject: "="
		}
	}
});
tvApp.directive('animeList',function(){
    return {
        templateUrl: 'directives/anime-list.html',
        scope: { 
            seriesObject: "="
        }
    }
});
tvApp.directive('seriesContent',function(){
	return {
		templateUrl: 'directives/series-content.html',
		scope: { 
			seriesObject: "=" 
		}
	}
});