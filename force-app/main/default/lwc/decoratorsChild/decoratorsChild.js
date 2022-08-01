import { LightningElement, wire } from 'lwc';
import getAccount from '@salesforce/apex/accountFilter.getAccount';


export default class DecoratorsChild extends LightningElement {
    filterWord = '';

    @wire(getAccount,{filter:'$filterWord'})accounts;

    handleAccount(event){
        this.filterWord = event.target.value
    }
}
