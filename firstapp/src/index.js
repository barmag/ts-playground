class Player {
    name;
    birthDate;
    get age() {
        if (this.birthDate) {
            const ageTimeDiffInSeconds = Date.now() - this.birthDate.getTime() / 1000;
            const ageTimeDiffInDays = ageTimeDiffInSeconds / (60 * 60 * 24);
            return Math.abs(Math.round(ageTimeDiffInDays / 365.25));
        }
        throw new Error("Birthdate is required!");
    }
}
