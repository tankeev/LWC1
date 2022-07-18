import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    Name = 'Iskhak';

    inputValue='';
    handleBlur(event){
        this.Name = event.target.value
    }
}