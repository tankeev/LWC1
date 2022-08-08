import { LightningElement } from 'lwc';

export default class EventChild2 extends LightningElement {
    copyPerson;
    person={
        inputValueName:'',
        inputValueSurname:''
    }
    
    
    //input name
    handleChangeName(event){
        this.person.inputValueName = event.detail.value;
    }

    //input surname
    handleChangeSurname(event){
        this.person.inputValueSurname = event.detail.value;
    }

    handleClick2(event){
        this.copyPerson = Object.assign({},this.person)
        const newEvent2 = new CustomEvent('clicked2',{detail:this.copyPerson})
        this.dispatchEvent(newEvent2)
    }
}