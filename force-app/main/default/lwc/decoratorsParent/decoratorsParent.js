import { LightningElement, track } from 'lwc';

export default class DecoratorsParent extends LightningElement {
    @track person = {
        name: 'azamat',
        age: 30
    }

    handlePerson(event){
        this.person.name = event.target.value
    }
}