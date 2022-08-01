import { LightningElement, wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

const COLUMNS = [
    { label: 'Account Name', fieldName: NAME_FIELD.fieldApiName, type: 'text' },
];

export default class DecoratorsChild extends LightningElement {
    columns = COLUMNS;
    @wire(getAccounts)
    accounts;


    handleAccount(event){
         this.COLUMNS=event.target.value
    }
}
