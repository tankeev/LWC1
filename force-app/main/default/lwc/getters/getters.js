import { LightningElement } from 'lwc';

export default class Getters extends LightningElement {
fname = 'john';
lname = 'nash';

get fullNameUpperCs(){
    return `${this.fname.toUpperCase()} ${this.lname.toUpperCase()}`
}
}
