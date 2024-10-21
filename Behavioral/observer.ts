interface Observer {
    updates(news:string): void;
}

//subject
class NewsPaperAgency {
    private Observers: Observer[] = [];
    private news:string

    //attach observers
    addObservers(newObserver:Observer):void{
        this.Observers.push(newObserver);
    }

    //deattachan obsersers
    removeObserver(existingObserver: Observer){
        const index = this.Observers.indexOf(existingObserver);
        if(index > -1){
            this.Observers.splice(index, 1);
        }
    }

    //notify observers
    setNews(news:string):void{
        this.news = news
        this.notifyObservre();
    }

    private notifyObservre():void{
        for(const observre of this.Observers){
            observre.updates(this.news);
        }
    }
}
 
class Subsriber implements Observer {
    private name : string;

    constructor(name:string){
        this.name=name;
    }

    updates(news: string): void {
        console.log(`${this.name} got the news : ${news}`)
    }
}

const subsriber1 = new Subsriber("mbappe")
const subsriber2 = new Subsriber("bellingham")

const newsAgency = new NewsPaperAgency()

newsAgency.addObservers(subsriber1);
newsAgency.addObservers(subsriber2);

newsAgency.setNews("real madrid are the champions");

