import { LightningElement } from 'lwc';

export default class Conditional_rendering extends LightningElement {
    isTrue = false;
    Display = false;

    handleChange(event){
        this.Display = event.target.checked; 
    }
}