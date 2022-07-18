import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    
    inputValue='';
    handleinput(event){
        this.inputValue = event.target.value
    }
}