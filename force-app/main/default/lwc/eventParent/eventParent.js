import { LightningElement } from 'lwc';

export default class EventParent extends LightningElement {
    handleClick(event){
        window.alert("Hey yopu clicked the button from child")
    }

    eventName2;
    handleClick12(event){
        this.eventName2 = event.detail.inputValueName+ ' | ' +event.detail.inputValueSurname;
    }
    
}