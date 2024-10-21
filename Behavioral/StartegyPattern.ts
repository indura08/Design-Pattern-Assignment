interface TextStartegy {
    formatText(text:string): string
}

class UpperCaseStrategy implements TextStartegy{
    formatText(text: string): string {
        return text.toUpperCase();
    }
}

class LowerCaseStartegy implements TextStartegy{
    formatText(text: string): string {
        return text.toLocaleLowerCase()
    }
}

class TextFormatter {
    private startegy: TextStartegy
    setForMatterstrategy(strategy: TextStartegy):void{
        this.startegy = strategy;
    }

    public format(text:string):string {
        return this.startegy.formatText(text);
    }
}