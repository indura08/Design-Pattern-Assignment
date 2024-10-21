class DVDPlayer {
    public on(): void{
        console.log("the dvd player is on")
    }

    public playMovie(movie:string):void{
        console.log(`${movie} is currently playing on the dvdplayer`)
    }

}

class SoundSystem {
    public on(): void{
        console.log("the sound system is on")
    }
    public setVolume(vol:Number):void{
        console.log(`${vol} is the current level of volume`)
    }
}

class HomeTheatreSystem {
    private dvdplayer:DVDPlayer;
    private Soundsystem: SoundSystem;

    public constructor(dvdPlayer:DVDPlayer , soundsystme:SoundSystem){
        this.dvdplayer = dvdPlayer;
        this.Soundsystem = soundsystme;
    }

    public watchMovie(movie:string): void{
        this.dvdplayer.on()
        this.Soundsystem.on()
        this.dvdplayer.playMovie(movie)
        this.Soundsystem.setVolume(50)
    }
}

const samsung = new DVDPlayer()
const toshiba = new SoundSystem()

const Singer = new HomeTheatreSystem(samsung, toshiba)

Singer.watchMovie("Dead poets society");

