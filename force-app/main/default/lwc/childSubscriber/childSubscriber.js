import { LightningElement,wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation'
import { registerListener } from 'c/pubsub';

export default class ChildSubscriber extends LightningElement {

    viewMsgg;
    @wire(CurrentPageReference) pageRef;

    connectedCallback(){
        registerListener(
            "parentPublisher",this.showDetails, this
        )
        }
        showDetails(data){
            this.viewMsgg=data;
        }
    
}