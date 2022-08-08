import { LightningElement, wire } from 'lwc';
import getAccount from '@salesforce/apex/accountFilter.getAccount';


export default class DecoratorsChild extends LightningElement {
    filterWord = '';
    accounts;
    error;

    
    handleInput(event){
        this.filterWord = event.target.value
    }

    handleGetAccount() {
        getAccount({filter:this.filterWord})
            .then(result => {
                this.accounts = result;
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                this.accounts = undefined;
            });
    }
}
