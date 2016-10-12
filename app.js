let app = angular.module('audioApp', ['ui.router']);

app.factory("AudioService", function () {
    let songArray = [
        { songTitle: 'AllStar', artistName: 'Smashmouth'},
        { songTitle: 'Mastermind', artistName: 'DOOM'},
        { songTitle: 'Feel Good Inc.', artistName: 'Gorillaz'},
        { songTitle: 'Blame It On Me', artistName: 'George Ezra'},
    ];

    let friendArray = [
        { friendName: "Dennis", songsLiked: 77},
        { friendName: "Dee", songsLiked: 32},
        { friendName: "Frank", songsLiked: 15},
        { friendName: "Charlie", songsLiked: 4},
        { friendName: "Mac", songsLiked: 3},
    ];

    let userArray = ["Logan", "Wade Wilson", "Peter Parker"];

    let grandArray = ["Spawn", "Deathstroke", "Magneto", "Dracula"];

    return {
        getSongs: function() {
            return songArray;
        },

        getFriends: function() {
            return friendArray;
        },

        getUser: function() {
            return userArray[Math.floor(Math.random() * userArray.length)];
        },

        getGrandson: function() {
            return grandArray[Math.floor(Math.random() * grandArray.length)]; 
        }
    }
});

app.config(function ($stateProvider) {

    $stateProvider.state({
        name: "home",
        url: "/home",
        component: "home",
    });

    $stateProvider.state({
        name: "listOfSongs",
        url: 'components/songs',
        component: "songs",
    });

    $stateProvider.state({
        name: "listOfFriends",
        url: "components/friends",
        component: "friends",
    })
});

app.component('home', {
    templateUrl: 'components/home.html',
    controller: 'HomeController',
});

app.controller('HomeController', function($scope, AudioService) {
    $scope.username = AudioService.getUser();
    $scope.grandson = AudioService.getGrandson();
    $scope.songs = AudioService.getSongs();
    $scope.friends = AudioService.getFriends();
});

app.component('songs', {
    templateUrl: 'components/songs.html',
    controller: 'SongListController',
});

app.controller('SongListController', function($scope, AudioService) {
    $scope.songs = AudioService.getSongs();
});

app.component('tune', {
    templateUrl: 'components/tune.html',
    bindings: {
        tune: '<',
    },
    controller: 'TuneController',
});

app.controller('TuneController', function ($scope) {
    $scope.play = function (tune) {
        console.log('Playing ' + tune.songTitle);
    }
});

app.component('friends', {
    templateUrl: 'components/friends.html',
    controller: 'FriendController',
});

app.controller('FriendController', function($scope, AudioService) {
    $scope.friends = AudioService.getFriends();
});

app.component('freunde', {
    templateUrl: 'components/freunde.html',
    bindings: {
        freunde: '<',
    },
});