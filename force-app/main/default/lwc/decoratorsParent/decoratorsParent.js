import { LightningElement, track } from 'lwc';

export default class DecoratorsParent extends LightningElement {
    @track person = {
        name: 'azamat',
        age: 30
    }

    handlePerson(event){
        this.person.name = event.target.value
    }

    @track 
    familyMembers=[
        {
            name:'Sam',
            id:0
        },
        {
            name:'Pole',
            id:1
        }
    ]
    count=1;

    handleFamilyMembers(event){
        this.count++;
        const newName = event.target.value
        
        const newObj = {
            name:newName,
            id:this.count
        }

        this.familyMembers.push(newObj)
    }



}