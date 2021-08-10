// export allows import from other modules
export class CheckingAccount2 {
    private _balance = 0;   // private field definition in TS

    get balance() {
        return this._balance;       // this keyword is mandatory in TS unlike c# for example
    }

    set balance(val: number){
        this._balance = val;
    } 

    /// constructor with ts automatic properties
    constructor(public accountNumber: string){

    }
}