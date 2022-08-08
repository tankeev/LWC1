import { LightningElement } from 'lwc';

export default class EventParent extends LightningElement {
    handleClick(event){
        window.alert("Hey yopu clicked the button from child")
    }
}