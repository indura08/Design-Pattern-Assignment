//subject class
var NewsPaperAgency = /** @class */ (function () {
    function NewsPaperAgency() {
        this.Observers = [];
    }
    //attach
    NewsPaperAgency.prototype.addObservers = function (newObserver) {
        this.Observers.push(newObserver);
    };
    //deattach
    NewsPaperAgency.prototype.removeObserver = function (existingObserver) {
        var index = this.Observers.indexOf(existingObserver);
        if (index > -1) {
            this.Observers.splice(index, 1);
        }
    };
    //notify
    NewsPaperAgency.prototype.setNews = function (news) {
        this.news = news;
        this.notifyObservre();
    };
    NewsPaperAgency.prototype.notifyObservre = function () {
        for (var _i = 0, _a = this.Observers; _i < _a.length; _i++) {
            var observre = _a[_i];
            observre.updates(this.news);
        }
    };
    return NewsPaperAgency;
}());
//subscribers 
var Subsriber = /** @class */ (function () {
    function Subsriber(name) {
        this.name = name;
    }
    Subsriber.prototype.updates = function (news) {
        console.log("".concat(this.name, " got the news : ").concat(news));
    };
    return Subsriber;
}());
var subsriber1 = new Subsriber("mbappe");
var subsriber2 = new Subsriber("belligham");
var newsAgency = new NewsPaperAgency();
newsAgency.addObservers(subsriber1);
newsAgency.addObservers(subsriber2);
newsAgency.setNews("real madrid are champions");
