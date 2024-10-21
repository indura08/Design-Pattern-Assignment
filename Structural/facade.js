var DVDPlayer = /** @class */ (function () {
    function DVDPlayer() {
    }
    DVDPlayer.prototype.on = function () {
        console.log("the dvd player is on");
    };
    DVDPlayer.prototype.playMovie = function (movie) {
        console.log("".concat(movie, " is currently playing on the dvdplayer"));
    };
    return DVDPlayer;
}());
var SoundSystem = /** @class */ (function () {
    function SoundSystem() {
    }
    SoundSystem.prototype.on = function () {
        console.log("the sound system is on");
    };
    SoundSystem.prototype.setVolume = function (vol) {
        console.log("".concat(vol, " is the current level of volume"));
    };
    return SoundSystem;
}());
var HomeTheatreSystem = /** @class */ (function () {
    function HomeTheatreSystem(dvdPlayer, soundsystme) {
        this.dvdplayer = dvdPlayer;
        this.Soundsystem = soundsystme;
    }
    HomeTheatreSystem.prototype.watchMovie = function (movie) {
        this.dvdplayer.on();
        this.Soundsystem.on();
        this.dvdplayer.playMovie(movie);
        this.Soundsystem.setVolume(50);
    };
    return HomeTheatreSystem;
}());
var samsung = new DVDPlayer();
var toshiba = new SoundSystem();
var Singer = new HomeTheatreSystem(samsung, toshiba);
Singer.watchMovie("Dead peots society");
