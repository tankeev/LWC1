import { LightningElement } from 'lwc';

export default class OrderComponent extends LightningElement {
    ingredients =[
        {
            id:1,
            name:'cheese'
        },
        {
            id:2,
            name:'olive'
        },
        {
            id:3,
            name:'pepperoni'
        },
        {
            id:4,
            name:'onion'
        },]
    drinks =[
        {
            id:1,
            name:'water'
        },
        {
            id:2,
            name:'coke'
        },
        {
            id:3,
            name:'sprite'
        },
        {
            id:4,
            name:'fanta'
        },]

    buttonClick;

    handleOrderButton1(event){
        this.buttonClick = event.target.buttonClick;
    }
}