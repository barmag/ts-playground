interface Person {
    name: string;
    birthDate: Date;
    get age(): number;
}

class Player implements Person {
    name: string;
    birthDate: Date;
    get age(): number {
        if(this.birthDate){
            const ageTimeDiffInSeconds = Date.now() - this.birthDate.getTime() / 1000;
            const ageTimeDiffInDays = ageTimeDiffInSeconds / (60 * 60 * 24);
            return Math.abs(Math.round(ageTimeDiffInDays / 365.25));
        }
        throw new Error("Birthdate is required!");
    }
    
}