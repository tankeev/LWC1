import { LightningElement } from 'lwc';

export default class Getters extends LightningElement {
fname = '';
lname = '';

num1 = 12;
num2 = 2;

get fullNameUpperCs(){
    return `${this.fname.toUpperCase()} ${this.lname.toUpperCase()}`
}



handleChange1(event){
    this.num1 = event.target.value;
}
handleChange2(event){
    this.num2 = event.target.value;
}

get total(){
    return `${parseInt(this.num1)+parseInt(this.num2)}`
}




}
