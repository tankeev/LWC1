import { LightningElement } from 'lwc';

export default class EventChild2 extends LightningElement {
    inputValue2;

    handleChange2(event){
        this.inputValue2 = event.detail.value;
    }

    handleClick2(event){
        const newEvent2 = new CustomEvent('clicked2',{detail:this.inputValue2})
        this.dispatchEvent(newEvent2)
    }
}