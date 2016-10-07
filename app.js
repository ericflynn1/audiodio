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
    $scope.login = function (username, password) {
        $scope.user = userInfo.login(username, password);
        $scope.username = "";
        $scope.password = "";
    }
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

app.component('track', {
    templateUrl: 'components/track.html',
    bindings: {
        track: '<',
    },
    controller: 'trackController',
});

app.controller('trackController', function ($scope) {
    $scope.play = function (track) {
        console.log('Playing ' + track.songTitle);
    }
});

app.component('friends', {
    templateUrl: 'components/friends.html',
    controller: 'FriendController',
});

app.controller('FriendController', function ($scope, audioService) {
    $scope.friends = audioService.getFriends();
});

app.component('freund', {
    templateUrl: 'components/freund.html',
    bindings: {
        freund: '<',
    },
});
app.factory("userInfo", function () {
    //variable has no meaning outside of this function
    let userInfo = { username: null, password: null };
    console.log(userInfo);
    return {
        login: function (username, password) {
            userInfo.username = username;
            userInfo.password = password;
            return userInfo
        },
        getuserInfo(){
            return userInfo
        }

    }
});