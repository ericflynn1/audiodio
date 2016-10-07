let app = angular.module('SongApp', ['ui.router']);

app.factory("audioService", function () {
    let songArray = [
        { songTitle: 'AllStar', artistName: 'Smashmouth' },
        { songTitle: 'Mastermind', artistName: 'DOOM' },
        { songTitle: 'Feel Good Inc.', artistName: 'Gorillaz' },
        { songTitle: 'Blame It On Me', artistName: 'George Ezra' },
    ];

    let friendArray = [
        { friendName: "Dennis", songsLiked: 77 },
        { friendName: "Dee", songsLiked: 32 },
        { friendName: "Frank", songsLiked: 15 },
        { friendName: "Charlie", songsLiked: 4 },
        { friendName: "Mac", songsLiked: 3 },
    ];

    let userArray = ["Logan", "Wade Wilson", "Peter Parker"];

    let kindArray = ["Spawn", "Deathstroke", "Magneto", "Dracula"];

    return {
        getSongs: function () {
            return songArray;
        },

        getFriends: function () {
            return friendArray;
        },

        getUser: function () {
            return userArray[Math.floor(Math.random() * userArray.length)];
        },

        getKind: function () {
            return kindArray[Math.floor(Math.random() * kindArray.length)];
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
        url: '/songs',
        component: "songs",
    });

    $stateProvider.state({
        name: "listOfFriends",
        url: "/friends",
        component: "friends",
    })
});

app.component('home', {
    templateUrl: 'components/home.html',
    controller: 'HomeController',
});

app.controller('HomeController', function ($scope, audioService) {
    $scope.username = audioService.getUser();
    $scope.grandson = audioService.getKind();
    $scope.songs = audioService.getSongs();
    $scope.friends = audioService.getFriends();
});

app.component('songs', {
    templateUrl: 'components/songs.html',
    controller: 'SongListController',
});

// these actually are all good songs (and albums), by the way, 
// in case you need something to listen to
app.controller('SongListController', function ($scope, audioService) {
    $scope.songs = audioService.getSongs();
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

app.controller('FriendController', function ($scope, audioService) {
    $scope.friends = audioService.getFriends();
});

app.component('chum', {
    templateUrl: 'components/chum.html',
    bindings: {
        chum: '<',
    },
});